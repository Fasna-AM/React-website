import React from 'react'
import corporate from '../assets/corporate-conference.jpg'
import wedding from '../assets/wedding.jpg'
import brand from '../assets/brand.jpg'
import product from '../assets/product-launch.jpg'

const Services = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <h3 className="mt-5  fw-bolder text-center">SERVICES FROM SEGARO</h3>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center mt-5 w-75">
          <div className='w-50'>
            <h5 className='fw-bolder'>Corporate & conferences</h5>
            <div className="d-flex justify-content-center align-items-center">
              <p style={{ lineHeight: "2rem" }}>Segaro focuses on brand management and brings brands to life with events. The team places a special focus on breaking boundaries for their corporate clients. Segaro’s creativity highlights the company mission while delivering a fantastic event experience</p>
              <img src={corporate} alt="" style={{ borderRadius: "50%", marginTop: "-2rem" }} />
            </div>
          </div>
          <div className='w-50 ms-5'>
            <h5 className='fw-bolder'>Destination weddings</h5>
            <div className="d-flex justify-content-center align-items-center">
              <p style={{ lineHeight: "2rem" }}>As part of our destination wedding and event services we are pleased to be able to feature a collection of remarkable resorts and venues across Kerala, including the backwaters of Kumarakom, Alappuzha and Kollam. We have had the pleasure of creating amazing events in many of these locations, including some of the best destination weddings in the industry, and we invite you to consider one of them for your next occasion. Wherever your dream event is taking place, we’ll be there to make sure that it goes exactly how you imagine it.</p>
              <img src={wedding} alt="" style={{ borderRadius: "50%", marginTop: "-8rem" }} />
            </div>
          </div>
        </div>
        
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center mt-5 w-75">
          <div className='w-50'>
            <h5 className='fw-bolder'>Brand promotions</h5>
            <div className="d-flex justify-content-center align-items-center">
              <p style={{ lineHeight: "2rem" }}>Brand promotion is one of the most significant part of our corporate venture. We help our clients to stand out in the crowd; we organize special target oriented functions so that our customers get benefited in the most special way. We deeply understand the needs of our client and work accordingly. We conduct special promotion events like, Stage shows including fashion shows, music consorts & rock shows, conferences and seminars for the purpose. We have strong team working under us for our online brand promotions using social media net works. We also have a specialized team for film promotion and marketing. Celebrity management is one of the most important aspects of brand promotion events and we have our special team that can handle your needs in VIP and celebrity management.</p>
              <img src={brand} alt="" style={{ borderRadius: "50%", marginTop: "-2rem" }} />
            </div>
          </div>
          <div className='w-50 ms-5'>
            <h5 className='fw-bolder'>Product launches</h5>
            <div className="d-flex justify-content-center align-items-center">
              <p style={{ lineHeight: "2rem" }}>Product launch events are the most important market tool our clients' have when it comes to introducing their products into the market. We in Segaro understand the very importance of an outstanding introduction that our clients products needs in the extensively competitive market, so we work deeply in planning the most unique way so that the products get the much needed attention. Planning the venue, the timing and the marketing strategies all plays its vital role in product launches. We have our special, young and most vibrant team all set to give your valuable products the best start in the race to success.</p>
              <img src={product} alt="" style={{ borderRadius: "50%", marginTop: "-8rem" }} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services