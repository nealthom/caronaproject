import React from "react"
import { Link as GatsbyLink } from "gatsby"

import styled from "@emotion/styled"

import CardList from "../components/CardList"
import Layout from "../components/layout"

const Button = styled(GatsbyLink)`
  display: inline-block;
  border-radius: 20px;
  background: #08a06d;
  color: white;
  padding: 1em;
  &:hover {
    background: #088c60;
  }
`

const IndexPage = () => (
  <Layout>
    <section>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Button to="#demos">View Demos</Button>
      <h1>Getting Started!</h1>
      <p>I have done a little bit of animation on my landing page grid</p>
      <p>Next up: work on first landing page to link to</p>
    </section>
    <section id="demos">
      <h1>Demos</h1>
      <CardList />
    </section>
  </Layout>
)

export default IndexPage
