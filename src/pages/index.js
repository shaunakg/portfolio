import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout id="hero">
    <Hero content={data.hero.edges[0].node}/>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`
