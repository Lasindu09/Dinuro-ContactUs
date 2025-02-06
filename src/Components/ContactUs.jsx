import React from 'react'

const ContactUs = () => {
  return (
    
    <>
    <header className="bg-gradient-to-tr from-indigo-700 to-gray-300 via-black text-white h-[72px]">
      <div className="inline-block py-4 ml-2 text-xl font-semibold lg:text-2xl lg:ml-4 lg:mt-2 ">Iris & Dinuro Private Limited</div>
      <nav class="flex inline-block gap-2 justify-self-end mr-2 text-[10px] font-medium float-right list-none py-6 lg:mr-4 lg:gap-5 lg:text-[20px]">
      <ul class="flex justify-center space-x-4">
        <li><a href="https://www.dinuro.com/irisweb/index.aspx" className="hover:text-purple-400">Home</a></li>
        <li><a href="https://www.dinuro.com/irisweb/projects.html" className="hover:text-purple-400">About Us</a></li>
        <li><a href="https://www.dinuro.com/irisweb/Servicesnew.html" className="hover:text-purple-400">Services</a></li>
        <li><a href="https://www.dinuro.com/irisweb/ContactUs.aspx" className="hover:text-purple-400">Contact Us</a></li>
      </ul>
      </nav>
    </header>

    <section className="container px-4 py-8 mx-auto mt-4 bg-gradient-to-br from-indigo-200 to-gray-400 rounded-3xl">

    <h2 className="mb-4 text-2xl font-bold text-center uppercase">Contact Us Form</h2>

    <form id="contactForm" className="p-6 bg-gray-200 rounded-lg shadow-md">

      <div className="mb-4">
        <label for="fullName" className="block pb-1 text-gray-900">Full Name</label>
        <input type="text" id="fullName" name="fullName" required
               className="w-full px-4 py-2 border rounded-lg">
      </input></div>

      <div className="mb-4">
        <label for="email" className="block pb-1 text-gray-900">E-mail Address</label>
        <input type="email" id="email" name="email" required
               className="w-full px-4 py-2 border rounded-lg">
      </input></div>

      <div className="mb-4">
        <label for="phoneNumber" className="block pb-1 text-gray-900">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" required
               className="w-full px-4 py-2 border rounded-lg">
      </input></div>

      <div className="mb-4">
        <label for="subject" className="block pb-1 text-gray-900">Subject</label>
        <input type="text" id="subject" name="subject" required
               className="w-full px-4 py-2 border rounded-lg">
      </input></div>

      <div className="mb-4">
        <label for="message" className="block pb-1 text-gray-900">Message</label>
        <textarea id="message" name="messsage" required
               className="w-full px-4 py-2 border rounded-lg">
      </textarea></div>
           
      <button type="submit" className="w-full h-10 text-xl text-center text-white bg-blue-500 rounded-lg shadow-lg shadow-indigo-400 hover:shadow-indigo-700 hover:bg-blue-700">
        Submit</button>
      </form></section>
    </>
    
  )
}

export default ContactUs