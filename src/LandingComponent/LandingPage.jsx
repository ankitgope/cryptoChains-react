import React from "react";
import "../index.css";
import BasicButtons from "../Components/Buttons/Buttons";
//import gradient from "../assets/gradient.png";
import iphone from "../assets/iphone.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex gap-5 m-5 ">
      <div className="relative w-1/2 ml-auto max-800:hidden items-center max-1023:ml-9 max-1023:mt-16 max-1023:-mr-6 ">
        {/* <img 
            src={gradient} 
            alt="gradient" 
            className="absolute w-[240px] left-12 top-1 sm:w-[250px]  max-1021:hidden"
          /> */}
        <motion.img
          src={iphone}
          alt="iphone"
          className="absolute w-[300px]  right-2.5  top-3 items-center max-1017:pl-6 max-1021:pl-6"
          initial={{ x: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
      {/* right part */}
      <div className="container ml-9 max-2560:items-center justify-center mt-20 ">
        <h1
          className="text-6xl sm:text-4xl md:text-8xl 
         text-black hover:text-white custom-title font-semibold mb-4  "
        >
          Track Crypto
        </h1>
        <h2 className="text-xl sm:text-xl md:text-6xl  font-bold text-electric mb-4 ">
          Real Time
        </h2>
        <p className="text-gray-300 text-xl">
          get to know about crypto where ever you want
        </p>
        <div className="flex gap-3 mt-5 ">
          <BasicButtons
            variant="contained"
            text="COINS"
            onClick={() => navigate("/coins")}
            sx={{
              borderRadius: "20px",
            }}
          />

          <BasicButtons
            variant="outlined"
            text="Share App"
            sx={{
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
