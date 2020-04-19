import React, { useState, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import useInterval from "../hooks/useInterval"

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
const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Fath1 = styled.h1`
  font-size: 4em;
`

const IndexPage = () => {
  const phrases = [
    "s",
    "t",
    "r",
    "o",
    "n",
    "g",
    ",",
    "r",
    "a",
    "d",
    "i",
    "c",
    "a",
    "l",
    ",",
    "a",
    "w",
    "e",
    "s",
    "o",
    "m",
    "e",
    ",",
  ]
  const [phrase, setPhrase] = useState("|")
  const [index, setIndex] = useState(0)
  const [end, setEnd] = useState({ end: false, process: false, restart: false })
  useInterval(() => {
    const slicedPhrase = phrase.slice(0, phrase.length - 1)
    if (!end.end) {
      setPhrase(slicedPhrase + phrases[index] + "|")
      setIndex(index + 1)
      if (index === phrases.length - 1) {
        setIndex(0)
      }
      if (phrases[index] === ",") {
        setPhrase(slicedPhrase)
        setEnd({ ...end, end: true })
      }
    } else {
      if (!end.process) {
        setPhrase(phrase + "|")
        setEnd({ ...end, process: true })
      } else {
        if (!end.restart) {
          setPhrase("|")
          setEnd({ ...end, restart: true })
        } else {
          setPhrase("|")
          setEnd({ end: false, process: false, restart: false })
        }
      }
    }
  }, 200)

  return (
    <Layout>
      <IntroContainer>
        <Fath1>A UI Collection.</Fath1>
        <Fath1>{phrase.toUpperCase()}</Fath1>
        <p>
          Build something great, with these crafted pages and modular
          components.
        </p>

        <Button to="#demos">View Demos</Button>
      </IntroContainer>

      <section
        id="demos"
        css={{
          background: "white",
          padding: "2em",
        }}
      >
        <h1
          css={{
            color: "black",
          }}
        >
          Landing Pages
        </h1>
        <CardList />
      </section>
    </Layout>
  )
}

export default IndexPage
