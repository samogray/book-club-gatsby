const path = require(`path`)

const bookQuery = ` {
  allBook {
    edges {
      node {
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
        context: { bookId: book.node.id },
      })
    })
  } catch (e) {
    console.log(e)
  }
}
