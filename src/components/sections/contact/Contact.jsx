import React from 'react'
import { GoDeviceMobile } from 'react-icons/go'
import { ImWhatsapp } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import './contact.css'

const Contact = () => {
  return (
    <>
      <section id='contact' className='contact_section'>
            <div className="contact__title text-center">
                    <h2>Contact</h2>
                    <p>Get in Touch</p>
                </div>
                <div className="contact__details d-flex align-items-center justify-content-between">
                    <div className="mobile__gmail__whatsapp d-flex align-items-center flex-column gap-4">
                        <h6>Talk To me</h6>
                        <div className="contact">
                            <SiGmail />
                            <h4>Email</h4>
                            <p>mahmudtalal2@gmail.com</p>
                        </div>
                        <div className="contact">
                            <GoDeviceMobile />
                            <h4>Mobile</h4>
                            <p>+880163-5894153</p>
                        </div>
                        <div className="contact">
                            <ImWhatsapp />
                            <h4>WhatsApp</h4>
                            <p>+880163-5894153</p>
                        </div>
                    </div>
                    <div className="contact__form">
                        <h2>Comment Me</h2>
                        <form action="">
                            <div className="contact__input">
                                <label>Name:</label>
                                <input type="text" />
                            </div>
                            <div className="contact__input">
                                <label>Email:</label>
                                <input type="text" />
                            </div>
                            <div className="contact__input">
                                <label>Message:</label>
                                <textarea type="text" />
                            </div>
                            <button type='submit' className='send__btn' onChange={(e)=> alert("Send email")}>Send Me</button>
                        </form>

                        
                    </div>
                </div>
            </section>

    </>
  )
}

export default Contact
