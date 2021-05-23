import React from "react"
import { header, btn } from "../styles/home.module.css"
import Layout from "../components/Layout"
import { Link } from "gatsby"
export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Miami.</p>
        </div>
        <img src="/banner.png" alt="" style={{ maxWidth: "100%" }} />
      </section>
      <Link className={btn} to="/projects">
        My Portfolio Projects
      </Link>
    </Layout>
  )
}