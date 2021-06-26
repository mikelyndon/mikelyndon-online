import React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="category" to="/category/vfx">
            VFX
          </Link>
        </li>
        <li>
          <Link className="category" to="/category/education">
            Education
          </Link>
        </li>
        <li>
          <Link className="category" to="/category/leadership">
            Leadership
          </Link>
        </li>
        <li>
          <Link className="category" to="/category/play-empathy-gift-giving">
            Play, Empathy, Gift-giving
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
