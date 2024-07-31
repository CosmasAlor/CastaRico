// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { title: 'Project One', image: img1, id: 1 },
    { title: 'Project Two', image: img2, id: 2 },
    { title: 'Project Three', image: img3, id: 3 },
    { title: 'Project Four', image: img2, id: 4 },
    { title: 'Project Five', image: img3, id: 5 },
    { title: 'Project Six', image: img1, id: 6 },
    { title: 'Project Six', image: img1, id: 7 },
    { title: 'Project Six', image: img2, id: 8 },
  ];

  // Function to handle image click using id
  const handleImageClick = (id) => {
    const project = projects.find(p => p.id === id);
     if (project) { setSelectedImage(project.image); } };

  const handleCloseModal = () => { setSelectedImage(null); };

  return (
    <>


      <div className="container text-center p-10">
      <h1 className='font-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-4'>PORTFOLIO COMPONENT</h1>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-black h-1 flex-1 max-w-24"></div>
            <div className="px-2">
              <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
            </div>
            <div className="bg-black h-1 flex-1 max-w-24"></div>
          </div>

        <div className="flex flex-wrap -mx-4 mt-7">
          {projects.map((project) => (
            <div
            key={project.id}
            className="w-full md:w-1/2 lg:w-1/3 p-4 mb-4 hover:cursor-pointer relative  rounded-lg"
          >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-md transition-transform transform hover:scale-105"
             
              />
              <div onClick={() => handleImageClick(project.id)} 
                className="absolute inset-0 bg-blue-500 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPlus} className="text-white text-6xl" />
              </div>
            </div>
          ))}
        </div>
      </div>


        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40">
            <div className="relative max-w-3xl max-h-[50vh]">
              <img src={selectedImage} alt="Selected Project" className="w-full h-full object-contain " />
              <button onClick={handleCloseModal} className="absolute top-4 right-4 bg-transparent text-3xl text-white"> &times; </button>
            </div>
          </div>


      )}
    </>
  );
}
