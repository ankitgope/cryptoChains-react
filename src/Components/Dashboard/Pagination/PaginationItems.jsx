import * as React from "react";
import Pagination from "@mui/material/Pagination";

import Stack from "@mui/material/Stack";

export default function CustomIcons({page,handelPageChange}) {
  //adding usestate for changes in page const(page,setPage)=useState("1")
  // we will work it in coin page as the count will get selected from coin.jsx
  return (
    <Stack spacing={2} className="items-center bg-slate-300 rounded-t-sm">
      <Pagination
        count={10}
        page={page}
        shape="rounded"
        // adding  onchnage here 
        onChange={(event,value)=>handelPageChange(event,value)}
        sx={{
          "& .Mui-selected": {
            backgroundColor: "black",
            color: "white",
          },
          "& .MuiPaginationItem-page": {
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          },
        }}
      />
    </Stack>
  );
}
