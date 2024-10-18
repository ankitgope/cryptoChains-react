// This function is for getting the coin prices in the coin description area
import axios from "axios";

export const getCoinPrices = ( id, days,priceType ) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log("prices >>>", response.data.prices);
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
