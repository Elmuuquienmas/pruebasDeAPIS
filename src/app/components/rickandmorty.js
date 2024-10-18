export const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Error fetching data from Rick and Morty API");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
