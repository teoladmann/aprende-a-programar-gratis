import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../data/SiteConfig';

import '../../styles/main.scss';

import favicon from '../../static/favicon.png';

import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Aprende a Programar Gratis">
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Navigation />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
