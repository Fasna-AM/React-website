import React from 'react'
import agency from '../assets/agency.png'

const Agency = () => {
    return (
        <>
            <div className='p-5 m-5' style={{ height: "100%" }}>
                <div className='row alihn-items-center'>
                    <div className="col-lg">
                    <img className='img-fluid' src={agency} alt="" />

                    </div>
                    <div className='col-lg ms-5 mt-5'>
                        <h2>We are the top players in the field</h2>
                        <p className="fw-bolder fs-5 mt-4">Specializing in the creation of exceptional events for private and corporate clients, we design, plan and manage every project from conception to execution.</p>
                        <p className='fs-5 text-justify'>We are completely customized, reflecting the brand personality of each client. If you’re planning high-profile private parties, charitable events, or an off-the-charts wedding, look no further than Segaro Events. The team aims to deliver experiences that draw on your wildest imagination and make your big dreams come to life.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Agency