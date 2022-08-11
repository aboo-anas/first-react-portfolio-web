import React from "react"
import mylogo from "../components/logo.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#"><img src= {mylogo} alt="my logo" className='logo'/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home</a>
        <a className="nav-item nav-link" href="#">Services</a>
        <a className="nav-item nav-link" href="#">About</a>
        <a className="nav-item nav-link" href="#">Portfolio</a>
        <a className="nav-item nav-link" href="#">Contacts</a>
      </div>
    </div>
  </nav>
  )
}