import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout';

const Lesson = ({ data, pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        style={{ marginBottom: '30px' }}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></div>
      <nav className="nav-prev-next">
        <span className="prev">
          {previous && (
            <Link
              to={`clase/${previous.fields.slug}`}
              rel="prev"
              style={{
                padding: '10px',
              }}
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
        </span>
        <span className="next">
          {next && (
            <Link
              to={`clase/${next.fields.slug}`}
              rel="next"
              style={{
                padding: '10px',
              }}
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </span>
      </nav>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      html
    }
  }
`;

export default Lesson;
