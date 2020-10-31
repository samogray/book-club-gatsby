import React from "react"
import Layout from "../components/layout"

const BookPage = ({ pageContext }) => {
  const { title, author, summary, localImage } = pageContext
  return (
    <Layout>
      <img src={localImage.publicURL} alt={title} />
      <h1>
        {title} - <small>{author.name}</small>
      </h1>
      <p>{summary}</p>
    </Layout>
  )
}

export default BookPage
