import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"

const Container = styled(GatsbyLink)`
  border: solid black 2px;
  border-radius: 10px;
  background: #083aa0;
  margin: 2em;
  padding: 2em;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;

  &:visited {
    color: white;
  }
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

  return (
    <Container
      css={{
        "&:hover": css`
          animation: ${bounce} 0.25s forwards;
          box-shadow: -5px 5px 5px 5px grey;
        `,
      }}
      to="/landing-1"
    >
      <h1>{title}</h1>
      <div>
        <p css={center}>{body}</p>
      </div>
    </Container>
  )
}

export default Card
