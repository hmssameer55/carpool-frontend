import React from 'react'
import "./Why.css"
import why from "../Images/whyImg.webp"

export default function Why() {
    return (
        <div className='container-fluid' id="why">
            <div className='row crow'>
                <div className='col-lg-6 col-md-7'>
                    <img src={why} alt="Car Image" className='img-fluid' />
                </div>
                <div className='col-lg-6 col-md-5 py-md-3 py-sm-4'>
                    <h1>
                        Why 
                        <strong className='brand-name'> Hms Car Pool?</strong>
                        </h1>
                    <p>
                        Hms Car Pool saves you money and time by providing you with a hassle free ride.
                    </p>
             
                    <div> 
                        <h4> For car owners </h4>
                        <li>  You will not only get hassle free payments for riding but also a lot of exciting coupons to save on your shopping bills and more..   </li>
                        <li>Cut down on the cost of driving.</li>
                    </div>
                    <div> 
                        <h4> For riders </h4>
                        <li>  You can save upto 40% when compared to taxi/cab services.   </li>
                        <li>    Get there faster with a more comfortable ride with 101% Genuine and verified Riders.   </li>
                    </div>
                </div>
            </div>
        </div>
    )
}
