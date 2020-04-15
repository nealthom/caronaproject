import React from "react"
import { Link } from "gatsby"

import CardList from "../components/CardList"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="#landingPages">Landing Pages</Link>
      <h1>Getting Started!</h1>
      <p>I have done a little bit of animation on my landing page grid</p>
      <p>Next up: work on first landing page to link to</p>
    </section>
    <section id="landingPages">
      <h1>Landing Pages</h1>
      <CardList />
    </section>
  </Layout>
)

export default IndexPage
