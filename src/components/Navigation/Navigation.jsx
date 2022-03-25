import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import logo from '../../assest/images/logo.svg'

export default function Navigation() {
  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light py-2">
        <div className="container">
            <Link className="text-white" to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    <a className="nav-link" href="#services">Services</a>
                    <a className="nav-link" href="#reviews">Reviews</a>
                    <a className="nav-link" href="#subscribe">Subscribe</a>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
