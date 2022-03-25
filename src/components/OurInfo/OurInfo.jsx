import React from 'react'
import infoBg from '../../assest/images/illustration-stay-productive.png'
import './ourinfo.css'

export default function OurInfo() {
  return (
    <div className="container ourInfo py-50">
        <div className="row align-items-center">
            <div className="col-xl-6 col-md-6">
                <img src={infoBg} alt="" />
            </div>
            <div className="col-xl-6 col-md-6 info-text">
                <h2 className="mb-3">Sty productive</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file stroage needs.</p>
                <p>Securely share files and folders with friends. fanily and colleagues for live collaboration. No email attachments required.</p>
            </div>
        </div>
    </div>
  )
}
