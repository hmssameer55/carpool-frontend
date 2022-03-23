import React from 'react'
import "./Login.css"
import Navbar from "./Navbar"
import { Link, Navigate } from 'react-router-dom'
import Context from "../Context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axios = require('axios')


export default function Login() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [redirect,setRedirect]= React.useState(false)
  const { state, setState } = React.useContext(Context)


  const check = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        userName: username,
        password: password
      })
      const email = response.data.email
      const name = response.data.name
     
      if (response.status === 200) { 
        toast.success("Login Successful")
        setState({...state,loggedIN:true,email:email,name:name,user_id:response.data._id})
        setRedirect(true)
      } else {
        toast.error("Login Failed")
      }
    } catch (err) {
      toast("Incorrect Username or Password")
    }
  }

  return (
    <>
    {redirect && <Navigate to="/"/>}
      <Navbar />
      <section>
      <ToastContainer />
        <div className="container py-3 mt-2">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-6 pic-girl">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="yes" />
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-5 col-sm-6 login-form">
              <div className="container login-container">
                <form onSubmit={(e) => {
                  e.preventDefault()
                  check()
                }} method="post">
                  <div className="title">Login</div>
                  <div className="input-box underline">
                    <input onChange={(e) => {
                      setUsername(e.target.value)
                    }} type="email" placeholder="Enter Your Email" name="username" required />
                    <div className="underline"></div>
                  </div>
                  <div className="input-box">
                    <input onChange={(e) => {
                      setPassword(e.target.value)
                    }} type="password" placeholder="Enter Your Password" name="password" required />
                    <div className="underline"></div>
                  </div>
                  <div className="input-box button">
                    <input className="btn btn-success" type="submit" name="" value="Login" />
                  </div>
                </form>
                <div className="option sign-up-text mt-2">Dont have an Account yet !!! Sign Up</div>
                <div className="facebook mt-3">
                  <Link to="/Register" style={{ textAlign: "center" }}>SignUp</Link>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}
