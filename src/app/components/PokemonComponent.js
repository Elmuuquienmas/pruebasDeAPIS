"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function PokemonComponent() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/pikachu"
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (!pokemon) return <div>No se pudo cargar el Pokémon</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={96}
        height={96}
      />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
}
