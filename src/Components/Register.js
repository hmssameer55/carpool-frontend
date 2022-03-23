import React from 'react'
import "./Register.css"
import Navbar from "./Navbar"
import { Navigate,Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const axios = require('axios')

export default function Register() {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [redirect, setRedirect] = React.useState(false)

    const check = async () => {

        let namePattern = /^[a-zA-Z]{3,}$/
        const matchName = name.match(namePattern)

        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const matchEmail = email.match(emailPattern)

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        const matchPassword = password.match(passwordPattern)

       if(matchName){
           if(matchEmail){
               if(matchPassword){
                const response= await axios.post('http://localhost:3000/users/signup', {
                       name,
                       email,
                       password
                   })
                   if(response.status === 200){
                       toast.success("Register Success")
                        setRedirect(true)
                   }else{
                       toast.error("Register Failed")
                   }
               }else{
                   toast.error("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character")
               }
           }else{
               toast.error("Email is not valid")
           }
       }

    }

    return (
        <>
            {redirect ? <Navigate to="/login" /> : null}
            <Navbar />
            <ToastContainer />
            <section>
                <div className="container py-3 h-90">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 ">
                            <div className="container register-container reg">
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    check()
                                }} method="post">
                                    <div className="title">Register</div>
                                    <div className="input-box underline">
                                        <input onChange={(e) => {
                                            setName(e.target.value)
                                        }} type="text" placeholder="Enter Your Name" name="name" required />
                                        <div className="underline"></div>
                                    </div>
                                    <div className="input-box underline">
                                        <input onChange={(e) => {
                                            setEmail(e.target.value)
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
                                        <input className="btn btn-success" type="submit" name="" value="Register" />
                                    </div>
                                </form>
                                <div className="option">Already have an Account !!!</div>
                                <div className="facebook">
                                    <Link to="/login" style={{ textAlign: "center" }}>Login</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7 col-md-7 col-sm-6 pic-girl ">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="yes" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
