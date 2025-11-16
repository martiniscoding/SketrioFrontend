import React from "react";

function Hero() {
  return (
    <div className="w-full  max-w-7xl  mx-auto flex justify-between items-center pt-20 z-110  ">
        <div className="absolute -top-30 -right-10  rounded-bl-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200  shadow-2xl size-120 ">
        </div>
        <div className="absolute -top-30 -right-10  rounded-bl-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200  shadow-2xl size-120 ">
        </div>
        <div className="fixed -bottom-30 -left-10  rounded-tr-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200  shadow-2xl size-120 ">
        </div>
        
     
      <div className="font-black text-8xl flex flex-col z-110">
        <div className="flex flex-col">
          <span>Collaborate</span>
          <span className="text-yellow-400"> Draw & Talk </span>
          <span className=" text-green-400 ">As A Team</span>
        </div>

        <span className="font-bold text-3xl pl-50 text-red-500">
          {" "}
          now with Video Confrencing !{" "}
        </span>
      </div>
      <div className="flex flex-col mr-25 mt-50 text-xl font-bold z-110">
        <span>Bring your entire team together </span>
        <span>and strategise plans with super smooth</span>
        <span>video confrencing and white board</span>
        <span>- all at one place !</span>
        <div className="flex gap-4 w-full text-sm mt-5">
          <div className="bg-black  text-white w-1/2 px-2 py-2 flex items-center justify-center rounded-sm">
            Get Started For Free
          </div>

          <div className="bg-white border w-1/2 px-2 py-2 flex items-center justify-center rounded-sm">
            Documentation
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
