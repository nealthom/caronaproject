import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  border: 2px solid purple;
  padding: 0;
`

export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: pink;
          color: white;
          padding: 0%;
        }
        section {
          height: 100vh;
          padding: 0%;
        }
        * {
          box-sizing: border-box;
        }
      `}
    />
    {children}
  </Wrapper>
)
