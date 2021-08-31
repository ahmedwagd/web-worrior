import { graphql, Link } from "gatsby";
import React from "react";
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
// Components


export default function Home({ data }) {
  return (
    <Layout>
      <section className={`header ${styles.header}`}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in manchester</p>
          <Link to='/projects' className={`${styles.btn}`}>My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      fluid(sizes: "") {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`;