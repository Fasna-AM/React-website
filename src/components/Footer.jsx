import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black mt-5 p-5'>
      <div className='bg-black  ps-5 pe-5  d-flex  justify-content-evenly flex-wrap  ' style={{ width: "100%" }}>
        <div className="content w-25">
          <h2 className="fw-bolder text-white">We are Segaro</h2>
          <p className="text-white mt-3 fs-5">The event company</p>
          <p className="text-white mt-5 fs-5">
            We are the best among the folks as we would say, The SEGARO group aspire to be the best player in all the different domains the company operates, we provide the best service and support to our customers along with the unmatched quality that we deliver.
          </p>
          <p className="text-white"> - DirectorHead Events.</p>
        </div>
        <div className="tags w-25">
          <h4 className="text-white fw-bolder">Tags</h4>
          <a href="" className="bg-warning btn text-black p-2 m-2">Event Management</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Brand Promotion</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Wedding Planners</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Stage Shows</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Product Launches</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Corporate Celebrations</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Personal Events</a>
          <a href="" className="bg-warning btn text-black p-2 m-2">Corporate Meets</a>

        </div>
        <div className="contact">
          <h5 className="text-white fw-bolder">Thank you for visiting our page.</h5>
          <p className="text-white"> - HeadAdministration
          </p>
          <Link to={'/contact/'} className='btn bg-warning px-2 py-4 text-white fw-bolder fs-4'>
            GET IN TOUCH
          </Link>
          <h5 className="text-white mt-4">Email: info@segaro.in</h5>
          <h5 className="text-white mt-3">Phone: +91 9946982766</h5>
        </div>
      </div>
      <div className="d-flex justify-content-between w-100 p-4 ">
        <div className="icons ps-5 ms-5 mt-3">
          <button className='btn bg-black text-white'><i class="fa-brands fa-facebook  fs-3"></i></button>
          <button className='btn bg-black text-white'><i class="fa-brands fa-youtube  fs-3"></i></button>
          <button className='btn bg-black text-white'><i class="fa-brands fa-instagram  fs-3"></i></button>
        </div>
        <div className='text-white mt-3 '>
          © 2021 All Rights Reserved by Segaro
          <a href="#top" className='bg-warning text-white' style={{float:"right",marginRight:"50px",borderRadius:"50%",marginTop:"-4rem", }}><i class="fa-solid fa-angle-up p-3  "></i></a>
        </div>
      </div>
    </div>

  )
}

export default Footer