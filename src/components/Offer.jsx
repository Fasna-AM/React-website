import React from 'react'

const Offer = () => {
  return (
    <div className='d-flex justify-content-evenly flex-wrap align-items-center mt-5 pt-5 pb-5 'style={{backgroundColor:"#EDEDED"}}>
        <div className="head">
            <h1 className=" fw-bolder text-center mb-4" style={{fontSize:"50px"}}>WHAT WE OFFER</h1>
            <p className="text-center"style={{fontSize:"20px"}}>The best event and wedding planner in Kerala</p>
        </div>
        <div className="content">
            <h5 className="fw-bolder mb-4">Services Provided by Segaro</h5>
            <ul style={{fontSize:"20px"}}>
                <li className='mb-3'>Wedding and Engagement</li>
                <li className='mb-3'>Corporate Events and Conferences</li>
                <li className='mb-3'>Destination Weddings</li>
                <li className='mb-3'>Fashion Shows</li>
                <li className='mb-3'>Product Launch</li>
                <li className='mb-3'>Consulting and Branding</li>
            </ul>
        </div>
    </div>
  )
}

export default Offer