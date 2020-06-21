const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const lessonTemplate = path.resolve('./src/templates/lesson.js');
  const res = await graphql(`
    query {
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
  `);

  res.data.allMarkdownRemark.group.forEach(group => {
    group.edges.forEach((edge, index) => {
      const previous = index === 0 ? null : group.edges[index - 1].node;
      const next =
        index === group.edges.length - 1 ? null : group.edges[index + 1].node;

      createPage({
        component: lessonTemplate,
        path: `/clase/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};
