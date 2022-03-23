import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Navigate } from 'react-router-dom'

import Context from '../Context'

const axios = require('axios')

export default function Bookings() {

    const { state, setState } = React.useContext(Context)

    const [refresh, setRefresh] = React.useState(false)
    const [redirect, setRedirect] = React.useState(false)
    const [bookings, setBookings] = React.useState([])

    

    const cancel = async (booking) => {
        try {
            const response = await axios.post('http://localhost:3000/offers/booking/cancel/' + booking._id, {
                user_id: state.user_id,
            })
            if (response.status === 200) {
                fetchBookings()
                setRefresh(true)
                toast.success("You have cancelled the ride!")
                return
            } else {
                toast.error("You have already cancelled this ride!")
            }
        } catch (err) {
            toast.error("You have already cancelled this ride!")
            console.log(err)
        }
    }

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:3000/offers/booking/getAll/' + state.user_id)
            if(response.data.length===0){
                setBookings([])
                return
            }
            if (response.data.length > 0) {
                setBookings(response.data)
                console.log(response.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
 
        React.useEffect(() => {
            if(state.loggedIN===false){
                setTimeout(() => {
                    setRedirect(true)
                }, 1000);
                toast.error("You are not logged in!")
                return
            }
            fetchBookings()
        }, [refresh])
 

        return (
            <>
                <ToastContainer />
                {redirect && <Navigate to="/login" />}
                <div className="container-fluid mt-5 mb-5 offers">
                    {bookings.length > 0 ?
                        <div className="row">
                            {bookings.map((ride, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-2 mx-auto">
                                        <div className="card">
                                            <div className="card-body offer-card">
                                                <h5 className="card-title">Rider Name</h5>
                                                <p className="card-text" style={{textTransform:"capitalize"}}> {ride.name} </p>


                                                <h5 className="card-title">From</h5>
                                                <p className="card-text" style={{textTransform:"capitalize"}}> {ride.pickUP} </p>


                                                <h5 className="card-title">To</h5>
                                                <p className="card-text" style={{textTransform:"capitalize"}}> {ride.destination} </p>

                                                <h5 className="card-title">Date</h5>
                                                <p className="card-text"> {ride.date} </p>


                                                <h5 className="card-title">Seats Available</h5>
                                                <p className="card-text"> {ride.seatsLeft} </p>


                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    cancel(ride)
                                                }} className="btn  btn-danger d-flex justify-content-center">Cancel booking</button>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                        </div> :

                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 mx-auto" style={{marginBottom:"72px"}}>

                                <div className="card mb-5">
                                    <div className="card-body offer-card">
                                        <h5 className="card-title">No Bookings Available</h5>
                                    </div>
                                </div>
                            </div> 
                        </div>}
                </div>

            </>

        )
    }
