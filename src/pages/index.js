import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import config from '../data/SiteConfig';

import Layout from '../layout';
import Section from '../components/Section';
import Article from '../components/Article';

const Home = ({ data }) => {
  return (
    <>
      <Helmet title={config.siteTitle}>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Layout>
        <div className="welcome">
          <h1>
            Bienvenidos{' '}
            <span role="img" aria-label="Emoji Saludo">
              👋
            </span>
          </h1>
          <h2 className="subheading">
            Programatis brinda una introducción a la programación web de forma{' '}
            <strong>gratuita</strong> y en <strong>español</strong>.
          </h2>
          <h3 className="subheading">
            <span role="img" aria-label="Emoji Construcción">
              🚧{' '}
            </span>
            <strong>Sitio en construcción</strong>
            <span role="img" aria-label="Emoji Construcción">
              {' '}
              🚧
            </span>
          </h3>
        </div>
        {data.allMarkdownRemark.group.map((group, key) => (
          <Section key={key} title={group.fieldValue}>
            {group.edges.map((edge, key) => (
              <Article key={key} edge={edge} />
            ))}
          </Section>
        ))}
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query queryHome {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___order }) {
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              author
              order
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`;

export default Home;
