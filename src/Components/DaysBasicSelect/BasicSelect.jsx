// used to select the days  in the options
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function BasicSelect({ days, handleDaysChange }) {
  return (
    <div>
      <Select
        sx={{
          "& .MuiSelect-select": {
            backgroundColor: "#333333", // Default background color of the Select input
            color: "white", // Default text color of the Select input
          },
          "& .Mui-selected": {
            backgroundColor: "#333333!important", // Apply styles to the selected MenuItem
            color: "white !important",
          },
        }}
        value={days}
        onChange={handleDaysChange}
      >
        <MenuItem value={7}> 7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={365}>1 year</MenuItem>
      </Select>
    </div>
  );
}
