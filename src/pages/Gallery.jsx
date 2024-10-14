import React from 'react'
import wedding1 from '../assets/wedding1.png'
import wedding2 from '../assets/wedding2.png'
import wedding3 from '../assets/wedding3.png'
import wedding4 from '../assets/wedding4.png'
import wedding5 from '../assets/wedding5.jpg'

import show1 from '../assets/show1.png'
import show2 from '../assets/show2.png'
import show3 from '../assets/show3.png'
import seminar1 from '../assets/seminar1.png'
import seminar2 from '../assets/seminar2.png'
import seminar3 from '../assets/seminar3.png'
import seminar4 from '../assets/seminar4.png'
import seminar5 from '../assets/seminar5.png'
import seminar6 from '../assets/seminar6.png'


const Gallery = () => {


  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="mt-5 py-5 d-flex">
        <button className="btn bg-warning ms-5 text-white fw-bolder">All</button>
        <button className="btn bg-warning ms-5  text-white fw-bolder">Wedding</button>
        <button className="btn bg-warning ms-5 text-white fw-bolder">Fashion Show</button>
        <button className="btn bg-warning ms-5 text-white fw-bolder">Seminar</button>

      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">

        <div className="row">
          <img className='ms-3 col-lg-4' src={wedding1} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={wedding2} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={show1} alt="" style={{ width: "400px" }} />
        </div>

        <div className="row mt-5">

          <img className='ms-3 col-lg-4' src={show2} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={seminar1} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={seminar2} alt="" style={{ width: "400px" }} />
        </div>

        <div className="row mt-5">

          <img className='ms-3 col-lg-4' src={wedding3} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={show3} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={seminar3} alt="" style={{ width: "400px" }} />
        </div>

        <div className="row mt-5">

          <img className='ms-3 col-lg-4' src={wedding4} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={seminar4} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={seminar5} alt="" style={{ width: "400px" }} />
        </div>

        <div className="row mt-5">

          <img className='ms-3 col-lg-4' src={seminar6} alt="" style={{ width: "400px" }} />
          <img className='ms-3 col-lg-4' src={wedding5} alt="" style={{ width: "400px" }} />


        </div>
      </div>

    </div>
  )
}

export default Gallery