// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe  } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faTwitter, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return <>
<div className='bg-slate-800 p-8 md:p-20'>
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-around items-center text-white text-center">
      <div className="location w-full md:w-1/3 mb-8 md:mb-0">
        <h2 className='text-2xl'>LOCATION</h2>
        <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
      </div>
      <div className="icons w-full md:w-1/3 mb-8 md:mb-0">
        <h2 className='text-2xl'>AROUND THE WEB</h2>
        <ul className="flex justify-center space-x-2 mt-3">
          <li>
            <FontAwesomeIcon icon={faGlobe } className="hover:bg-blue-500 hover:border-gray-600 text-white text-xl border-2 border-white rounded-full p-2" />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} className="hover:bg-blue-500 hover:border-gray-600 text-white text-xl border-2 border-white rounded-full p-2" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="hover:bg-blue-500 hover:border-gray-600 text-white text-xl border-2 border-white rounded-full p-2" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} className="hover:bg-blue-500 hover:border-gray-600 text-white text-xl border-2 border-white rounded-full p-2" />
          </li>
        </ul>
      </div>
      <div className="about w-full md:w-1/3">
        <h2 className='text-2xl'>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
  </div>
</div>

    <div className="bg-slate-950">
        <div className="copy text-center p-5">
          <p className='text=center text-gray-500'>Copyright © Costarico 2024 ❤️ Cosmas Alor</p>
        </div>
    </div>
  </>
}
