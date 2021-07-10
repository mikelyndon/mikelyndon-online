import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const CategoriesPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  return (
    <Layout location={location} title={title}>
      <div>
        <h2 style={{ marginTop: `0` }}>Categories</h2>
        <ul style={{ listStyle: `none`, paddingLeft: `0` }}>
          {group
            .sort((a, b) => (a.totalCount < b.totalCount ? 1 : -1))
            .map(category => (
              <li key={category.fieldValue}>
                <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  )
}

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
