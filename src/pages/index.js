import React, { useState, useEffect } from "react"
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
const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => {
  const phrases = ["strong", "bold", "super", "awesome", "radical"]
  const [phrase, setPhrase] = useState("")
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (index >= phrases.length) {
        setPhrase("")
        setIndex(0)
      } else {
        phrases[index].split("").forEach(char => {
          setPhrase(phrase + char)
        })

        setIndex(index + 1)
      }
    }, 1000)

    return () => {
      clearInterval(rotationInterval)
    }
  }, [phrase, index])

  return (
    <Layout>
      <IntroContainer>
        <h1 css={{ "font-size": "4em" }}>A UI Collection. with {phrase}</h1>
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
