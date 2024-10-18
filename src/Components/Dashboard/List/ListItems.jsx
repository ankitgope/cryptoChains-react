import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
const ListItems = ({ coinuu }) => {
  const { price_change_percentage_24h } = coinuu;

  return (
    <Link to={`/coins/${coinuu.id}`}>
      <div
        className={`flex flex-wrap items-center bg-slate-900 border-silver border-[2px] p-4 rounded-lg shadow-lg mb-3 hover:bg-slate-950 transition-transform duration-300`}
      >
        <Tooltip title={coinuu.name} placement="bottom">
          <img
            src={coinuu.image}
            alt="coinImage"
            className="w-10 h-10 mr-4 border border-gray-500 hover:border-gray-700 transition-colors duration-300"
          />
        </Tooltip>

        <div className="flex flex-col justify-center mr-6">
          <p className="uppercase font-semibold text-lg">{coinuu.symbol}</p>
          <p className="text-gray-300 font-medium">{coinuu.name}</p>
        </div>

        <div className="flex items-center ml-auto">
          {price_change_percentage_24h > 0 ? (
            <div className="flex items-center text-green-600">
              <div className="p-2 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                <TrendingUpRoundedIcon />
              </div>
              <span className="ml-2 border border-green-600 p-1 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                {coinuu.price_change_percentage_24h.toFixed(2)} %
              </span>
            </div>
          ) : (
            <div className="flex items-center text-red-600">
              <div className="p-2 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300">
                <TrendingDownRoundedIcon />
              </div>
              <span className="ml-2 border border-red-600 p-1 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300">
                {coinuu.price_change_percentage_24h.toFixed(2)} %
              </span>
            </div>
          )}
        </div>

        <div className="ml-6 text-right hidden md:block">
          <Tooltip title="Current Price" placement="bottom-end">
            <h3
              className={`font-semibold ${
                price_change_percentage_24h > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              $ {coinuu.current_price.toLocaleString()}
            </h3>
          </Tooltip>
          <Tooltip title="Total Price" placement="bottom-end">
            <p className="text-gray-500">
              Total Price:{" "}
              <span className="text-gray-300">
                {coinuu.total_volume.toLocaleString()}
              </span>
            </p>
          </Tooltip>
          <Tooltip title="Market Cap" placement="bottom-end">
            <p className="text-gray-500">
              Market Cap:{" "}
              <span className="text-gray-300">
                ${coinuu.market_cap.toLocaleString()}
              </span>
            </p>
          </Tooltip>
        </div>
      </div>
    </Link>
  );
};

export default ListItems;
