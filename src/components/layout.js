import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled("div")``

export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: #0887a0;
          color: white;
          padding: 0%;
        }
        section {
          height: 100vh;
          padding: 0%;
        }
        * {
          box-sizing: border-box;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        a:visited {
          color: white;
        }
        a:hover {
          color: white;
        }
      `}
    />
    <Header />
    {children}
    <Footer />
  </Wrapper>
)
