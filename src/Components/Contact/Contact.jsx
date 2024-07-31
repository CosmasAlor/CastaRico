// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

export default function Contact() {
  return <>
  <div className=' '>
    <div className="container text-center p-10">
        <div className="content">

        <h1 className='font-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-4'>CONTACT SECTION</h1>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-black h-1 flex-1 max-w-24"></div>
            <div className="px-2">
              <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
            </div>
            <div className="bg-black h-1 flex-1 max-w-24"></div>
          </div>


        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
           
                <div>
                    <input type="text" id="subject" className="block p-3 w-full border-t-0 border-r-0 border-l-0 text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light m-4" placeholder="User Name" required/>
                    <input type="number" id="number" className="block p-3 w-full border border-t-0 border-r-0 border-l-0 text-sm text-gray-900  rounded-lg  border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light m-4" placeholder="Phone Number" required/>
                    <input type="email" id="email" className="shadow-sm  border border-t-0 border-r-0 border-l-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light m-4" placeholder="Your Email" required/>
                    <input type="password" id="password" className="shadow-sm  border border-t-0 border-r-0 border-l-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light m-4" placeholder="Your Password" required/>
                    
                </div>
        

                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
           
        </div>
</section>
        </div>
    </div> 
  </div>
</>
}
