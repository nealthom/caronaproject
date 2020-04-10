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
      <Link to="#description">view description</Link>
    </section>
    <section id="description">
      <Link to="/">back to overview</Link>
      <CardList />
    </section>
  </Layout>
)

export default IndexPage
