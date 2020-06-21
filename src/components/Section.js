import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2>
        <span role="img" aria-label="Emoji Papel">
          📝{' '}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
