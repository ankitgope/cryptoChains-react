import React from "react";

const DashboardList = ({ description, heading }) => {
  
  return (
    <div className="p-4 bg-slate-900 border border-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-300 mb-2">{heading}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default DashboardList;
