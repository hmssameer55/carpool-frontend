import React from 'react'

export default function Footer() {
  return (

    <footer className="text-center text-white" style={{ backgroundColor: "#3f51b5" }}>
      <div className="container">
        <section className="">
          <div className="row text-center d-flex justify-content-center pt-4">

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#why" className="text-white">Why us</a>
              </h6>
            </div> 
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#service-container" className="text-white">Famous Rides</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#" className="text-white">Home</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#search-form" className="text-white">Search</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#contact-container" className="text-white">Contact</a>
              </h6>
            </div>

          </div>
        </section>

        <hr className="my-3" />

        <section className="mb-3">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
              Hms Carpool is an Indian multinational ride sharing company headquartered in Bangalore, find the perfect ride from our wide range of destinations and routes at low prices.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-3">
          <a href="/" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2022 Copyright: Hms Sameer
      </div>

    </footer >
  )
}
