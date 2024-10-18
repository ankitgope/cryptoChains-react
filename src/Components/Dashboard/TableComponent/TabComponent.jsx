import * as React from "react";
//import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GridDisplay from "../Grid/GridDisplay";
import ListItems from "../List/ListItems";

export default function LabTabs({ coins }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="1" sx={{ color: "white" }} />
          <Tab label="List" value="2" sx={{ color: "white" }} />
        </TabList>

        <TabPanel value="1">
          {/* below we are writing the coins instead of items as we are passing coins as props in map (items,i)-->(coin,i) */}
          <div className="flex justify-center items-center flex-wrap gap-3">
            {coins.map((coin, i) => {
              return <GridDisplay coinu={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          {coins.map((item, i) => {
            return <ListItems coinuu={item} key={i} />;
          })}
        </TabPanel>
      </TabContext>
    </div>
  );
}
