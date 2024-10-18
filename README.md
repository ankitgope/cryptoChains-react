API (Crypto API)
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

// coins == 100 coins

// PaginatedCoins -> Page 1 - coins.slice(0,10)
// PaginatedCoins -> Page 2 = coins.slice(10,20)
// PaginatedCoins -> Page 3 = coins.slice(20,30)=> (3-1)*10=  20(initial count)
// .
// .
// PaginatedCoins -> Page 10 = coins.slice(90,100)

// PaginatedCoins -> Page X , then initial Count = (X-1)*10
// coins.slice(initialCount,initialCount+10)

API -> Coin description -> https://api.coingecko.com/api/v3/coins/

 axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);



  Chart.js
  import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this

function Chart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis && {
        position: "right",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default Chart;


// This function is for getting the coin prices in the coin description area
import axios from "axios";
// tis below price type is used for this handel type of pricing change
export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log("prices >>>", response.data.prices);
      //return response.data.prices; -> it was written before we wrote the pricing chane according to price marketCap
      //After changes and we will pass the prices in the second code i mean coinDescription ifi pass prices then prices wll show it i pass total_Volume then total volume will show  like this
      return response.data[priceType];
    })
    .catch((error) => {
      console.log("No prices found");
    })
    .finally(() => {
      console.log("Prices code run succesfully");
    });
  return prices;
};

