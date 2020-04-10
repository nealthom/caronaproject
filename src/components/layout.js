import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  border: 2px solid purple;
  padding: 10px;
`

export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: pink;
          color: white;
        }
        section {
          height: 90vh;
        }
      `}
    />
    {children}
  </Wrapper>
)
