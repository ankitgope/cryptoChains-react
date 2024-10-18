import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Common Components/Loader";
import { coinObjects } from "../Functions/CoinObjects";
import ListItems from "../Components/Dashboard/List/ListItems";
import CoinDataDesc from "../Components/CoinDescriptionComponents/CoinDataDesc";
import { getCoinDescriptionApi } from "../Functions/getCoinDescriptionApi";
import { getCoinPrices } from "../Functions/getCoinPrices";
import LineChart from "../Components/ChartGraph/LineChart";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import BasicSelect from "../Components/DaysBasicSelect/BasicSelect";
//import PriceType from "../Components/PriceType/PriceType";
import { SettingChartdata } from "../Functions/SettingChartdata";

const CoinsDescription = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  const [days, setDays] = useState(30); // Default to last 30 days for data
  const [coinData, setCoinData] = useState(); // State to store coin data
  const [chart, setChart] = useState({}); // State to store chart data
  // const [priceType, setPriceType] = useState("prices"); // Default price type

  const { id } = useParams(); // Get coin ID from URL parameters

  useEffect(() => {
    if (id) {
      getData(); // Fetch data when ID changes
    }
  }, [id]);

  async function getData() {
    try {
      const data = await getCoinDescriptionApi(id); // Fetch coin description data
      if (data) {
        coinObjects(setCoinData, data); // Process and set coin data
        const prices = await getCoinPrices(id, days, "prices"); // Fetch coin prices
        if (prices) {
          SettingChartdata(setChart, prices); // Set chart data
          setIsLoading(false); // Set loading to false after data is loaded
        }
      }
    } catch (error) {
      console.error("Error fetching coin data:", error); // Log any errors
      setIsLoading(false); // Ensure loading is stopped on error
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true); // Set loading to true when starting data fetch
    setDays(event.target.value); // Update days state
    try {
      const prices = await getCoinPrices(id, event.target.value, "prices"); // Fetch prices for new days
      if (prices) {
        SettingChartdata(setChart, prices); // Update chart data
      }
    } catch (error) {
      console.error("Error fetching prices:", error); // Log any errors
    } finally {
      setIsLoading(false); // Set loading to false after data fetch completes
    }
  };

  // const handlePriceTypeChange = async (event, newType) => {
  //   setIsLoading(true); // Set loading to true when starting data fetch
  //   setPriceType(newType); // Update price type state
  //   try {
  //     const prices = await getCoinPrices(id, days, newType); // Fetch prices for new price type
  //     if (prices) {
  //       SettingChartdata(setChart, prices); // Update chart data
  //     }
  //   } catch (error) {
  //     console.error("Error fetching prices by type:", error); // Log any errors
  //   } finally {
  //     setIsLoading(false); // Set loading to false after data fetch completes
  //   }
  // };

  return (
    <div>
      <div className="mt-3 flex items-center text-blue-600">
        <Link to="/coins" className="flex items-center">
          <ArrowBackRoundedIcon className="ml-5" />
          <span className="m-2 font-semibold">Back to Coins</span>
        </Link>
      </div>
      {isLoading ? (
        <Loader /> // Show loader while data is loading
      ) : (
        <div className="container mx-auto p-4 sm:p-6 md:p-8">
          <div className="mt-5 mb-6">
            <ListItems coinuu={coinData} /> 
          </div>

          <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ">
            <p className="font-semibold">Price Change</p>
            <div className="flex items-center gap-2 justify-between w-full flex-wrap sm:gap-4">
              <BasicSelect days={days} handleDaysChange={handleDaysChange} />
              {/* 
                Orices changes prices volume and market cap 
              <PriceType
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />  */}
            </div>
          </div>

          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center rounded-lg bg-slate-900">
            <LineChart chartData={chart} />
          </div>

          <div className=" mt-3  rounded-lg">
            <CoinDataDesc heading={coinData.name} desc={coinData.desc} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinsDescription;
