import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
export default function AnchorTemporaryDrawer() {
  // made this state to open the drawer
  const [open, setOpen] = React.useState(false);
  const active = ({ isActive }) =>
    isActive ? "font-bold text-white rounded-md border-white" : "text-black hover:text-white bg-gray-300 mt-2 rounded-md border-white";
  return (
    <div>
      {/* right button on screen  */}

      <Button
        onClick={() => setOpen(true)}
        className="hover:bg-transparent"
        sx={{
          "&:hover .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <MenuRoundedIcon fontSize="medium" />
      </Button>
      {/* anchor-> use for whch side the drawer will open
          open -> it is the useState if it is true like(open={true} then the drawer will always open like it will always show hi)
          onClose-> it holds the state open state when the drawer will get close then the state will change to false and the  state open will change 
      */}
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        {/* data inside the drawer */}
        
        <div className=' flex flex-col w-60 bg-electric h-full text-center p-2 space-y-2 '>
        <NavLink to="/" className={active}>Home</NavLink>
        <NavLink to="/coins" className={active}>Coins</NavLink>
        {/* <NavLink to="/compare" className={active}>Compare</NavLink>
        <NavLink to="/watchlist" className={active}>Watchlist</NavLink> */}
        <NavLink to="/dashboard" className={active}>Dasboard</NavLink>
      </div>
      </Drawer>
    </div>
  );
}
