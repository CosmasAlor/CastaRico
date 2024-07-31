import React from 'react';
import error from '../../assets/error.jpg';

export default function Notfound() {
  return (
    <div className="m-16 text-center">
      <span className='text-3xl'>The page you are looking for is not found!!!</span>
      <div className="mt-4"> {/* Adding margin top for spacing */}
        <img src={error} alt="Error" width="500px" className="mx-auto d-block" />
      </div>
    </div>
  );
}
