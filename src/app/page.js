"use client";

import { useState, useEffect } from "react";
import { getCharacters } from "../app/components/rickandmorty"; // funcion de la api de Rick and Morty
import TarjetaRYM from "../app/components/tajetasRYM"; // funcion que nos da una tarjeta en la que mostraremos los personajes de R y M
import MapComponent from "../app/components/MapComponent"; // funcion que nos regresa una ventana de google maps
import { getNasaPictureOfTheDay } from "../app/components/nasaApi"; // función de la API de la NASA
import NasaCard from "../app/components/tarjetasNASA"; // Funcion que nos da el componente de tarjeta de la NASA

export default function Page() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nasaData, setNasaData] = useState(null);
  const [nasaLoading, setNasaLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchNasaData = async () => {
      const data = await getNasaPictureOfTheDay();
      setNasaData(data);
      setNasaLoading(false);
    };

    fetchNasaData();
  }, []);

  if (loading || nasaLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        Pruebas de API clase del profe Vidal
      </h1>
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-1/3 p-2 border-r">
          <h2 className="text-xl font-bold mb-2">Personajes de Rick & Morty</h2>
          <div className="grid grid-cols-2 gap-4">
            {characters.map((character) => (
              <TarjetaRYM key={character.id} character={character} />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-1/3 p-2 border-r">
          <h2 className="text-xl font-bold mb-2">Mapa de Google</h2>
          <MapComponent />
        </div>
        <div className="flex flex-col w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2 text-white">
            Foto del dia de la NASA
          </h2>
          {nasaData ? (
            <div className="flex justify-center">
              {" "}
              <NasaCard
                title={nasaData.title}
                explanation={nasaData.explanation}
                url={nasaData.url}
              />
            </div>
          ) : (
            <div className="text-gray-500">
              Error al cargar la imagen de la NASA.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
