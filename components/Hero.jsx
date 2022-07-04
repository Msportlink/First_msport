import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Everyone associated with</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Msport Link Africa
        </h2>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Believes Football belongs to Everybody{' '}
        </h3>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          Regardless of age gender or creed.Find out more about our exceptional
          academy that caters to both Girls and Boys in various age categories.
          We gladly welcome your effort to support our work and help us impact 
          more people through football.
        </p>
        <div className="text-[#ccd6f6]">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-500">
            Read More
            <span className="group-hover:ml-[10px]">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
