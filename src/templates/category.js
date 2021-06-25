import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  // const { nodes, totalCount } = data.allMarkdownRemark
  const totalCount = data.allMarkdownRemark.totalCount
  const nodes = data.allMarkdownRemark.nodes
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  return (
    <div>
      <h1>{categoryHeader}</h1>
      {/* <div>{nodes}</div> */}
      <ul>
        {nodes.map(node => {
          // const { slug } = node.fields
          // const { title } = node.frontmatter
          return (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/categories">All Categories</Link>
    </div>
  )
}

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
