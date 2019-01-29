import React from 'react';
import { graphql } from 'gatsby';

import Article from '../components/Article';
import Bodytext from '../components/Bodytext';
import Submit from '../components/Submit';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import ContextConsumer from '../store/Context';

import config from 'content/meta/config';

const SubmitPage = props => {
  const {
    data: {
      submit: { html: submitHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    location,
  } = props;

  const {
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
    siteImage,
  } = config;

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
            <Heading title="SUBMIT" />
            <Bodytext html={submitHTML} />
            <Submit />
          </Article>
        )}
      </ContextConsumer>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
        image={siteImage}
      />
    </React.Fragment>
  );
};

export default SubmitPage;

export const query = graphql`
  query {
    submit: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/submit/" }
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
