// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

export default function About() {
  return (
    <div className='bg-blue py-8 md:py-16'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center p-48">
        <div className="content">
          <h1 className='font-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6'>ABOUT COMPONENT</h1>
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <div className="bg-white h-1 flex-1 max-w-24"></div>
            <div className="px-2">
              <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
            </div>
            <div className="bg-white h-1 flex-1 max-w-24"></div>
          </div>
          <div className="inner flex flex-col md:flex-row justify-center text-left md:text-center md:text-left">
            <div className="p-5 text-white md:w-1/2 ">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className="p-5 text-white md:w-1/2 mt-4 md:mt-0 md:ml-4">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
