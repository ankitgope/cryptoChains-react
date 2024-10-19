import React, { useState } from "react";
import "../index.css";
import BasicButtons from "../Components/Buttons/Buttons";
import iphone from "../assets/iphone.png";
import { motion, px } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showShareOptions, setShowShareOption] = useState(false);
  const shareUrl = "https://crypto-chains.vercel.app/";
  const title = "Check this App";
  return (
    <div className="w-full flex gap-4 px-5 flex-wrap max-800:flex-col-reverse max-800:gap-0">
      {/* Image Section */}
      <div className="w-full flex gap-4 px-5 flex-wrap max-800:flex-col-reverse max-800:gap-0">
        {/* Image Section */}
        <div className="relative mt-4 mr-10 w-full flex justify-center  max-800:w-full max-800:mt-0 max-800:mb-4">
          <motion.img
            src={iphone}
            alt="iphone"
            className="absolute w-[240px] right-2.5 top-1 max-1024:pl-6 max-800:relative max-472:w-[70%] max-800:h-[100%] max-800:ml-16   object-contain"
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
      </div>

      {/* Text Section */}
      <div className="w-full mt-6 pl-20 pr-10 max-1024:mt-8 max-800:mt-0 max-800:mb-0 max-800:pl-4 max-800:pr-4 max-800:pb-4">
        <h1 className="text-6xl max-432:text-sm max-432:pr-16 md:text-8xl max-1024:text-7xl text-black hover:text-white custom-title font-semibold mb-4">
          Track Crypto
        </h1>
        <h2 className="text-xl sm:text-xl md:text-6xl max-432:pt-2 max-432:pr-16 font-bold text-electric mb-2">
          Real Time
        </h2>
        <p className="text-gray-300 text-xl max-432:pr-12">
          Get to know about crypto wherever you are.
        </p>
        <div className="flex gap-3 mt-4 max-432:pr-12">
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
            onClick={() => setShowShareOption(!showShareOptions)}
            sx={{
              borderRadius: "20px",
            }}
          />
        </div>
        {showShareOptions && (
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "space-evenly",
              width: "300px",
            }}
          >
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="Check this out!"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>

            <WhatsappShareButton url={shareUrl} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
