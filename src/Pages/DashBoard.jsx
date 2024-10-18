import React from "react";
import DashboardList from "../Components/Dashboard/DashboardListCard/DashboardList";

const DashBoard = () => {
  const newUpdate = [
    {
      heading: "Sign Up feature commimg soon",
      description:
        "We're adding Authentication Feature  to improve the user experience .",
    },
    {
      heading: "Bookmark feature commimg soon",
      description:
        "We're adding Bookmark feature  to improve the user experience .",
    },
    {
      heading: "Compare Cryptocurrency feature commimg soon",
      description:
        "We're adding Compare Cryptocurrency Feature  to improve the user experience .",
    },
  ];
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {newUpdate.map((update, index) => (
        <DashboardList
          key={index}
          heading={update.heading}
          description={update.description}
        />
      ))}
    </div>
  );
};

export default DashBoard;
