import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <footer>
        <div style={{ fontSize: 18 }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/admin_login">Admin</Link>
        </div>
        <div style={{ fontSize: 12 }}>
          Images via <a href="https://www.freepik.com/">Freepik</a> & <a href="https://www.unsplash.com">Unsplash</a>
        </div>
        <p className="m-0" style={{ fontSize: 12 }}>
          Copyright &copy; {new Date().getFullYear()} <Link to="https://radcliffe-portfolio.onrender.com">Redcliffe Design</Link>. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
