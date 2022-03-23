import React from 'react'
import car from "../Images/car2.webp"
import "./Home.css"
import {Navigate, Link } from 'react-router-dom'
import Context from '../Context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const axios = require('axios')

export default function Home() {

  const { state, setState } = React.useContext(Context)

  
  const checkExist = async () => {
    try {
      const exist = await axios.get('http://localhost:3000/offers/' + state.email)
      if (exist.status === 200) {
        setState({ ...state, existOffer: true })
      } 
    } catch (err) {
        setState({ ...state, existOffer: false })
    }
  }

  React.useEffect(() => {
    checkExist()
  }, [])


  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <ToastContainer />
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6  pt-lg-0 order-2 order-lg-1 order-md-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to
                  <strong className="brand-name"> Hms Car Pool </strong>
                </h1>
                <h2 className="my-3">
                  connects public transit riders to drivers headed in the same direction.
                </h2>
                <div className="mt-3">
                  <Link to="/offers" onClick={()=>{
                    setState({...state, getSome:[]})
                  }} className="btn-get-started">
                    Lets Ride
                  </Link>

                  { state.loggedIN ? 
                  <Link to="/PublishScreen" className="btn-get-started publish mx-2">
                   publish
                  </Link> : 

                  <Link to="/Login" className="btn-get-started publish mx-2">
                    Publish a ride
                  </Link>
                                         } 
                </div>
              </div>
              <div className="col-lg-6 col-md-6 order-1 order-lg-2 order-md-2 header-img">
                <img
                  src={car}
                  className="img-fluid animated"
                  alt="Common img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
