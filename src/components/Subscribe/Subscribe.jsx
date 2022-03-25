import React from 'react'
import './subscribe.css'

export default function Subscribe() {
  return (
    <div className="subscribe-area" id="subscribe">
        <div className="subscribe p-4">
            <h2 className="mb-3">Get early access today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio repellat dignissimos iure nisi facere consequatur velit eos voluptatum exercitationem.</p>
            <form action="" className="d-flex">
                <input className="form-control me-2" type="text" />
                <input className="btn btn-outline-info" type="submit" value="Subscribe"/>
            </form>
        </div>
    </div>
  )
}
