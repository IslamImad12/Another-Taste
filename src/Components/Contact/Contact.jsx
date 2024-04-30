import React from 'react'

export default function Contact() {
    function message() {
        alert('The message was sent successfully')
    }
  return <>
    <div className="container">
        <div className="row py-3 m-3">
            <h2>Send Message Us</h2>
            <div className="col-md-12 my-2"><input type="text" placeholder='Your Name' className='form-control' /></div> <br />
            <div className="col-md-12 my-2"><input type="text" placeholder='Your Email' className='form-control' /></div> <br />
            <div className="col-md-12 my-2"><input type="text" placeholder='Subject' className='form-control' /></div> <br />
            <div className="col-md-12 my-2"><textarea type="text" placeholder='Message' className='form-control' ></textarea></div> <br />
            <div className="col-md-12 my-2" onClick={message}><button className='btn btn-success'>Send message</button></div>
        </div>
    </div>
  </>
}
