import React from 'react'
import "./Offers.css"
import Context from "../Context"
import { Link, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const axios = require('axios')

export default function Offers() {

    const { state, setState } = React.useContext(Context)

    const [offers, setOffers] = React.useState([])

    const [redirect, setRedirect] = React.useState(false)


    const fetchRides = async () => {
        try {
            const response = await fetch('http://localhost:3000/offers/getAll')
            if (response.status === 200) {
                const data = await response.json()
                const newData = data.filter(data => {
                    return data.email !== state.email
                })
                setOffers(newData)
                return
            }
        } catch (err) {
            console.log(err)
        }
    }

    const book = async (offer) => {
        try {
            const response = await axios.post('http://localhost:3000/offers/booking/' + offer._id, {
                user_id: state.user_id,
                user_name: state.name
            })
            if (response.status === 200) {
                fetchRides()
                setRedirect(true)
                toast.success("You have booked the ride!")
                return
            } else if (response.status === 400) {
                toast.error("no more seats available!")
                return
            }
        } catch (err) {
            toast.error("You have already booked this ride!")
            console.log(err)
        }
    }


    React.useEffect(() => {
        fetchRides()
        console.log(state.getSome)
    }, [])


    return (
        <div className="container-fluid mt-5 mb-5 offers">
            <ToastContainer />
            {redirect && <Navigate to="/myBookings" />}

            {/* refers to search */}
            {state.getSome.length > 0 ?
                <div className="row">
                    {state.getSome.map((offer, index) => {
                        return (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-2 mx-auto">
                                <div className="card">
                                    <div className="card-body offer-card">
                                        <h5 className="card-title">Posted by</h5>
                                        <p className="card-text"> {offer.name} </p>


                                        <h5 className="card-title">From</h5>
                                        <p className="card-text" style={{textTransform:"capitalize"}}> {offer.pickUP} </p>


                                        <h5 className="card-title">To</h5>
                                        <p className="card-text" style={{textTransform:"capitalize"}}> {offer.destination} </p>

                                        <h5 className="card-title">Date</h5>
                                        <p className="card-text"> {offer.date} </p>


                                        <h5 className="card-title">Seats Available</h5>
                                        <p className="card-text"> {offer.seatsLeft} </p>

                                        {state.loggedIN ?
                                            <>
                                            {offer.seatsLeft === 0 ?
                                            <button className="btn  btn-primary d-flex justify-content-center disabled" disabled>₹ {offer.price}</button> :
                                            <button onClick={(e) => {
                                                e.preventDefault()
                                                book(offer)
                                            }} className="btn  btn-primary d-flex justify-content-center">₹ {offer.price}</button>  }
                                           </> :
                                            <Link to="/Login" className="btn  btn-primary d-flex justify-content-center">₹ {offer.price}</Link>}
                                    </div>
                                </div>
                            </div>)
                    })}

                </div> :

                <div className="row">
                    {offers.length > 0 ?
                    <div> 
                    {offers.map((offer, index) => {
                        return (

                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-2 mx-auto">
                                <div className="card">
                                    <div className="card-body offer-card">
                                        <h5 className="card-title">Posted by</h5>
                                        <p className="card-text"> {offer.name} </p>


                                        <h5 className="card-title">From</h5>
                                        <p className="card-text" style={{textTransform:"capitalize"}}> {offer.pickUP} </p>


                                        <h5 className="card-title">To</h5>
                                        <p className="card-text" style={{textTransform:"capitalize"}}> {offer.destination} </p>

                                        <h5 className="card-title">Date</h5>
                                        <p className="card-text"> {offer.date} </p>


                                        <h5 className="card-title">Seats Available</h5>
                                        <p className="card-text"> {offer.seatsLeft} </p>

                                        {state.loggedIN ?
                                            <>
                                            {offer.seatsLeft === 0 ?
                                            <button className="btn  btn-primary d-flex justify-content-center disabled" disabled>₹ {offer.price}</button> :
                                            <button onClick={(e) => {
                                                e.preventDefault()
                                                book(offer)
                                            }} className="btn  btn-primary d-flex justify-content-center">₹ {offer.price}</button>  }
                                           </> :
                                            <Link to="/Login" className="btn  btn-primary d-flex justify-content-center">₹ {offer.price}</Link>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
                    </div>
                    : 
                    <div className="col-lg-3 col-md-4 col-sm-6 mx-auto" style={{marginBottom:'72px'}}>
                        <div className="card mb-5">
                            <div className="card-body offer-card">
                                <h5 className="card-title">No Offers Available</h5>
                            </div>
                        </div>
                    </div>
                    }

                </div>
            }
        </div>
    )
}

