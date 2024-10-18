// This will show the option if the chart data is shown for price / Total Volume or Market Cap
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceType({ priceType, handlePriceTypeChange }) {
  return (
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
      sx={{
        backgroundColor: "#333333", // Set background color for the ToggleButtonGroup
        "& .MuiToggleButtonGroup-grouped": {
          backgroundColor: "#333333", // Set background for each ToggleButton
          color: "#fff", // Set text color for each ToggleButton
          "&.Mui-selected": {
            backgroundColor: "#3a80e9", // Set background color for selected ToggleButton
            color: "#fff", // Set text color for selected ToggleButton
          },
        },
      }}
    >
      <ToggleButton value="prices">Price</ToggleButton>
      <ToggleButton value="market_cap">Market Cap</ToggleButton>
      <ToggleButton value="total_Volume">Total Volume</ToggleButton>
    </ToggleButtonGroup>
  );
}
