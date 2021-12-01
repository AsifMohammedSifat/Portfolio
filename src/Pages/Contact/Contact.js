import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Result=()=>{
  return (<p className="text-info">Successfully Sent!!</p>  );
}

 const Contact = () => {
   const [result,setResult]=useState(false);
  const form = useRef();
  const hanldeReset=()=>{
    setResult(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)
  

    emailjs.sendForm('service_hnf8q5p', 'template_pf3t64j', form.current,'user_lk4qgCt3H4mNVoBBqMfYh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(true);
   
  };
  
  return (
   <div className="particles-js" onMouseMove={hanldeReset}>
     <h3 className="text-info text-dark w-75  mx-auto mt-5 rounded-3 bg-info">Let's Contact With Me...</h3>
      <form action="" className="mt-5  d-flex align-items-center justify-content-center flex-column" ref={form} onSubmit={sendEmail}>
      <label className="fw-bold text-info fs-5">Name</label>
      <input  type="text" name="name" placeholder="Enter Your Name..." required/>
      <label className="fw-bold text-info fs-5">Email</label>
      <input type="email" name="email" placeholder="Enter Your Email" required/>
      <label className="fw-bold text-info fs-5">Message</label>
      <textarea className="message" placeholder="Enter Your Message" required/>
      <input className="w-25 bg-info" type="submit" value="Send" />
      <div className="row" >
        {result?<Result/>:null}
      </div>
    </form>
   </div>
  );
};

export default Contact;