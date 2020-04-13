import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Card from "./Card"

const cards = [
  {
    title: "Me",
    body: "Who I am. Who I am. Who I am.",
  },

  {
    title: "My wife",
    body: "She lives here too. lives here too. lives here too.",
  },
  {
    title: "The Universe",
    body: "Can you hear infinity calling. Infinity calling.",
  },
  {
    title: "The music",
    body: "Influences my mind",
  },
]

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  justify-content: center;
  align-content: center;
  justify-items: center;
  border: solid blue 3px;
  height: 100%;
  padding: 0;
  margin: 0;
`

const cardList = () => (
  <div>
    <Link to="/">back to overview</Link>
    <CardGrid>
      {cards.map(card => (
        <Card info={card} />
      ))}
    </CardGrid>
  </div>
)

export default cardList
