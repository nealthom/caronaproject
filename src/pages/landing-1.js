import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <section>
      <h1>Hi from Landing Page 1</h1>
      <p>Welcome to Landing Page 1</p>
      <Link to="/" style={{ color: "black" }}>
        Go back to the homepage
      </Link>
    </section>
  </Layout>
)

export default SecondPage
