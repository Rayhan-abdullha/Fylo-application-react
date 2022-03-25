import React from 'react'
import intro from '../../assest/images/illustration-intro.png'
import './intro.css'

export default function Intro() {
  return (
    <div className="container intro py-50">
        <div className="introImg">
            <img src={intro} alt="intro" />
        </div>
        <div className="intro-text text-center">
            <h2 className="mb-4">All your files in one secure location accessible anywhere</h2>
            <p className="mb-3">Flyo stores all your most important files in one secure location.
                <br />Access them wherevere you nedd, share and collaborate with friends family, and co-worker.
            </p>
            <button type="button" class="btn btn-outline-info">Get Started</button>
        </div>
    </div>
  )
}
