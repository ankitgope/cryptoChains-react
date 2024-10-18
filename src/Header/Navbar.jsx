import React from "react";
import { NavLink } from "react-router-dom";
import AnchorTemporaryDrawe from "../Header/Drawer";
import BasicButtons from "../Components/Buttons/Buttons";

const Navbar = () => {
  // Define the active class function
  const active = ({ isActive }) =>
    isActive
      ? "font-bold text-gold underline"
      : "text-gray-300 hover:text-white text-center";

  // Dashboard button click
  const handelClick = () => {
    console.log("dashboard");
  };

  return (
    <div className="bg-electric text-blue-100 h-16 shadow-md w-full flex justify-between items-center p-4">
      <h1 className="text-gold text-xl md:text-2xl font-bold">CryptoChains.</h1>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-4 items-center pr-5">
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/coins" className={active}>
          Coins
        </NavLink>
        {/* <NavLink to="/compare" className={active}>
          Compare
        </NavLink> */}
        {/* <NavLink to="/favourites" className={active}>
          Favourites
        </NavLink> */}
        <NavLink to="/dashboard" className={active}>
          <div className="relative">
            Dashboard
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-lg">
              new
            </span>
          </div>
        </NavLink>
      </div>

      {/* Drawer for mobile screens */}
      <div className="md:hidden">
        <AnchorTemporaryDrawe />
      </div>

      {/* Buttons for larger screens */}
      {/* <div className="hidden md:flex space-x-2">
        <BasicButtons
          variant="contained"
          text="Sign In"
          onClick={handelClick}
        />
        <BasicButtons
          variant="contained"
          text="Log In"
          onClick={handelClick}
        />
      </div> */}
    </div>
  );
};

export default Navbar;
