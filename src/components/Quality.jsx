import React from 'react'
import meeting from '../assets/meeting.svg'
import wedding from '../assets/wedding.svg'
const Quality = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1>QUALITY IS JUST OUR WAY</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-5 w-100">
            <div className='p-5 rounded' style={{backgroundColor:"#EDEDED",width:"600px", height:"400px"}}>
                <img src={meeting} alt="" style={{width:"100px"}} className='mb-4'/>
                <h2>CORPORATE & CONFERENCES</h2>
                <p>Segaro focuses on brand management and brings brands to life with events. The team places a special focus on breaking boundaries for their corporate clients. Segaro’s creativity highlights the company mission while delivering a fantastic event experience.</p>
                <a href="" className="text-warning" style={{textDecoration:"none"}}>Read More</a>
            </div>
            <div className='p-5 rounded' style={{backgroundColor:"#EDEDED",width:"600px", height:"100%"}}>
                <img src={wedding} alt="" style={{width:"100px"}}className='mb-4'/>
                <h2>WEDDING AND ENGAGEMENT</h2>
                <p>For years, Segaro has been a leading event and wedding planner in Kochi & around Kerala. We facilitate the entire process by providing one-stop event design and production services that encompass everything from initial concept development and presentation to production implementation and run of show.</p>
                <a href="" className="text-warning" style={{textDecoration:"none"}}>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Quality