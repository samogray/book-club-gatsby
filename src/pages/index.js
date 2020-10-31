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
          <>
            <h1 key={node.id}>
              {node.title}
              <small>{node.author.name}</small>
            </h1>
            <div>{node.summary}</div>
            <Link to={`/book/${node.id}`}>Join conversation</Link>
          </>
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
