import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen flex justify-center items-center p-4  "
    >
      <form method='POST' action="https://getform.io/f/ca61fe33-d91d-47ab-855a-4e6aaabeca20" className="flex flex-col max-w-[1000px] w-full ">
        <div className="pb-8">
          <h2 className="text-4xl mb-4 font-bold inline border-b-4 border-pink-500 text-gray-300 sm:text-7xl">
            Contact
          </h2>
        </div>
        <input
          className="bg-[#ccd6f6] p-1"
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          className="bg-[#ccd6f6] p-2 my-4"
          name="email"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:border-pink-500 hover:text-pink-500'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
