// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import avatar from '../../assets/avataaars.svg';

export default function Home() {
  return <>
  
  <div className='bg-blue py-5 md:py-14'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="content ">
          <div className="mt-4 ">
            <img src={avatar} alt="Avatar" className="mx-auto max-w-xs md:max-w-sm lg:max-w-md max-h-50" />
          </div>

          <h1 className='font-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-4'>HOME COMPONENT</h1>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white h-1 flex-1 max-w-24"></div>
            <div className="px-2">
              <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
            </div>
            <div className="bg-white h-1 flex-1 max-w-24"></div>
          </div>

          <div className="text-white text-base sm:text-lg md:text-xl">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  
}
