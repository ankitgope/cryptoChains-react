// This will make the date in organise way in format
export const CoinDateConvertion = (number) => {
  const newDate = new Date(number);
  return (
    newDate.getDate() + "/" + newDate.getMonth() 
  );
};
