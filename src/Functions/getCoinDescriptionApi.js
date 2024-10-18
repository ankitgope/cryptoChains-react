import axios from "axios";

export const getCoinDescriptionApi = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      console.log(response);
      // Below part is use for writing normal case in CoinDescription then due to reusability of code we are rewriting  this part
      //   setIsLoading(false);
      //   // setting the data we made in js file the convertedObject and set the data in it
      //   //generally passing the data from objet (pass by refence)
      //   convertObjects(setCoinData, response.data);
      // })
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR OCCURED NO DESCRIPTION FOUND >>>", error);
    });
  return myData;
};
