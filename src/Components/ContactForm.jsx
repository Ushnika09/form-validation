import React, { useState } from 'react'

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    
    const [errors, setErrors] = useState({name: '', email: '', message: '',});

    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({ name: '', email: '', message: '' });
        setSuccessMsg('');

        let valid = true;
        const newErrors = {};

        if (!name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if (!email.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!emailPattern.test(email)) {
          newErrors.email = 'Enter a valid email';
          valid = false;
        }

        if (!message.trim()) {
          newErrors.message = 'Message is required';
          valid = false;
        }

        setErrors(newErrors);


        if (valid) {
          setSuccessMsg('Form submitted successfully!');
          setName('');
          setEmail('');
          setMessage('');
        }
    };


  return (
    <form onSubmit={handleSubmit}  className='flex justify-center items-center flex-col  bg-[rgba(255,255,255,0.70)] shadow-2xl px-[2.5rem] py-[1rem] rounded-lg'>

        <div className='my-[0.7rem]  flex flex-col'>
            <label htmlFor="name" className='ml-5 font-bold '>Name</label>

            <input type="text"  id='name' placeholder='Enter Your name' className='h-[2rem] border-[#4D91C8] border-2  w-[20rem] p-[1.5rem] bg-[#E2E8F0] mt-1 rounded-4xl shadow focus:outline-none focus:ring-2 focus:ring-[#4D91C8]/80 ' value={name} onChange={(e)=>setName(e.target.value)}/>

            {errors.name && <p className="text-red-600 text-sm ml-[2rem]">{errors.name}</p>}
        </div>

        <div className='my-[0.7rem] flex flex-col'>
            <label htmlFor="email" className='ml-5 font-bold '>Email</label>
            <input type="email"  id='email' placeholder='Enter Your email' className='h-[2rem] border-[#4D91C8] border-2 w-[20rem] p-[1.5rem] bg-[#E2E8F0] mt-1 rounded-4xl shadow focus:outline-none focus:ring-2 focus:ring-[#4D91C8]/80 ' value={email} onChange={(e)=>setEmail(e.target.value)}/>

            {errors.email && <p className="text-red-600 text-sm ml-[2rem]">{errors.email}</p>}
        </div>

        <div className='my-[0.7rem] flex flex-col'>
            <label htmlFor="msg" className='ml-5 font-bold '>Message</label>
            <textarea type="text" id='msg' placeholder='Enter Your Message' rows={3} className=' border-[#4D91C8] border-2 w-[20rem] p-[1.5rem] bg-[#E2E8F0] mt-1 rounded-4xl shadow focus:outline-none focus:ring-2 focus:ring-[#4D91C8]/80' value={message} onChange={(e)=>setMessage(e.target.value)}/>

            {errors.message && <p className="text-red-600 text-sm ml-[2rem]">{errors.message}</p>}
        </div>
        <button type='submit' className='bg-[#4D91C8] rounded-2xl px-[1.5rem] py-2 font-bold text-white hover:bg-[#2F6AA5] shadow'>Send</button>

        {successMsg && <p className="text-black font-bold mt-2">{successMsg}</p>}
    </form>
  )
}

export default ContactForm