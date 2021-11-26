import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image'
import Socials from './Socials';

const ContactUs = () => {
  const form = useRef();
  const [success, setSuccess] = useState('')
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hsgwg4e', 'template_cxiftnt', form.current, 'user_wcIyOMPYl97fuy82EF1YH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
     <div className="md:grid md:grid-cols-2 mt-14 mb-14">
       <div className="text-center flex flex-col">
         <div>
          <div>
            <Image src="/img/email.jpg" alt="Contact us image" height={400} width={400} />
          </div>
         </div>
         <div className="mt-5 w-1/4 mx-auto">
          <Socials />         
         </div>
       </div>
       <div>
        <form ref={form} onSubmit={sendEmail}>
          <label className="block">Name</label>
          <input className="border-gray border-2 rounded py-3 px-4 mb-4 outline-none w-full" type="text" name="name" />
          <label className="block">Email</label>
          <input className="border-gray border-2 rounded py-3 px-4 mb-4 outline-none w-full" type="email" name="user_email" />
          <label className="block">Message</label>
          <textarea className="h-40 border-gray border-2 rounded py-3 h- px-4 mb-4 outline-none w-full" name="message" />
          <input className="bg-primary text-secondary text-2xl font-semibold py-3 px-14 rounded cursor-pointer" type="submit" value="Send" onClick={() => setSuccess('Email sent successfully!')} />
        </form>
        <p>{success}</p>
       </div>
     </div>
  );
};

export default ContactUs