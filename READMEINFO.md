**Search Section, Pagination, APi calling part in 2nd part**
*Header/Footer:* Navy Blue background with Electric Blue accents.
*Buttons:* Bright Green for call-to-action buttons, Teal for secondary buttons.
*Text:* Dark Gray for primary text, Light Gray for secondary text, and White for text on dark backgrounds.
*Icons/Highlights:* Gold and Silver for icons, highlights, and important elements.

Action Buttons-->
Submit a form
Save changes
Purchase or Checkout

Secondary Buttons-->
Cancel an action
Edit an entry
View more details

Primary Text:

text-2xl: Large font size.
font-bold: Bold font weight.
text-gray-dark: Dark gray color (custom color defined in tailwind.config.js).
mb-4: Margin bottom for spacing.

Secondary Text:

text-xl: Medium-large font size for subtitles.
font-semibold: Semi-bold font weight.
text-gray-700: Slightly lighter gray color for differentiation.
mb-2: Margin bottom for spacing.
text-base: Base font size for regular secondary text.
text-gray-600: Light gray color for secondary text.
mb-4: Margin bottom for spacing.
Tertiary Text:

text-sm: Smaller font size.
text-gray-500: Light gray color for tertiary text.
White Text on Dark Background:

bg-gray-dark: Dark background color (custom color defined in tailwind.config.js).
p-4: Padding for spacing inside the container.
text-white: White text color for high contrast on the dark background.
-------------------------------------------------------------
Headlines or Titles:

Main headings of sections or pages (e.g., "Welcome to CryptoChains", "Our Services", "Contact Us").
Key Information:

Main content or core information that users need to see first (e.g., product descriptions, primary instructions, important announcements).
Calls to Action (CTA):

Text in buttons or links that encourage users to take the primary action (e.g., "Sign Up", "Get Started", "Learn More").
Prominent Labels:

Labels or text in forms that are crucial for user interaction (e.g., "Username", "Password", "Search").
-------------------------------------------------------------
Subheadings:

Text that helps organize content under main headings (e.g., "Features", "Benefits", "Pricing Details").
Descriptive Text:

Additional details or explanations that support the primary content (e.g., product details, service descriptions).
Captions:

Text that provides explanations or context for images, graphs, or charts.
Form Labels and Instructions:

Labels and help text that guide users in filling out forms (e.g., "Email Address", "Enter your name").
Supplementary Information:

Extra details that are not critical but add value (e.g., FAQs, product specifications).
Metadata:

Information like dates, author names, or other contextual data (e.g., "Published on July 23, 2024", "By John Doe").

API-->
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false



**Important**
*GridItems.jsx*
**we can give a hover effect like this also**
const isActive = price_change_percentage_24h> 0 ? 'hover:border-green-600':'hover:border-red-600'

*String Function* 
toFixed -> gives a value upto second decimal place 
toLocalString -> give coma( , ) in between 

**Search Section**
In here we want that whenever my search gets updated my page shows filter my coins
-- For that we need this search state to global  && it will reflect inside my dashBoard only
-- passing the value in main function

**---------------------------------------------------------**
**2nd Part**
*CoinDescription*
we are removing the api calls from here because we are reusing the api call reptative  time so we are making it in another *specific function file* in a js file  for reusability 

So Basically we are removing this part 
 axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        // setting the data we made in js file the convertedObject and set the data in it
        //generally passing the data from objet (pass by refence)
        convertObjects(setCoinData, response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });

and making a new function name CoinDescriptionApi.js for code reusability 

and we are removing this part as well
 axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      )
      .then((response) => {
        console.log("prices >>>", response.data);
      })
      .catch((error) => {
        console.log("No prices found");
      })
      .finally(() => {
        console.log("Prices code run succesfully");
      });
  }, [id]);
  

**---------------------------------------------------------------------------**
Compare.jsx
import React, { useState, useEffect } from "react";
import CoinsSelect from "../Components/ComparePageComponents/CoinsSelect";
import BasicSelect from "../Components/DaysBasicSelect/BasicSelect";
import { coinObjects } from "../Functions/CoinObjects";
import { SettingChartdata } from "../Functions/SettingChartdata";
import { getCoinDescriptionApi } from "../Functions/getCoinDescriptionApi";
import { getCoinPrices } from "../Functions/getCoinPrices";
import Loader from "../Components/Common Components/Loader";
import ListItems from "../Components/Dashboard/List/ListItems";
const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  //To fetch he data we are using this statte
  const [crypto1Data, setCrypto1data] = useState({});
  const [crypto2Data, setCrypto2data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      setIsLoading(true);
      const data1 = await getCoinDescriptionApi(crypto1); // Fetch coin description data
      const data2 = await getCoinDescriptionApi(crypto2); // Fetch coin description data
      if (data1) {
        coinObjects(setCrypto1data, data1); // Process and set coin data
      }
      if (data2) {
        coinObjects(setCrypto2data, data2); // Process and set coin data
      }
      // WE NEED THE PRICES AFTER THE DATA  (we ge the data  in here coinObjects(setCrypto1data, data1);)
      if (data1 && data2) {
        const prices1 = await getCoinPrices(crypto1, days, "prices"); // Fetch coin prices we dont have id we will use the target coin
        const prices2 = await getCoinPrices(crypto2, days, "prices"); // Fetch coin prices we dont have id we will use the target coin
        if (prices1.length > 0 && prices2.length > 0) {
          console.log("both Prices fetched", prices1, prices2);
          // SettingChartdata(setChart, prices); // Set chart data
          setIsLoading(false); // Set loading to false after data is loaded
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors that occur during fetching
      setIsLoading(false); // Ensure loading is stopped even if there's an error
    }
    
  }
  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };
  const handleCoinChange = async (e, isCoin2) => {
    try {
      setIsLoading(true);
      if (isCoin2) {
        setCrypto2(e.target.value);
        console.log("coin 2");
        const data = await getCoinDescriptionApi(e.target.value);
         if (data) {
        coinObjects(setCrypto2data, data); }// Process and set coin data
        // Optimizing code the  below code as **it is saving the priceses in the state and we dont want that**
        // const prices = await getCoinPrices(e.target.value, days, "prices"); // Fetch coin prices we dont have id we will use the target coin
        // if (prices) {
        //   // SettingChartdata(setChart, prices); // Set chart data
        //   setIsLoading(false); // Set loading to false after data is loaded
        // }
        //}
      } else {
        setCrypto1(e.target.value);
        console.log("coin 1");
        const data = await getCoinDescriptionApi(e.target.value); // Fetch coin description data
         if (data) {
        coinObjects(setCrypto1data, data);} // Process and set coin data
        // const prices = await getCoinPrices(e.target.value, days, "prices"); // Fetch coin prices we dont have id we will use the target coin
        // if (prices) {
        //   // SettingChartdata(setChart, prices); // Set chart data
        //   setIsLoading(false); // Set loading to false after data is loaded
        // }
        // }
      }
      // making our lives simple we are and clean code
      //fetching the price out side the if  as we have to call any way
      const prices1 = await getCoinPrices(crypto1, days, "prices"); // Fetch coin prices we dont have id we will use the target coin
  
      const prices2 = await getCoinPrices(crypto2, days, "prices"); // Fetch coin prices we dont have id we will use the target coin
      console.log("Prices updated", prices1, prices2); // Log successful price fetch
        setIsLoading(false);
    } catch (error) {
      console.error("Error updating coins:", error); // Log any errors that occur during coin change
      setIsLoading(false); // Ensure loading is stopped even if there's an error
    }
   
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-between container mx-auto px-4 py-6">
            <CoinsSelect
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <BasicSelect days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="mt-5 mb-6">
            <ListItems coinuu={crypto1Data} />
          </div>
          <div className="mt-5 mb-6">
            <ListItems coinuu={crypto2Data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Compare;



**GetData ()**

async function getData() {
    
    setIsLoading(true);

    // Fetch coin description data for the selected cryptocurrencies
    const data1 = await getCoinDescriptionApi(crypto1);
    const data2 = await getCoinDescriptionApi(crypto2);

    // Process and set coin description data
    coinObjects(setCrypto1data, data1);
    coinObjects(setCrypto2data, data2);

    // If both coin descriptions are fetched, fetch their prices
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, "prices"); // priceType
      const prices2 = await getCoinPrices(crypto2, days, "prices");// priceType

      // If prices are fetched, set loading to false
      if (prices1.length > 0 && prices2.length > 0) {
        console.log("both Prices fetched", prices1, prices2);
        setIsLoading(false);
      }
    }
  }

