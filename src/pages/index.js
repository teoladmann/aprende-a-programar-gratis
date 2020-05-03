import React from "react";
import {graphql} from 'gatsby';

import Layout from "../layout";
import Section from "../components/Section";
import Article from "../components/Article";

const Home = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <div className="welcome">
          <h1 className="">Hola <span role="img" aria-label="Greet Emoji">👋</span></h1>
          <p className="big-text">Comienza ahora <span role="img" aria-label="Down Arrow Emoji">⬇️</span></p>
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