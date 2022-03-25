import React from 'react'
import notfound from '../../assest/images/404.svg'

export default function Notfound() {
  return (
    <div className="notfound">
      <img src={notfound} alt="404 Ops" />
    </div>
  )
}
