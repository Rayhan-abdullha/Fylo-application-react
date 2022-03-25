import React from 'react'
import porfile1 from '../../assest/images/profile-1.jpg'
import porfile2 from '../../assest/images/profile-2.jpg'
import porfile3 from '../../assest/images/profile-3.jpg'
import './reviews.css'

export default function Reviews() {
  return (
    <div className="container reviews py-50" id="reviews">
        <div className="row">
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="single-review p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem exercitationem corporis ipsa obcaecati. Vero, vel. Vitae impedit fugit nemo?</p>
                    <div className="user d-flex align-items-center mt-4">
                        <img src={porfile1} alt="profile" />
                        <article className="userInfo">
                            <h6>Sumit Saha</h6>
                            <p className="mb-0"><small>Co-founder analyging</small></p>
                        </article>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="single-review p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem exercitationem corporis ipsa obcaecati. Vero, vel. Vitae impedit fugit nemo?</p>
                    <div className="user d-flex align-items-center mt-4">
                        <img src={porfile2} alt="profile" />
                        <article className="userInfo">
                            <h6>Jhankar Mahabub</h6>
                            <p className="mb-0"><small>CEO at Programming Hero</small></p>
                        </article>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="single-review p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem exercitationem corporis ipsa obcaecati. Vero, vel. Vitae impedit fugit nemo?</p>
                    <div className="user d-flex align-items-center mt-4">
                        <img src={porfile3} alt="profile" />
                        <article className="userInfo">
                            <h6>HM Nayem</h6>
                            <p className="mb-0"><small>CEO at Stack Learn</small></p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
