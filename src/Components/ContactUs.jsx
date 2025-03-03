import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Your Information Recorded Successfully !");
    setShowPopup(true);

    e.target.reset();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    /* background colour */
    <div className="bg-gradient-to-br from-[#606ada] to-[#1BCEDF] via-black">

      {/* popup message after form submission */}
      {showPopup && (
        <div className="fixed z-50 px-6 py-4 -mt-1 text-lg font-normal text-white duration-500 -translate-x-1/2 bg-gray-800 shadow-lg rounded-xl top-4 left-1/2">
          {message}
          <br />
          <button onClick={handleClosePopup} className="w-10 h-7 text-[16px] mt-4 ml-72 font-light text-center bg-blue-800">OK</button>
        </div>
      )}

      {/* header section with the navigation bar */}
      <header className="fixed top-0 left-0 w-full z-20 bg-gradient-to-tr from-indigo-700 to-gray-300 via-black text-white h-[72px] border-b-2 flex justify-between items-center px-4">
        <div className="ml-2 text-xs font-semibold sm:text-xl md:text-2xl md:ml-3 md:mt-2 lg:text-2xl lg:ml-4 lg:mt-2">Iris & Dinuro Private Limited</div>
        <nav className="text-[10px] font-medium sm:text-[12px] md:text-[15px] lg:text-[20px]">
          <ul className="flex space-x-2 lg:space-x-8">
            <li><a href="https://www.dinuro.com/irisweb/index.aspx" className="hover:text-purple-400">Home</a></li>
            <li><a href="https://www.dinuro.com/irisweb/projects.html" className="hover:text-purple-400">About Us</a></li>
            <li><a href="https://www.dinuro.com/irisweb/Servicesnew.html" className="hover:text-purple-400">Services</a></li>
            <li><a href="https://www.dinuro.com/irisweb/ContactUs.aspx" className="hover:text-purple-400">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      {/*contact us form*/}  
      <section className="container w-[90%] max-w-[450px] px-6 py-8 mx-auto my-1 bg-gradient-to-br from-slate-50 to-indigo-200 rounded-3xl mt-[72px] md:max-w-[600px] lg:max-w-[840px]">
        <h2 className="mb-4 text-2xl font-bold text-center uppercase">Contact Us Form</h2>
        <form id="contactForm" className="p-6 bg-gray-200 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block pb-1 text-gray-900">Full Name: <span className="text-xl font-semibold text-red-600">*</span></label>
            <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block pb-1 text-gray-900">E-mail Address: <span className="text-xl font-semibold text-red-600">*</span></label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block pb-1 text-gray-900">Phone Number: <span className="font-normal text-gray-500">(Optional)</span></label>
            <input type="text" id="phoneNumber" name="phoneNumber" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block pb-1 text-gray-900">Subject: <span className="text-xl font-semibold text-red-600">*</span></label>
            <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block pb-1 text-gray-900">Message: <span className="text-xl font-semibold text-red-600">*</span></label>
            <textarea id="message" name="message" required className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <button type="submit" className="w-full h-10 text-xl text-center text-white bg-blue-500 rounded-lg shadow-lg shadow-indigo-400 hover:shadow-indigo-700 hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

      {/* company information section */}
      <section className="container w-[90%] max-w-[450px] px-6 py-8 mx-auto mt-6 bg-gradient-to-br from-slate-50 to-indigo-200 rounded-2xl md:max-w-[600px] lg:max-w-[840px]">
        <div className="mb-4 text-2xl font-bold text-center uppercase">Company Information</div>
        <ul className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-8">
          <li>
            {/*location tag icon*/ }
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="inline-block w-5 h-5 mr-4 -mt-2">
              <path 
              fillRule="evenodd" 
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" 
              clipRule="evenodd" />
            </svg>
            <p className="inline-block font-mono text-[14px] lg:text-2xl">Paris, France</p>
          </li>

          <li>
            {/*telephone icon*/}
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="inline-block w-5 h-5 mr-4 -mt-2">
              <path 
              fillRule="evenodd" 
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" 
              clipRule="evenodd" />
            </svg>
            <p className="inline-block font-mono text-[14px] lg:text-2xl">+33621948299</p>
          </li>

          <li>
            {/*mail icon*/}
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="inline-block w-5 h-5 mr-4 -mt-2">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p className="inline-block font-mono text-[14px] lg:text-2xl">cdmdinosha@gmail.com</p>
          </li>
        </ul>
      </section>

      {/*integration of the map*/}
      <section className="container w-[90%] max-w-[450px] px-6 py-8 mx-auto mt-6 bg-gradient-to-br from-slate-50 to-indigo-200 rounded-2xl md:max-w-[600px] lg:max-w-[840px]">
        <div className="p-6 bg-gray-300 shadow-md shadow-gray-600 rounded-2xl">
          <h2 className="mb-4 text-2xl font-bold text-center uppercase">Our Location</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.0981907588853!2d2.185449076186508!3d48.856337971331826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b5599411cd7%3A0x40d406e9c78e98b6!2s13%20Rue%20de%20la%20Melonni%C3%A8re%2C%2092500%20Rueil-Malmaison%2C%20France!5e0!3m2!1sen!2slk!4v1739198452028!5m2!1sen!2slk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </section>
      
      {/*footer section*/}
      <footer className="w-full bg-gradient-to-tr from-indigo-700 to-gray-300 via-black text-white h-[84px]">
        <div className="container px-4 mx-auto text-center">
          <div className="pt-[10px] space-x-8">
            <a href="#" className="hover:text-[#4267B2]">
             <FontAwesomeIcon icon={faFacebook} size="2x" />    {/*facebook logo*/}
            </a>
            <a href="#" className="hover:text-[#55ACEE]">
              <FontAwesomeIcon icon={faTwitter} size="2x" />    {/*twitter logo*/}
            </a>
            <a href="https://www.linkedin.com/company/iris-paris/" className="hover:text-[#0A66C2]">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />     {/*linkedin logo*/}
            </a>
          </div>
          <p className="pt-[10px]">Iris & Dinuro Private Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;