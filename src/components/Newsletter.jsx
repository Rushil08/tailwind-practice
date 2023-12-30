import React from "react";

function Newsletter() {
  return (
    <div className="bg-[#000300] text-white w-full py-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-[1240px] mx-auto max-w-[90%]">
        <div className="lg:col-span-2">
          <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold pb-2 lg:pb-0 text-center lg:text-start">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="lg:text-xl pb-4 lg:pb-0 text-center lg:text-start">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:pb-6 justify-center items-center">
          <input
            className="py-2 px-1 rounded-sm text-[1.1rem] text-black mb-2 lg:mb-0 text-center lg:text-start w-[300px]"
            type="text"
            name=""
            id=""
            placeholder="Enter you email"
          />
          <button className="bg-cyan-400 p-2 rounded-sm text-black text-[1.1rem] lg:w-[10rem] w-[8rem] lg:ml-2">
            Notify me
          </button>
        </div>
        <p className="lg:col-start-3 pt-2 lg:pt-0 text-center lg:text-start">
          We care about the protection of your data. Read our{" "}
          <a href="" className="text-cyan-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
