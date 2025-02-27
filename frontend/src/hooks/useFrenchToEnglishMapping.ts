// src/hooks/useFrenchToEnglishMapping.ts
import { useEffect, useState } from "react";

export const useFrenchToEnglishMapping = () => {
  const [mapping, setMapping] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buildMapping = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=1300");
        const data = await response.json();
        const speciesList = data.results; // Chaque élément contient un 'name' (anglais) et un 'url'
        
        const mappingEntries = await Promise.all(
          speciesList.map(async (species: { name: string; url: string }) => {
            try {
              const speciesResponse = await fetch(species.url);
              const speciesData = await speciesResponse.json();
              // On extrait le nom français depuis speciesData.names
              const nameEntry = speciesData.names.find((entry: any) => entry.language.name === "fr");
              const frenchName = nameEntry ? nameEntry.name : null;
              if (frenchName) {
                // Normalisation pour faciliter la recherche
                const normalizedFrench = frenchName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                return [normalizedFrench, species.name]; // species.name est le nom anglais
              }
              return null;
            } catch (error) {
              console.error("Erreur pour l'espèce", species.name, error);
              return null;
            }
          })
        );
        const mappingObj: { [key: string]: string } = {};
        mappingEntries.forEach((entry) => {
          if (entry) {
            mappingObj[entry[0]] = entry[1];
          }
        });
        setMapping(mappingObj);
      } catch (error) {
        console.error("Erreur lors de la construction du mapping", error);
      } finally {
        setLoading(false);
      }
    };
    buildMapping();
  }, []);

  return { mapping, loading };
};
