import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

const BookItem = ({ title, author, summary, imgSrc }) => {
  console.log()
  return (
    <section>
      <Img fixed={imgSrc} />
      <h1>
        {title}
        <small>{author.name}</small>
      </h1>
      <div>{summary}</div>
    </section>
  )
}

export default BookItem
