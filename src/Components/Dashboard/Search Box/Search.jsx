import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({ search, searchEvent }) => {
  return (
    <div className="flex justify-center items-center h-14 mb-4 mt-7 px-4">
      <div className="relative w-full max-w-3xl">
        <SearchRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => searchEvent(e)}
          className="w-full h-12 pl-14 p-2 bg-zinc-950 text-white rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Search;
