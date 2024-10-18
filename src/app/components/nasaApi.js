const API_KEY = "v9oFJZNfNiU0N5sTB8ObntLmvYElRJGtnDAv2KiP";
const API_URL = "https://api.nasa.gov/planetary/apod";

export const getNasaPictureOfTheDay = async () => {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Error al obtener la imagen de la NASA");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
