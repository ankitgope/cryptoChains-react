import React, { useState, useEffect } from "react";
import CoinsSelect from "../Components/ComparePageComponents/CoinsSelect";
import BasicSelect from "../Components/DaysBasicSelect/BasicSelect";
import { coinObjects } from "../Functions/CoinObjects";
import { getCoinDescriptionApi } from "../Functions/getCoinDescriptionApi";
import { getCoinPrices } from "../Functions/getCoinPrices";
import Loader from "../Components/Common Components/Loader";
import ListItems from "../Components/Dashboard/List/ListItems";
import CoinDataDesc from "../Components/CoinDescriptionComponents/CoinDataDesc";
import { SettingChartdata } from "../Functions/SettingChartdata";
import LineChart from "../Components/ChartGraph/LineChart";

const Compare = () => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);

  // States to store selected cryptocurrency IDs
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");

  // Data states to store fetched cryptocurrency data
  const [crypto1Data, setCrypto1data] = useState({});
  const [crypto2Data, setCrypto2data] = useState({});

  // Days state to manage the number of days for price fetching
  const [days, setDays] = useState(30);
  // Chart state  to store fetched chart data
  const [chartData, setChartData] = useState({});

  // State to manage the price type for fetching coin prices(Toggle component that market value market capaacity rtc)
  // const [priceType, setPriceType] = useState("prices");

  // useEffect to fetch data when the component is mounted
  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days]);

  // Function to fetch cryptocurrency data and prices
  async function getData() {
    setIsLoading(true);

    // Fetch coin description data for the selected cryptocurrencies
    const data1 = await getCoinDescriptionApi(crypto1);
    if (data1) {
      const data2 = await getCoinDescriptionApi(crypto2);

      // Process and set coin description data
      coinObjects(setCrypto1data, data1);
      if (data2) {
        coinObjects(setCrypto2data, data2);
        const prices1 = await getCoinPrices(crypto1, days, "prices"); // priceType
        const prices2 = await getCoinPrices(crypto2, days, "prices"); // priceType
        SettingChartdata(setChartData, prices1, prices2);
        console.log("both Prices fetched", prices1, prices2);
        setIsLoading(false);
      }

      // If both coin descriptions are fetched, fetch their prices
      // if (data1 && data2) {

      //   // If prices are fetched, set loading to false
      //   if (prices1.length > 0 && prices2.length > 0) {

      //   }
      // }
    }
  }

  // Handler function to update the number of days when changed
  const handleDaysChange = async (e) => {
    setIsLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(crypto1, e.target.value, "prices"); // priceType
    const prices2 = await getCoinPrices(crypto2, e.target.value, "prices"); // priceType
    SettingChartdata(setChartData, prices1, prices2);
    console.log("both Prices fetched", prices1, prices2);
    setIsLoading(false);
  };

  // Handler function to update selected cryptocurrencies
  const handleCoinChange = async (e, isCoin2) => {
    setIsLoading(true);

    // If the second coin is being changed
    if (isCoin2) {
      setCrypto2(e.target.value);

      // Fetch and set description data for the second coin
      const data = await getCoinDescriptionApi(e.target.value);
      coinObjects(setCrypto2data, data);
      // Fetch prices for both selected coins
      const prices1 = await getCoinPrices(crypto1, days, "prices"); // priceType
      const prices2 = await getCoinPrices(crypto2, days, "prices"); // priceType

      //If both prices are fetched, set loading to false
      // if (prices1.length > 0 && prices2.length > 0) {
      //   console.log("both Prices fetched", prices1, prices2);
      //   setIsLoading(false);
      // }
    } else {
      // If the first coin is being changed
      setCrypto1(e.target.value);
      // Fetch and set description data for the first coin
      const data = await getCoinDescriptionApi(e.target.value);
      coinObjects(setCrypto1data, data);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Coin selection and days selection */}
          <div className="flex justify-between container mx-auto px-4 py-6">
            <CoinsSelect
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <BasicSelect days={days} handleDaysChange={handleDaysChange} />
          </div>

          {/* List of data for the first cryptocurrency */}
          <div className="container  ml-7">
            <ListItems coinuu={crypto1Data} />
          </div>

          {/* List of data for the second cryptocurrency */}
          <div className="container  ml-7 ">
            <ListItems coinuu={crypto2Data} />
          </div>
          {/* Line chart component */}
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center rounded-lg bg-slate-900 container ml-7 px-4 py-6">
            <LineChart chartData={chartData} multiAxis={true} />
          </div>

          {/* Coin description for the first cryptocurrency */}
          <div className="rounded-lg container   ml-7">
            <CoinDataDesc heading={crypto1Data.name} desc={crypto1Data.desc} />
          </div>

          {/* Coin description for the second cryptocurrency */}
          <div className=" rounded-lg container   ml-7">
            <CoinDataDesc heading={crypto2Data.name} desc={crypto2Data.desc} />
          </div>
        </>
      )}
    </div>
  );
};

export default Compare;
