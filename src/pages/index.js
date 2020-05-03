import React from "react";

import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <div className="welcome">
          <h1 className="">Hola <span role="img" aria-label="Greet Emoji">👋</span></h1>
          <p className="big-text">Comienza ahora <span role="img" aria-label="Down Arrow Emoji">⬇️</span></p>
      </div>
    </Layout>
  )
}

export default Home;