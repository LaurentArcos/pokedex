// src/api/fetchPokemonDetails.ts
import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonDetails = async (pokemon: string | number) => {
  try {
    // Récupération des infos principales via fetchPokemon
    const data = await fetchPokemon(pokemon);
    if (!data) return null;

    // Récupération des infos de species pour les traductions
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
    const speciesData = await speciesResponse.json();

    // Récupération de la description en français
    const descriptionEntry = speciesData.flavor_text_entries.find(
      (entry: any) => entry.language.name === "fr"
    );
    const description = descriptionEntry
      ? descriptionEntry.flavor_text.replace(/\n|\f/g, " ")
      : "Description non disponible";

    // Récupération du nom en français
    const nameEntry = speciesData.names.find(
      (entry: any) => entry.language.name === "fr"
    );
    const frenchName = nameEntry ? nameEntry.name : data.name;

    // Récupération de la catégorie (genera) en français
    const generaEntry = speciesData.genera.find(
      (entry: any) => entry.language.name === "fr"
    );
    const category = generaEntry ? generaEntry.genus : "Catégorie non disponible";

    // Récupération de la couleur depuis speciesData.color
    const color = speciesData.color?.name || "#ffffff";

    // Retourne les données combinées en remplaçant le nom par sa version française
    return { ...data, description, name: frenchName, category, color };
  } catch (error) {
    console.error("Erreur lors de la récupération des détails du Pokémon:", error);
    return null;
  }
};
