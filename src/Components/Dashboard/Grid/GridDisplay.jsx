import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
const GridDisplay = ({ coinu }) => {
  const { price_change_percentage_24h } = coinu;

  const isActive =
    price_change_percentage_24h > 0
      ? "hover:border-green-600"
      : "hover:border-red-600";
  return (
    <Link to={`/coins/${coinu.id}`}>
      <div>
        <div
          className={` bg-slate-900 w-[250px] h-[270px] border-silver border-[2px] ${isActive} hover:bg-slate-950 hover:scale-105 transition-transform duration-300 rounded-lg  overflow-hidden shadow-lg ml-3`}
        >
          <div className="flex justify-start items-center p-5 gap-3 mt-2">
            <img src={coinu.image} alt="coinImage" className="w-16" />
            <div>
              <p className="uppercase font-semibold text-lg">{coinu.symbol}</p>
              <p className="text-gray-300 font-medium ">{coinu.name}</p>
              {/* favourite here */}
            </div>
          </div>
          {price_change_percentage_24h > 0 ? (
            <div className="ml-6 flex flex-row gap-3">
              <div className=" border-green-600 border-solid border-[2px] p-2 rounded-full hover:bg-green-600 items-center ">
                {coinu.price_change_percentage_24h.toFixed(2)} %
              </div>
              <div className="flex items-center border-green-600 border-solid border-[2px] rounded-full p-2 hover:bg-green-600 ">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="ml-6 flex flex-row gap-3">
              <div className=" border-red-600 border-solid border-[2px] p-2 rounded-full hover:bg-red-600 ">
                {coinu.price_change_percentage_24h.toFixed(2)} %
              </div>
              <div className="flex items-center border-red-600 border-solid border-[2px] rounded-full p-2 hover:bg-red-600 ">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
          <div className="mt-3 ml-5">
            {price_change_percentage_24h > 0 ? (
              <h3 className="font-semibold text-green-600">
                $ {coinu.current_price.toLocaleString()}
              </h3>
            ) : (
              <h3 className="font-semibold text-red-600">
                $ {coinu.current_price.toLocaleString()}
              </h3>
            )}
            <div className="items-center">
              <h3 className="font-semibold text-gray-500">
                Total Volume:
                <span className="text-gray-light">
                  {coinu.total_volume.toLocaleString()}
                </span>
              </h3>
              <h3 className="font-semibold text-gray-500">
                Market Cap:
                <span className="text-gray-light">
                  {coinu.market_cap.toLocaleString()}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridDisplay;
