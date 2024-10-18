import React, { useState } from "react";

const CoinDataDesc = ({ heading, desc }) => {
  const [DefineDescription, setDefineDescription] = useState(false);
  //It means that the variable description will hold the text of the job's description, allowing you to use or modify it later in your code.
  let description = desc;
  if (!DefineDescription) {
    description =
      desc.slice(0, 300) +
      ` ... <span style="color: blue; cursor: pointer;">Read More</span>`;
  } else {
    description =
      desc + `<span style="color: blue; cursor: pointer;"> Read Less</span>`;
  }
  return (
    <div className="bg-slate-900  rounded-md mt-4 mb-5">
      <h2 className="text-2xl font-bold p-4">{heading}</h2>
      {desc.length > 300 ? (
        <p
        // to remove unwanted links present in description we use this line elow
          dangerouslySetInnerHTML={{ __html: description }}
          className="font-sm p-4 pt-0"
          onClick={() => setDefineDescription((prevState) => !prevState)}
        />
      ) : (
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="font-sm p-4 pt-0"
        />
      )}
    </div>
  );
};

export default CoinDataDesc;
