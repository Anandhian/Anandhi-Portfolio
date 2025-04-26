import React, { useState } from 'react';

import submit from '../assets/images/right-arrow-white.png';
import checkmark from '../assets/images/tick.png';

const Contact = ({ darkMode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "94b421f1-c247-43d6-a1bc-a711b8bc7ee2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    setIsSubmitting(false);

    if (res.success) {
      setIsSubmitted(true);
      console.log("Success", res);
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div
      id='contact'
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-[length:90%_auto] bg-center bg-no-repeat ${
        darkMode ? 'bg-[#11001f]' : ''
      }`}
    >
      <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
      <h2 className='text-5xl text-center'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            type="text"
            placeholder='Enter your name'
            name="name"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md ${
              darkMode ? 'text-white placeholder:text-white' : 'black'
            }`}
          />
          <input
            type="email"
            placeholder='Enter your email'
            name="email"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md ${
              darkMode ? 'text-white placeholder:text-white' : 'black'
            }`}
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder='Enter your message'
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 ${
            darkMode ? 'text-white placeholder:text-white' : 'black '
          }`}
        ></textarea>
        <button
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto duration-500 hover:bg-black'
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Now"}
          <img src={submit} className='w-5' alt="Submit" />
        </button>
      </form>

      {/* Success Message */}
      {isSubmitted && !isSubmitting && (
        <div className="mt-5 text-center text-green-500">
          <img src={checkmark} alt="Success" className="inline w-8 h-8" />
          <p className="mt-2">Thank you for reaching out!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;




