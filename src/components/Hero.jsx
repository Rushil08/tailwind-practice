import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="text-white  w-full h-[90vh] text-center pt-[15%] md:pt-[10%]">
      <p className="uppercase text-cyan-400 font-bold p-0 text-[1.15rem] md:text-xl md:p-2">
        Growing with data analytics
      </p>
      <h1 className="font-bold md:text-7xl sm:text-6xl text-[2.75rem] px-1">
        Grow with data.
      </h1>
      <div className="font-bold md:text-5xl sm:text-4xl text-[1.25rem] md:p-2 p-1">
        Fast, flexible, financing for
        <TypeAnimation
          className="text-gray-500"
          preRenderFirstString="true"
          sequence={[" BTB", 1000, "", 0, " BTC", 1000, " SASS", 1000]}
          wrapper="span"
          speed={20}
          deletionSpeed={40}
          repeat={Infinity}
        />
      </div>
      <p className="font-bold md:2xl md:max-w-[100%] text-[1.2rem] max-w-[90%] text-gray-500 m-auto md:mt-2 p-2">
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS
        platforms.
      </p>
      <button className=" bg-cyan-400 p-3 rounded-md text-cyan-0 md:mt-2 mt-3 text-[1.1rem] md:w-[12rem] w-[8rem]">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
