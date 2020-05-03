import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';

const Lesson = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String!) {
  markdownRemark (
    fields:{
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      author
    }
    html
  }
}
`

export default Lesson;