import React from 'react'
import "./Services.css"
import delhi from "../Images/delhi.jpg"
import kerala from "../Images/kerala.jpg"
import tamil from "../Images/tamil.jpg"
import mumbai from "../Images/mumbai.jpg"

export default function Services() {
    return (
        <section id="service-container">
            <h2 className="h2 center title"> Our Popular Rides </h2>
            <div className="mt-5" id="services">
                <div className="box">
                    <img src={delhi} alt="" className='place-img' />
                    <h2 className="center mt-3"> New Delhi</h2>
                    <h5>At just ₹ 799</h5>
                </div>
                <div className="box">
                    <img src={kerala} alt="" className='place-img' />
                    <h2 className=" center mt-3"> Kerala </h2>
                    <h5>At just ₹ 899</h5>
                </div>
                <div className="box">
                    <img src={tamil} alt="" className='place-img' />
                    <h2 className="center mt-3">  Tamil-Nadu  </h2>
                    <h5>At just ₹ 699</h5>
                </div>
                <div className="box">
                    <img src={mumbai} alt="" className='place-img' />
                    <h2 className="center">  Mumbai </h2>
                    <h5>At just ₹ 999</h5>
                </div>
            </div>
            <br />
        </section>

    )
}


