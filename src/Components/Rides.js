import React from 'react'
import Context from '../Context'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom'


const axios = require('axios')

export default function Rides() {

  const { state, setState } = React.useContext(Context)

  const [redirect, setRedirect] = React.useState(false)

  const [home, setHome] = React.useState(false)


  const [rides, setRides] = React.useState([])
  const [mates, setMates] = React.useState([])
 
   
   
  const cancel = async (ride) => {
    try {
      const response = await axios.get('http://localhost:3000/rides/cancel/' + ride)
      if (response.status === 200) {
        await fetchRides()
        setHome(true)
        toast.success("You have cancelled the ride!")
        return
      }
    } catch (err) {
      toast.error("You have already cancelled this ride!")
      
    }
  }

  const fetchRides = async () => {
    try {
      const response = await axios.get('http://localhost:3000/rides/getAll/' + state.email)
      if (response.data.length > 0) {
          setRides(response.data)
          setMates( response.data[0].bookedBy)
          return
      }
    } catch (err) {
      console.log(err)

    }
  }



  React.useEffect(() => {
    if(state.loggedIN===false){
       setRedirect(true)
       return 
    }
    fetchRides()
  }, [])


  return (
    <>
      <ToastContainer />
      {redirect && <Navigate to='/login' />}
      {home && <Navigate to='/' />}
      <div className="container-fluid mt-5 mb-5 offers">
        {rides.length > 0 ? 
        <div className="row">
          
          {rides.map((ride, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-2 mx-auto">
                <div className="card">
                  <div className="card-body offer-card">
                    <h5 className="card-title">Rider Name</h5>
                    <p className="card-text" >  {ride.name} </p>


                    <h5 className="card-title">From</h5>
                    <p className="card-text" style={{textTransform:"capitalize"}}> {ride.pickUP} </p>


                    <h5 className="card-title">To</h5>
                    <p className="card-text" style={{textTransform:"capitalize"}}> {ride.destination} </p>

                    <h5 className="card-title">Date</h5>
                    <p className="card-text"> {ride.date} </p>

                    <h5 className="card-title">Seats Available</h5>
                    <p className="card-text"> {ride.seatsLeft} </p>

                    {mates.length > 0 && 
                    <>
                    <h5 className="card-title">Mates</h5>
                    <p className="card-text"> {mates.map((mate, index) => {
                      return (
                        <div key={index}>
                          <ul>
                            <li>{mate.user_name}</li>
                          </ul>
                        </div>
                      )
                    })} </p>
                     </>
                     }

                    <button onClick={(e)=>{
                      e.preventDefault()
                      cancel(ride._id)
                    }} className="btn  btn-danger d-flex justify-content-center">Cancel Drive</button>
                  </div>
                </div>
              </div>)
          })}

        </div> :

          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mx-auto" style={{marginBottom:'72px'}}>

              <div className="card mb-5">
                <div className="card-body offer-card">
                  <h5 className="card-title">No Rides Available</h5>
                </div>
              </div>
            </div>
          </div>}
      </div>
      

    </>

  )

}
