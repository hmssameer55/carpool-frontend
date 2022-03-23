import React from 'react'
import "./ContactForm.css"

export default function ContactForm() {
    return (
        <section id="contact-container">
        <div className='fluid-container form-bg'>
        <form action='mailto:hmssameer55@gmail.com' className="contact-form">
            <h2 className='h2'>Get in touch with us</h2>

            <div className="input d-flex justify-content-center" data-validate="Name is required">
                <input className="input1 form-control" type="text" required="true"  name="name" placeholder="Name" />
            </div>

            <div className="input d-flex justify-content-center" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input1  form-control" type="email" required="true"  name="email" placeholder="Email" />
            </div>

            <div className="input d-flex justify-content-center" data-validate="Subject is required">
                <input className="input1  form-control" type="text" required="true"  name="subject" placeholder="Subject" />
            </div>

            <div className="input d-flex justify-content-center" data-validate="Message is required">
                <textarea className="input1  form-control" required="true"  name="message" placeholder="Message"></textarea>
            </div>

            <div className='d-flex justify-content-center'>
                <button type='submit' className="btn btn-primary btn-block mt-3 send-us-btn">Send Message</button>
            </div>
        </form>
        </div>
        </section>
    )
}
