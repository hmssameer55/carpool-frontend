import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Context from '../Context'

export default function Navbar() {

  const { state, setState } = React.useContext(Context)

  return (
    <>
      <div className="container-fluid  nav_bg">
        <div className="row">
          <div className="col-10 mx-5">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand mx-5 hms-brand" href="/">
                  Hms CarPool
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">

                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        className="nav-link"
                        to="/myBookings"
                      >
                        My Bookings
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/myRides"
                      >
                        My Rides
                      </NavLink>
                    </li>
                    {state.loggedIN ?
                      <li className="nav-item">
                        <NavLink
                          activeclassname="menu_active"
                          className="nav-link"
                          to="/"
                          onClick={() => {
                            setState({ ...state, loggedIN: false, email:"", name:"", getSome:[], existOffer:false, user_id:"" })
                          }}>Logout </NavLink>
                      </li>
                      : 
                      <li className="nav-item">
                        <NavLink
                          activeclassname="menu_active"
                          className="nav-link"
                          to="/Login"
                        >
                          Login
                        </NavLink>
                      </li>
                    }

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
