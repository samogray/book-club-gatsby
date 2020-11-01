import React from "react"
import { Link, graphql } from "gatsby"
import BookItem from "../components/BookItem"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log("props", { data })
  const books = data.allBook.edges
  return (
    <Layout>
      {books.map(({ node }) => {
        return (
          <div key={node.id}>
            <BookItem
              title={node.title}
              author={node.author}
              summary={node.summary}
              imgSrc={node.localImage.childImageSharp.fixed}
            />
            <Link to={`/book/${node.id}`}>Join conversation</Link>
          </div>
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
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
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
