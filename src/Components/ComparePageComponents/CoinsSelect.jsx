import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getHundradeCoin } from "../../Functions/getHundradeCoin";
const CoinsSelect = ({crypto1,crypto2,handleCoinChange}) => {
  
  const [allCoin, setAllCoin] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const myCoins = await getHundradeCoin();
    setAllCoin(myCoins);
    
  }
  return (
    <div className="flex  gap-3 items-center">
      <p>Crypto 1</p>
     
      <Select
        sx={{
          "& .MuiSelect-select": {
            backgroundColor: "#333333", // Default background color of the Select input
            color: "white", // Default text color of the Select input
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "blue !important", // Set label color to blue when focused
          },
          "& .Mui-selected": {
            backgroundColor: "#333333!important", // Apply styles to the selected MenuItem
            color: "white !important",
          },
        }}
        value={crypto1 || ""}
        label="crypto1"
        onChange={(event)=>handleCoinChange(event,false)}
      >
        {allCoin.map((coin) => (
          <MenuItem key={coin.id} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <p>Crypto 2</p>
     
      <Select
        sx={{
          "& .MuiSelect-select": {
            backgroundColor: "#333333", // Default background color of the Select input
            color: "white", // Default text color of the Select input
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "blue !important", // Set label color to blue when focused
          },
          "& .Mui-selected": {
            backgroundColor: "#333333!important", // Apply styles to the selected MenuItem
            color: "white !important",
          },
        }}
        value={crypto2 || ""}
        label="crypto2"
        // for setting coin 2 we are using this style as we are keeping thr function name same 
        onChange={(event)=>handleCoinChange(event,true)}
      >
        {allCoin.map((coin) => (
          <MenuItem key={coin.id} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      
    </div>
  );
};

export default CoinsSelect;
