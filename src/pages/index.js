import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`
const underline = css`
  text-decoration: underline;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 css={underline}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
