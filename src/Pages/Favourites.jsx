
import React from "react";
import BasicButtons from "../Components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const navigate = useNavigate()
  return (
    <div className="mb-2">
      <h1 className="text-4xl">No saved Coins</h1>
      <BasicButtons
            variant="contained"
            text="Coins"
            onClick={() => navigate("/")}
            sx={{
              borderRadius: "20px",
            }}
          />
    </div>
  );
};

export default Favourites;
