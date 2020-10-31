const path = require(`path`)

const bookQuery = ` {
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
}`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const bookPageTemplate = path.resolve("src/templates/book-page.js")

  try {
    const booksFromData = await graphql(bookQuery, { limit: 1000 })

    if (booksFromData.errors) {
      throw result.errors
    }

    return booksFromData.data.allBook.edges.forEach(book => {
      return createPage({
        path: `/book/${book.node.id}`,
        component: bookPageTemplate,
        context: book.node,
      })
    })
  } catch (e) {
    console.log(e)
  }
}
