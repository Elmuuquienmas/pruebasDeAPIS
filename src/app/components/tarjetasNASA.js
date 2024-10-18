import React from "react";

const tarjetasNASA = ({ title, explanation, url }) => {
  return (
    <div className="border rounded-lg p-4 text-center shadow-md m-4 max-w-xs bg-white text-black">
      <img src={url} alt={title} className="w-full h-auto rounded-lg mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700">{explanation}</p>
    </div>
  );
};

export default tarjetasNASA;
