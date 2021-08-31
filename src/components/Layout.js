import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import '../styles/global.css';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        copyright
      }
    }
  }
  `);
  const { title, copyright } = data.site.siteMetadata;
  return (
    <div className='layout'>
      <Navbar title={title} />
      <div className="content">
        {children}
      </div>
      <Footer copyright={copyright} />
    </div>
  )
}

export default Layout;
