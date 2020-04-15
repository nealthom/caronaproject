import React from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"

const Container = styled.div`
  border: solid black 2px;
  background: green;
  margin: 2em;
  padding: 2em;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const bounce = keyframes`
  from{
    transform: translate3d(0,0,0);
  }


  to {
    transform: translate3d(0,-6px,0);
  }
`

const center = css`
  text-align: center;
`

const Card = props => {
  const { title, body } = props.info
  console.log(props)
  return (
    <Container
      css={{
        "&:hover": css`
          animation: ${bounce} 0.25s forwards;
          box-shadow: -5px 5px 5px 5px grey;
        `,
      }}
    >
      <h1>{title}</h1>
      <div>
        <p css={center}>{body}</p>
      </div>
    </Container>
  )
}

export default Card
