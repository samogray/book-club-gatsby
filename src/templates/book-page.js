import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BookItem from "../components/BookItem"
import { graphql } from "gatsby"

const BookPage = ({ data: { book } }) => {
  const { title, author, summary, localImage } = book
  return (
    <Layout>
      <BookItem
        title={title}
        author={author}
        summary={summary}
        imgSrc={localImage.childImageSharp.fixed}
      />
    </Layout>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      id
      title
      summary
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
    }
  }
`

export default BookPage
