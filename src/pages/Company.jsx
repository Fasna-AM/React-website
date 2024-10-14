import React from 'react'
import musicalevent from '../assets/musical-event.jpg'
import punctual from '../assets/punctual-f3.jpg'
const Company = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="d-flex justify-content-center align-items-center">
        <div className='w-50'>
          <h1 className='fw-bolder'>We are</h1>
          <p style={{ lineHeight: "2rem" }}>Yes! being the top players in the field, we have our own success formula, We are being built on three pillars of success, we are PROFESSIONAL,SINCERE and PUNCTUAL. We even call it our success mantra or our back bone. We stick to our value all the time and we love what we do We are unique because we think different, we love to be innovative and we are bold enough to bring about something new, We never work for you rather its our passion, we love it! We are not your event organizer! We are DREAM MAKERS…we add emotions to your to events and your dreams are no longer dreams…..yes DREAMS DO HAPPEN</p>
        </div>
        <img src={musicalevent} alt="" style={{ width: "500px" }} />
      </div>
      <div className="d-flex justify-content-around align-items-center mt-5 ">
        <div>
          <h1 className='fw-bolder'>Our Values</h1>
          <img src={punctual} alt="" style={{ width: "300px",marginTop:"2rem" }} />
        </div>
        <div className='w-50'>
          <p style={{ lineHeight: "2rem", marginLeft:"-10rem",marginTop:"2rem" }}>We are the best among the folks as we would say, The SEGARO group aspire to be the best player in all the different domains the company operates, we provide the best service and support to our customers along with the unmatched quality that we deliver. We believe in sincerity punctuality and professionalism. In a broad aspect we are bound to full fill our social, environment and economic commitments and will be constantly trying to create a better tomorrow for the entire mankind and all our counterparts</p>
          <h4 className='mt-5 fw-bolder' style={{float:"right"}}>Make a wish n it’s DONE! <a href="" className="btn py-3  bg-warning" style={{fontSize:"20px"}}>Plan your event Now</a></h4>
        </div>
      </div>
      <div className="bg-warning text-center d-flex justify-content-center align-items-center mt-5 text-white fw-bolder " style={{height:"150px",fontSize:"35px",marginBottom:"-50px"}}>THINK OF EVENTS THINK OF US</div>
    </div>
  )
}

export default Company