import React from 'react'

const Contact = () => {
  return (
    <div id='contact'  style={{paddingTop:"150px"}} className="d-flex flex-column justify-content-center align-items-center ">
      <h1 className="text-center fw-bolder mt-5 ">Contact Us</h1>
      <div className="row w-75">
        <div className='mt-5 col-lg'>
          <h4>Head Office:</h4>
          <h4 className='mt-4'><i class="fa-solid fa-location-dot"></i> A-13,Ground floor, Eden’s Square, 14th Parambithara cross, Panampally Nagar, Cochin</h4>
          <h4 className='mt-4'><i class="fa-solid fa-mobile-screen"></i> +91 9946982766, 8138036469, 9744741010</h4>
          <h4 className='mt-4'><i class="fa-regular fa-envelope"></i> info@segaro.in</h4>
        </div>
        <div className="mt-5 col-lg ">
          <input  type="text" placeholder='Name' style={{width:"100%",height:"50px"}} />
          <br />
          <input className='mt-3' type="email" placeholder='Email' style={{width:"100%",height:"50px"}} />
          <br />
          <input className='mt-3' type="text" placeholder='Message' style={{width:"100%",height:"150px"}} />
          <br /><br />
          <a href="" className="btn bg-warning px-5">SEND</a>

        </div>
      </div>
    </div>
  )
}

export default Contact