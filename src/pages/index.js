import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log("props", { data })
  const books = data.allBook.edges
  return (
    <Layout>
      {books.map(({ node }) => {
        return (
          <section key={node.id}>
            <h1>
              {node.title}
              <small>{node.author.name}</small>
            </h1>
            <div>{node.summary}</div>
            <Link to={`/book/${node.id}`}>Join conversation</Link>
          </section>
        )
      })}
    </Layout>
  )
}
export const query = graphql`
  {
    allBook {
      edges {
        node {
          summary
          title
          localImage {
            publicURL
          }
          author {
            name
            id
          }
          id
        }
      }
    }
  }
`

export default IndexPage
