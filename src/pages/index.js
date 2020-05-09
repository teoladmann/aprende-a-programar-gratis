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
            Programatis es una plataforma creada para que cualquier persona
            pueda aprender programación web de forma <strong>gratuita</strong> y
            en <strong>español</strong>.
          </h2>
        </div>
        <Section>
          {data.allMarkdownRemark.edges.map((edge, key) => (
            <Article key={key} edge={edge} />
          ))}
        </Section>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query queryHome {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Home;
