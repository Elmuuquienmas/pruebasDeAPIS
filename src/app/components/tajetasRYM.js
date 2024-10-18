import React from "react";

const TarjetaRYM = ({ character }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto rounded-lg mb-2"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {character.name}
      </h3>
      <p className="text-gray-600 text-center">Status: {character.status}</p>
      <p className="text-gray-600 text-center">Species: {character.species}</p>
      <p className="text-gray-600 text-center">Gender: {character.gender}</p>
    </div>
  );
};

export default TarjetaRYM;
