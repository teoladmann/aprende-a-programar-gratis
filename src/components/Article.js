import React from 'react';
import { Link } from 'gatsby';

const Article = ({ edge }) => {
  return (
    <li className="index-element">
      <Link to={`/clase/${edge.node.fields.slug}`}>
        <article>
          {edge.node.frontmatter.order + '. ' + edge.node.frontmatter.title}
        </article>
      </Link>
    </li>
  );
};

export default Article;
