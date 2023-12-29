import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    if (nav == false) setNav(true);
    else setNav(false);
  }
  return (
    <div className=" justify-between items-center text-white flex h-24 max-w-[1240px] m-auto p-4">
      <h1 className="text-cyan-400 text-3xl font-bold">REACT.</h1>
      <ul className="text-[16px] md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      {nav ? (
        <AiOutlineClose
          className="size-6 block md:hidden"
          onClick={handleNav}
        />
      ) : (
        <AiOutlineMenu className="size-6 block md:hidden" onClick={handleNav} />
      )}

      <div
        className={
          nav
            ? "flex-col fixed left-0 top-0 border-r border-gray-700 h-full w-[60%] bg-[#000300] pt-0 text-[16px] uppercase ease-in-out duration-300"
            : "flex-col fixed left-[-100%] top-0 border-r border-gray-700 h-full w-[60%] bg-[#000300] pt-0 text-[16px] uppercase ease-in-out duration-300"
        }
      >
        <h1 className="text-cyan-400 text-3xl font-bold ml-4 mt-6">REACT.</h1>
        <ul className="pt-12 p-2 ">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">Company</li>
          <li className="p-4 border-b border-gray-500">Resources</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
