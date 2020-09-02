import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import config from '../data/SiteConfig';

import Layout from '../layout';
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
            Bienvenido{' '}
            <span role="img" aria-label="Emoji Saludo">
              👋
            </span>
          </h1>
          <h2 className="subheading">
            Programatis es un sitio creado para que puedas aprender programación
            web de forma <strong>gratuita</strong> y en <strong>español</strong>
            .
          </h2>
          <h3 className="subheading">
            <span role="img" aria-label="Emoji Construcción">
              🚧{' '}
            </span>
            <strong>En construcción</strong>
            <span role="img" aria-label="Emoji Construcción">
              {' '}
              🚧
            </span>
          </h3>
        </div>
        {/* <div>
          <h2>Contenido</h2>
          <ol>
            {data.allMarkdownRemark.edges.map((edge, key) => (
              <Article key={key} edge={edge} />
            ))}
          </ol>
        </div> */}
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query queryHome {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___order }) {
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
`;

export default Home;
