import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row">
            
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 '>
            <img src="https://i.ibb.co/zs92g9p/pexels-pixabay-163036.jpg" className="w-full rounded-lg shadow-2xl" />
            <img src="https://i.ibb.co/BsK5Qxk/images.jpg" className="rounded-lg h-[187px] shadow-2xl" />
            <img src="https://i.ibb.co/dDwr9dv/images.jpg" className=" rounded-lg shadow-2xl" />
            <img src="https://i.ibb.co/VHmjbLb/images.jpg" className=" h-[183px] w-[200px] rounded-lg shadow-2xl" />
          </div>

          <div className='w-1/2 '>
            <div className='w-full h-full bg-orange-400 rounded'>
              <h1 className="text-5xl font-bold text-center text-white px-4 py-3">The big <span className='text-blue-800'>TOY</span> sale</h1>

              <div className='grid grid-cols-1 md:grid-cols-3 mt-4 mx-12'>
                <p className='text-center text-white font-bold bg-blue-700 rounded w-32'>
                  <img className='rounded ' src="https://i.ibb.co/54Pg6Y6/images.jpg" alt="" />
                </p>
                <p className='text-center text-white font-bold bg-blue-700 rounded w-32'>
                  up to <br /> <span className='text-5xl font-bold'>70% OFF</span>
                </p>
                <p className='text-center text-white font-bold bg-blue-700 rounded w-32'>
                  <img className='rounded' src="https://i.ibb.co/NyW8GhK/images.jpg" alt="" />
                </p>
              </div>
            </div>

            <p className="py-6 mt-10">
              A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls. Toys are often designed for use by children, although many are designed specifically for adults and pets.
            </p>

            <p className="py-6">
              A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls. Toys are often designed for use by children, although many are designed specifically for adults and pets.
            </p>

            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    );
};

export default About;