import React from "react";
import { easeInOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";
function Hero() {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen   max-w-7xl  mx-auto flex justify-between pt-40 z-110  ">
      <motion.span className="w-5 absolute  " 
      animate={{
        scale:[1,1.5,2.5,4],
        rotate:[-90,10,270,360],
       
      }}
      drag
      transition={{
        duration:2,
        
      }}
      dragConstraints={{
        top:100,
        bottom:100
      }}
      >
        <FaPenNib className="w-full h-full text-red-400 "></FaPenNib>
      </motion.span>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.4,
          ease:easeInOut
        }}
        
        className="absolute -bottom-50   left-0  rounded-tr-[160px] rounded-br-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200  shadow-2xl size-140 "
      ></motion.div>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.4,
          ease:easeInOut
        }}
        
        className="absolute -bottom-50   left-0  rounded-tr-[160px] rounded-br-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200  shadow-2xl size-140 "
      ></motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4}}
        className="absolute -top-32 right-0 rounded-bl-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200 shadow-2xl size-120"
      ></motion.div>

      <div className="font-black text-8xl flex flex-col z-110 relative ">
        <motion.div
          animate={{
            scaleX: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="bg-red-300 w-full  absolute"
        >
          .
        </motion.div>
        <div className="flex flex-col font-normal  ">
          <span className="">Collaborate</span>
          <span className="text-yellow-400"> Draw & Talk </span>
          <span className=" text-green-400 ">As A Team</span>
        </div>

        <motion.span
          animate={{
            rotateZ: 3,
          }}
          transition={{
            duration: 1,
          }}
          className="font-bold text-3xl pl-50 text-red-500"
        >
          {" "}
          now with Video Confrencing !{" "}
        </motion.span>
      </div>
      <div className="flex flex-col mr-25 mt-50 text-xl font-normal z-110">
        <span>Bring your entire team together </span>
        <span>and strategise plans with super smooth</span>
        <span>video confrencing and white board</span>
        <span>- all at one place !</span>
        <div className="flex gap-4 w-full text-sm mt-5">
          <motion.div 
          whileHover={{
            rotateX:360
          }}
          transition={{
            duration:1
          }}
          onClick={()=>{
            navigate("/register")
          }} className="bg-black  text-white w-1/2 px-2 py-2 flex items-center justify-center rounded-sm">
            Get Started For Free
          </motion.div>

          <motion.div
          whileHover={{
            rotateX:360
          }}
          transition={{
            duration:1
          }}
           className="bg-white border w-1/2 px-2 py-2 flex items-center justify-center rounded-sm">
            Documentation
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
