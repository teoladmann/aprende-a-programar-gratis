import React from "react";
import {graphql} from 'gatsby';

import Layout from "../layout";
import Section from "../components/Section";
import Article from "../components/Article";

const Home = ({ data }) => {

  return (
    <Layout>
      <div className="welcome">
          <p className="title1-not-heading">Hola <span role="img" aria-label="Emoji Saludo">👋</span></p>
          <h1 className="big-text">Aprende a programar gratis <span role="img" aria-label="Flecha Abajo">⬇️</span></h1>
      </div>
      <Section>
        {data.allMarkdownRemark.edges.map((edge, key) => (
          <Article key={key} edge={edge} />
        ))}
      </Section>
    </Layout>
  )
}

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
`

export default Home;