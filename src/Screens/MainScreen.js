import React from 'react'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Why from '../Components/Why'


export default function MainScreen() {
  return (
    <>
    <Navbar />
    <Home />
    <Form />
    <Services />
    <Why />
    <ContactForm />
    <Footer />
    </>
  )
}
