import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"

// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  // const { nodes, totalCount } = data.allMarkdownRemark
  // const totalCount = data.allMdx.totalCount
  const nodes = data.allMdx.nodes
  // const categoryHeader = `${totalCount} post${
  // totalCount === 1 ? "" : "s"
  // } tagged with "${category}"`
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={category} title={siteTitle}>
      <h2 style={{ marginTop: `0` }}>{category}</h2>
      <ul style={{ listStyle: `none`, paddingLeft: `0` }}>
        {nodes.map(node => {
          return (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/categories">All Categories</Link>
    </Layout>
  )
}

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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
    allMdx(
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
