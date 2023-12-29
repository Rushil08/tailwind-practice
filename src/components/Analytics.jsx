import React from "react";
import laptop from "../assets/data-analytics.png";

function Analytics() {
  return (
    <div className="bg-white w-full h-full py-16 px-4">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto">
        <img
          className="md:w-[400px] w-[250px] mx-auto mb-4 md:mb-0"
          src={laptop}
          alt="laptop"
        />
        <div className="flex flex-col h-full justify-center">
          <p className="uppercase text-cyan-500 font-bold">
            Data analytics dashboard
          </p>
          <h1 className="font-bold text-xl my-1">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            itaque nisi porro amet quaerat labore repellendus! Autem tenetur
            libero atque officiis accusamus alias dignissimos, a modi esse
            facilis quibusdam reiciendis?
          </p>
          <button className=" bg-black p-3 rounded-md text-cyan-400 md:mt-3 mt-4 text-[1.1rem] md:w-[12rem] w-[8rem] mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
