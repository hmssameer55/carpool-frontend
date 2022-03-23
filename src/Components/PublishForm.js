import React from 'react'
import "./PublishForm.css"
import Context from '../Context'

import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Navigate } from 'react-router-dom'

const axios = require('axios')


export default function PublishForm() {

    const { state, setState } = React.useContext(Context)

    const [redirect, setRedirect] = React.useState(false)

    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [date, setDate] = React.useState("");
    const [seatsLeft, setSeatsLeft] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [vehicle, setVehicle] = React.useState("");
    const [vehicleNumber, setVehicleNumber] = React.useState("");
  
    React.useEffect(() => {
        if(state.existOffer===true){
            toast.error("You have already published an offer")
            setRedirect(true)
        }
    }, [])

    const check = async () => {
        try {
            const offer = await axios.post('http://localhost:3000/offers/post', {
                from: from,
                to: to,
                date: date,
                seatsLeft: seatsLeft,
                price: price,
                vehicle: vehicle,
                vehicleNumber: vehicleNumber,
                email: state.email,
                name: state.name
            })
            if (offer.status === 200) {
                toast.success("Offer Posted Successfully")
                setRedirect(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        {redirect && <Navigate to="/myRides" />}
        {/* {state.existOffer && <Navigate to="/myRides" />} */}
        <div className='container-fluid mt-1'>
            <ToastContainer />
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-8 offset-lg-1 offset-md-1 offset-sm-2'>
                    <div className="card publish-card">
                        <div className="card-body">
                            <h5 className="card-title h2 mb-4">Publish a Ride</h5>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                check()
                            }} className='panel'>
                                <div className="input-group d-flex justify-content-center">
                                    <input onChange={(e) => {
                                        setFrom(e.target.value)
                                    }} type='text' placeholder='From..' list="cities" name="from-value" required />
                                    <datalist id="cities">
                                        <option value="Adilabad" />
                                        <option value="Ahmedabad" />
                                        <option value="Aizawl" />
                                        <option value="Ajmer" />
                                    </datalist>
                                </div>
                                <div className="input-group d-flex justify-content-center">
                                    <input onChange={(e) => {
                                        setTo(e.target.value)
                                    }} type='text' placeholder='To..' list="cities" name="to-value" required />
                                    <datalist id="cities">
                                        <option value="Adilabad" />
                                        <option value="Ahmedabad" />
                                        <option value="Aizawl" />
                                        <option value="Ajmer" />
                                    </datalist>
                                </div>
                                <div className="input-group d-flex justify-content-center">
                                    <input onChange={(e) => {
                                        setDate(e.target.value)
                                    }} type='date' placeholder='Date..' name="date-value" required/>
                                </div>
                                <div className="input-group d-flex justify-content-center">
                                    <input onChange={(e) => {
                                        setSeatsLeft(e.target.value)
                                    }} type='text' placeholder="Available seats" list='seats' name="seats-value" required />
                                    <datalist id="seats">
                                        <option value="1" />
                                        <option value="2" />
                                        <option value="3" />
                                        <option value="4" />
                                    </datalist>
                                </div>
                                <div className='input-group d-flex justify-content-center'>
                                    <input onChange={(e) => {
                                        setPrice(e.target.value)
                                    }} type='text' placeholder="Cost of Ride" list='price' name="price-value" required />
                                </div>
                                <div className='input-group d-flex justify-content-center'>
                                    <input onChange={(e) => {
                                        setVehicle(e.target.value)
                                    }} type='text' placeholder="Vehicle" list='vehicle' name="vehicle-value" required />
                                    <datalist id="vehicle">
                                        <option value="Tata" />
                                        <option value="Maruti" />
                                        <option value="Hyundai" />
                                        <option value="Mahindra" />
                                        <option value="Other" />
                                    </datalist>
                                </div>
                                <div className='input-group d-flex justify-content-center'>
                                    <input onChange={(e) => {
                                        setVehicleNumber(e.target.value)
                                    }} type='text' placeholder="Vehicle Number" list='vehicle-number' name="vehicle-number-value" required />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary mt-1">Publish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 offset-md-1 publish-image-div'>
                    <img className='col-lg-8 offset-lg-2 col-md-10 publish-image' src="https://st4.depositphotos.com/16293100/28794/v/600/depositphotos_287948244-stock-illustration-car-sharing-illustration-young-people.jpg" alt="publish" />
                </div>
            </div>
        </div>
        </>

    )
}
