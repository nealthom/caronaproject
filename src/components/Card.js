import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  border: solid black 2px;
  background: green;
  margin: 2em;
  padding: 2em;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const center = css`
  text-align: center;
`

const Card = props => {
  const { title, body } = props.info
  console.log(props)
  return (
    <Container>
      <h1>{title}</h1>
      <p css={center}>{body}</p>
      <button>View Info</button>
    </Container>
  )
}

export default Card