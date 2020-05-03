import React from 'react';

const Section = ({ children }) => {
  return (
    <section className="section">
      <h2><span role="img" aria-label="Emoji Papel">📝 </span>Introducción</h2>
      {children}
    </section>
  )
}

export default Section;