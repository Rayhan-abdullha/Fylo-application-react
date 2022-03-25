import React from 'react'
import services2 from '../../assest/images/icon-security.svg'
import services3 from '../../assest/images/icon-collaboration.svg'
import services4 from '../../assest/images/icon-any-file.svg'
import './services.css'
export default function Services() {
  return (
    <div className="container services py-50" id="services">
        <div className="row">
            <div className="col-xl-4 col-md-6">
                <div className="single-service text-center p-4">
                    <img className="mb-4" src={services2} alt="lorem" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore doloribus rerum dolore iste molestias ipsam ex facilis aut sunt deleniti?</p>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="single-service text-center p-4">
                    <img className="mb-4" src={services3} alt="lorem" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore doloribus rerum dolore iste molestias ipsam ex facilis aut sunt deleniti?</p>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="single-service text-center p-4">
                    <img className="mb-4" src={services4} alt="lorem" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore doloribus rerum dolore iste molestias ipsam ex facilis aut sunt deleniti?</p>
                </div>
            </div>
        </div>
    </div>
  )
}
