import React from "react"
import { header, btn } from "../styles/home.module.css"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Miami.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(pngOptions: {})
      }
    }
  }
`
