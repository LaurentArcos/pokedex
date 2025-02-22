// src/Components/HeroSection.tsx
import { useEffect, useState } from "react";
import Header from "./Header";
import "../assets/styles/heroSection.scss";
import PokemonType from "./pokemonType";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";
import iconWeight from "../assets/images/icon-weight.svg";
import iconRuler from "../assets/images/icon-ruler.svg";

interface HeroSectionProps {
  selectedPokemon: any;
  setSelectedPokemon: (pokemon: any) => void;
}

const HeroSection = ({ selectedPokemon, setSelectedPokemon }: HeroSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Si aucun Pokémon n'est sélectionné, on en choisit un aléatoirement (entre 1 et 1304)
    if (!selectedPokemon) {
      const randomPokemonId = Math.floor(Math.random() * 1304) + 1;
      fetchPokemonDetails(randomPokemonId).then((data) => {
        if (data) {
          setSelectedPokemon(data);
          setIsLoading(false);
        }
      });
    } else {
      setIsLoading(false);
    }
  }, [selectedPokemon, setSelectedPokemon]);

  if (isLoading || !selectedPokemon) {
    return (
      <div className="hero-section">
        <div className="main-container">
          <div className="loader">Loading Pokémon...</div>
        </div>
      </div>
    );
  }

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${selectedPokemon.id}.png`;
  const backgroundColor = selectedPokemon.color;

  return (
    <div className="hero-section" style={{ background: backgroundColor }}>
      <div className="main-container">
        <Header />
        <div className="hero-content">
          <div className="hero-data">
            <span className="hero-data-number">
              {`#${selectedPokemon.id.toString().padStart(3, "0")}`}
            </span>
            <div className="hero-data-types">
              {selectedPokemon.types.map((item: any) => (
                <PokemonType key={item.type.name} type={item.type.name} />
              ))}
            </div>
            <h1 className="hero-data-name">{selectedPokemon.name}</h1>
            {selectedPokemon.category && (
              <span className="hero-data-category">
                {selectedPokemon.category}
              </span>
            )}
            <p className="hero-data-description">{selectedPokemon.description}</p>
            <div className="hero-data-features">
              <div className="hero-feature">
                <div className="feature-value">
                  <img src={iconWeight} alt="Icon weight" />
                  <span>{selectedPokemon.weight}</span>
                </div>
                <span className="feature-label">Poids</span>
              </div>
              <div className="hero-feature">
                <div className="feature-value">
                  <img src={iconRuler} alt="Icon ruler" />
                  <span>{selectedPokemon.height}</span>
                </div>
                <span className="feature-label">Taille</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={pokemonImg} alt={selectedPokemon.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
