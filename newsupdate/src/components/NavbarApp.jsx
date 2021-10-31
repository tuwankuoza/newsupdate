import React from 'react'
import { Link } from "react-router-dom";

export default function NavbarApp() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3">
        <a className="navbar-brand" href="/">News Update</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}