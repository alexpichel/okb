import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import '../styles/variables';
import '../styles/global';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ToTop from '../components/ToTop';
import prefixToDateTimeString from '../utils/prefixToDateTimeString';
import ContextConsumer, {
  ContextProviderComponent,
} from '../store/Context';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import ListIcon from 'react-feather/dist/icons/list';
import SearchIcon from 'react-feather/dist/icons/search';
import TagIcon from 'react-feather/dist/icons/tag';
import FolderIcon from 'react-feather/dist/icons/folder';
import HomeIcon from 'react-feather/dist/icons/home';
import CloseIcon from 'react-feather/dist/icons/x';
import ArrowRightIcon from 'react-feather/dist/icons/arrow-right';
import CheckIcon from 'react-feather/dist/icons/check';
import ArrowUpIcon from 'react-feather/dist/icons/arrow-up';

import config from 'content/meta/config';

const sidebarIcons = {
  calendar: CalendarIcon,
  category: FolderIcon,
  list: ListIcon,
  search: SearchIcon,
  tag: TagIcon,
  home: HomeIcon,
  close: CloseIcon,
  arrow: ArrowRightIcon,
  check: CheckIcon,
};

const LayoutWrapper = props => {
  const { headerTitle, headerSubTitle } = config;

  return (
    <StaticQuery
      query={graphql`
        query LayoutgQuery {
          allMarkdownRemark(
            filter: { fields: { slug: { ne: null }, source: { eq: "posts" } } }
            sort: { fields: [fields___prefix], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                  prefix
                }
                frontmatter {
                  title
                  agency
                  categories
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          allMarkdownRemark: { edges: rawPosts },
        } = data;

        const posts = rawPosts.map(item => {
          const {
            node: {
              fields: { slug, prefix },
              frontmatter: { title, agency, categories, tags },
            },
          } = item;

          const date = prefixToDateTimeString(prefix);

          return { title, agency, slug, date, categories, tags };
        });

        return (
          <ContextProviderComponent>
            <ContextConsumer>
              {({ data, set }) => (
                <Layout>
                  <Sidebar
                    posts={posts}
                    title={headerTitle}
                    subTitle={headerSubTitle}
                    icons={sidebarIcons}
                    sideOnMobileExposed={data.sideOnMobileExposed}
                    updateSideOnMobileExposed={val =>
                      set({
                        sideOnMobileExposed: val,
                      })
                    }
                    articleRendered={data.articleRendered}
                    updateArticleRendered={val =>
                      set({
                        articleRendered: val,
                      })
                    }
                  />

                  <main
                    id="main"
                    style={{
                      position: data.sideOnMobileExposed ? 'fixed' : '',
                    }}
                  >
                    {props.children}
                  </main>

                  <ToTop
                    icons={{ arrow: ArrowUpIcon }}
                    sideOnMobileExposed={data.sideOnMobileExposed}
                  />
                </Layout>
              )}
            </ContextConsumer>
          </ContextProviderComponent>
        );
      }}
    />
  );
};

export default LayoutWrapper;
