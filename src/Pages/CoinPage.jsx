import React, { useEffect, useState } from "react";
import TabComponent from "../Components/Dashboard/TableComponent/TabComponent";

import Search from "../Components/Dashboard/Search Box/Search";
import PaginationItems from "../Components/Dashboard/Pagination/PaginationItems";
import Loader from "../Components/Common Components/Loader";
import { getHundradeCoin } from "../Functions/getHundradeCoin";

const CoinPage = () => {
  const [coins, setCoins] = useState([]);
  //for coin Slice
  const [paginatedCoins, setPaginnatedCoins] = useState([]);
  //search work
  const [search, setSearch] = useState("");
  // For loading (By default the loading will be true )
  const [Loading, setLoading] = useState(true);
  // search event for search
  const searchEvent = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };
  //filter function
  var searchFilter = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Function
  const [page, setPage] = useState(1);
  const handelPageChange = (event, value) => {
    setPage(value);
    // setting value for slicing the coins for pagination
    // value = pageNo =3 -> 3-1 *10 = 20
    //(prevIndex,prevIndex+10) -> 20, 20+10=30 == (20,30)
    var prevIndex = (value - 1) * 10;
    setPaginnatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  useEffect(() => {
    // Prevously it was before get100coins function
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setCoins(response.data);
    //     setPaginnatedCoins(response.data.slice(0, 10));
    //     //As soon as we get the data from the api we will set false
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading();
    //   });
    getCoin();
  }, []);
  const getCoin = async () => {
    const myCoin = await getHundradeCoin();
    if (myCoin) {
      setCoins(myCoin);
      setPaginnatedCoins(myCoin.slice(0, 10));
      //As soon as we get the data from the api we will set false
      setLoading(false);
    }
  };
  return (
    <div className="bg-black">
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} searchEvent={searchEvent} />
          {/* <TabComponent coins={searchFilter} /> using this for search filteration */}
          <TabComponent coins={search ? searchFilter : paginatedCoins} />

          {!search && (
            <PaginationItems page={page} handelPageChange={handelPageChange} />
          )}
        </>
      )}
    </div>
  );
};

export default CoinPage;
