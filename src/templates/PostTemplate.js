import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import { ShareButtonRectangle } from 'react-custom-share';

import Article from '../components/Article';
import Author from '../components/Author';
import Bodytext from '../components/Bodytext';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Meta from '../components/Meta';
import NextPrev from '../components/NextPrev';
import Seo from '../components/Seo';

import Share from '../components/Share';
import ContextConsumer from '../store/Context';

import config from 'content/meta/config';
import avatar from 'content/images/avatar.png';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import FolderIcon from 'react-feather/dist/icons/folder';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';
import MessageIcon from 'react-feather/dist/icons/message-circle';

const metaIcons = {
  calendar: CalendarIcon,
  folder: FolderIcon,
  user: UserIcon,
  tag: TagIcon,
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { logo, title, subTitle, categories, tags },
        fields: { slug, prefix },
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
      author: { html: authorHTML },
    },
    pageContext: { next, prev },
    location,
  } = props;

  const {
    siteUrl,
    siteLanguage,
    siteTitlePostfix,
    authorName,
    siteImage,
  } = config;

  const url = siteUrl + slug;
  const shareBlockProps = {
    url: url,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    ],
    text: title,
    longtext: excerpt,
  };

  return (
    <React.Fragment>
      <ContextConsumer>
        {({ data, set }) => (
          <Article
            location={location}
            articleRendered={data.articleRendered}
            updateArticleRendered={val =>
              set({
                articleRendered: val,
              })
            }
          >
            <Heading logo={logo} />
            <Heading title={title} />
            <Heading subTitle={subTitle} />
            <Meta
              author="okb"
              prefix={prefix}
              categories={categories}
              tags={tags}
              icons={metaIcons}
            />
            <Bodytext html={postHTML} />
            <Author html={authorHTML} avatar={avatar} name={authorName} />
            <Share shareBlockProps={shareBlockProps} />
            <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
          </Article>
        )}
      </ContextConsumer>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
        image={siteImage}
      />
    </React.Fragment>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        logo
        title
        subTitle
        categories
        tags
      }
    }
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
    ) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
