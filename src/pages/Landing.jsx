import React, { useEffect } from 'react'
import bg1 from '../assets/bgimage3.jpeg'
import bg2 from '../assets/bgimage1.jpeg'
import Agency from '../components/Agency'
import AOS from "aos"
import "aos/dist/aos.css"
import Quality from '../components/Quality'
import ImgSlider from '../components/ImgSlider'
import Offer from '../components/Offer'



const Landing = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const myStyle1 = {
    
    backgroundImage: `url(${bg1})`,

    /* Set a specific height */
    minHeight: "700px",

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    opacity: "0.8",
    
  };
  const myStyle2 = {
    backgroundImage: `url(${bg2})`,

    /* Set a specific height */
    minHeight: "700px",

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    opacity: "0.9"
  };


  return (
    <div style={{ paddingTop: "105px",width:"100%"}}>
      <div id='top' className="parallax1" style={myStyle1}>
        <div className="d-flex flex-column  align-items-center " style={{ height: "100vh",paddingTop:"11%" }}>
          <div data-aos="fade-right"><h1 className='text-white fw-bolder mb-5 text-center' style={{ fontSize: "65px" }}>YOUR PERFECT <span className='text-warning'>EVENT PARTNER</span> </h1></div>
          <div data-aos="fade-left"><p className='fw-bolder text-white fs-4 mb-5 text-center' style={{marginTop:"15%"}}>CREATIVE CONCEPTS FOR MANAGING YOUR DREAM EVENT.</p></div>
          <div data-aos="fade-up"><a href="" className="btn py-2 px-3 border fw-bolder text-white">READ MORE</a></div>
        </div>
      </div>
      <Agency />
      <a href="#top" className='bg-warning text-white' style={{float:"right",marginRight:"50px",borderRadius:"50%",marginTop:"-4rem", }}><i class="fa-solid fa-angle-up p-3  "></i></a>
      <div className="parallax2" style={myStyle2}>
        <div className="d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>
          <div data-aos="fade-right"><h1 className='text-white fw-bolder mb-5 text-center' style={{ fontSize: "65px" }}>WE THE <span className='text-warning'>EVENT PEOPLE</span> </h1></div>
          <div data-aos="fade-left"><p className='fw-bolder text-white fs-4 mb-5  '>BEST SOLUTION FOR MANAGING YOUR DREAM EVENT.</p></div>
          <div data-aos="fade-up"><a href="" className="btn py-2 px-3 border fw-bolder text-white">READ MORE</a></div>
        </div>
      </div>
      <Quality/>
      <a href="#top" className='bg-warning text-white' style={{float:"right",marginRight:"50px",borderRadius:"50%",marginTop:"-4rem", }}><i class="fa-solid fa-angle-up p-3  "></i></a>
      <ImgSlider/>
      <Offer/>
      <a href="#top" className='bg-warning text-white' style={{float:"right",marginRight:"50px",borderRadius:"50%",marginTop:"-4rem", }}><i class="fa-solid fa-angle-up p-3  "></i></a>

    </div>
  )
}

export default Landing