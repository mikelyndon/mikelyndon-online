import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <h1 className="logo">
          <Link to="/">Mike Lyndon</Link>
        </h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/vfx">VFX</Link>
            </li>
            <li>
              <Link to="/category/education">Education</Link>
            </li>
            <li>
              <Link to="/category/leadership">Leadership</Link>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </div>
  )
}

export default Navbar
