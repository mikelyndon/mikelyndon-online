import React from "react"
import { Link } from "gatsby"
// import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

// import { MDXProvider } from "@mdx-js/react"
// import Video from "../components/video"
// import Giflike from "../components/giflike"

// const shortcodes = { Video, Giflike }

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-container">
      {/* <MDXProvider components={shortcodes}> */}
      {/* <header className="global-header">{header}</header> */}
      <Navbar />
      {/* <Sidebar /> */}
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
      {/* </MDXProvider> */}
    </div>
  )
}

export default Layout
