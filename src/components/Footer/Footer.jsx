import React from 'react'
import { FaPhone, FaVoicemail } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assest/images/logo.svg'
import location from '../../assest/images/icon-location.svg'

export default function Footer() {
  return (
    <footer className="bg-dark">
        <div className="container">
            <div className="footer-icon d-flex align-items-center mb-4">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-12 col-sm-12 mb-4">
                   <div className="single-items d-flex align-items-center">
                        <img className="locationIcon me-3" src={location} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus aut perferendis placeat praesentium? Quis distinctio repudia!</p>
                   </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-4 mb-4">
                    <div className="single-items mb-2">
                        <FaPhone className="me-2"/>
                        <span>+63555546</span>
                    </div>
                    <div>
                        <FaVoicemail className="me-2"/>
                        <span>+63555546</span>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-4 mb-4">
                    <nav className='single-items'>
                        <ul>
                            <li className="mb-2"><Link to="/about">About Us</Link></li>
                            <li className="mb-2"><Link to="/Jobs">Jobs</Link></li>
                            <li className="mb-2"><Link to="/Press">Press</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-4">
                    <nav className='single-items'>
                        <ul>
                            <li className="mb-2"><Link to="/contact">Contact Us</Link></li>
                            <li className="mb-2"><Link to="/teams">Teams</Link></li>
                            <li className="mb-2"><Link to="/privacy">Privacy</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <p className="copyright mb-0 mt-5 text-center">
                Copyright all reserved Fylo - 2022
            </p>
        </div>
    </footer>
  )
}
