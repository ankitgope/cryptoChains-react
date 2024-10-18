import { CoinDateConvertion } from "./CoinDateConvertion";

export const SettingChartdata = (setChart, prices1, prices2) => {
  if (prices2) {
    setChart({
      labels: prices1.map((price) => CoinDateConvertion(price[0])),
      datasets: [
        {
          type: "line",
          label: "Crypto1", 
          data: prices1.map((prices) => prices[1]),
          borderColor: "#3a80e9",
          yAxisID: 'crypto1', 
        },
        {
          type: "line",
          label: "Crypto2", 
          data: prices2.map((prices) => prices[1]),
          borderColor: "#61c96f",
          yAxisID: 'crypto2',
        }
      ],
    });
  } else {
    setChart({
      labels: prices1.map((price) => CoinDateConvertion(price[0])),
      datasets: [
        {
          type: "line",
          label: "Crypto1", 
          data: prices1.map((prices) => prices[1]),
          borderColor: "#3a80e9",
          yAxisID: 'crypto1', 
        },
      ],
    });
  }
};
