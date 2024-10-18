import React from "react";
import "../index.css";
import BasicButtons from "../Components/Buttons/Buttons";

import iphone from "../assets/iphone.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex gap-5 pl-5 pr-5   flex-wrap max-800:flex-col-reverse">
      <div className="relative w-full max-800:w-full max-1023:ml-9 max-1023:mt-16 max-1023:-mr-6 max-800:ml-auto flex mt-7 justify-center">
        {/* Adjusted the image size and layout for mobile devices */}
        <motion.img
          src={iphone}
          alt="iphone"
          className="absolute w-[240px] sm:w-[250px] right-2.5 top-1 items-center max-1023:pl-6 
               max-800:relative max-800:w-3/4 max-800:h-auto max-800:max-h-[300px] max-800:left-0 max-800:right-0 max-800:mx-auto object-contain flex-wrap"
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
      <div className="container pl-20  max-2560:items-center justify-center mt-20 overflow-auto max-800:flex max-800:flex-col  ">
        <h1
          className="text-6xl max-432:text-sm max-432:pl-12 md:text-8xl max-1023:text-7xl
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
