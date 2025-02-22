// src/Components/PokemonCard.tsx
import { Pokemon } from "../types/Pokemon";
import PokemonType from "./pokemonType";
import iconWeight from "../assets/images/icon-weight.svg";
import iconRuler from "../assets/images/icon-ruler.svg";
import iconBolt from "../assets/images/icon-bolt.svg";
import "../assets/styles/pokemonCard.scss";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";

interface PokemonCardProps {
  pokemon: Pokemon;
  onSelect: (pokemon: Pokemon) => void;
}

const PokemonCard = ({ pokemon, onSelect }: PokemonCardProps) => {
  const typeName = pokemon.types[0].type.name;
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const formatPokemonId = (pokemonId: number) => {
    if (pokemonId < 10) return `#00${pokemonId}`;
    else if (pokemonId >= 10 && pokemonId < 100) return `#0${pokemonId}`;
    else return `#${pokemonId}`;
  };

  const handleClick = () => {
    // Récupère les détails complets du Pokémon, y compris la description
    fetchPokemonDetails(pokemon.id).then((data) => {
      if (data) {
        onSelect(data);
        // Effectue un scroll fluide vers le haut de la page
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="pokemon">
      <div className={`pokemon__overlay pokemon__overlay--${typeName}`}></div>
      <div className="pokemon__image">
        <img src={pokemonImg} alt={pokemon.name} width="250" height="250" />
      </div>
      <span className="pokemon__number">{formatPokemonId(pokemon.id)}</span>
      <div className="pokemon__type">
        {pokemon.types.map(({ type }) => (
          <PokemonType key={type.name} type={type.name} />
        ))}
      </div>
      {/* Utilise le nom en français s'il est défini */}
      <span className="pokemon__name">{pokemon.name}</span>
      {pokemon.category && (
        <span className="pokemon__category">{pokemon.category}</span>
      )}
      <div className="pokemon__features">
        <div className="pokemon__weight">
          <div>
            <img src={iconWeight} alt="Icon weight" />
            <span>{pokemon.weight}</span>
          </div>
          <span>Poids</span>
        </div>
        <div className="pokemon__height">
          <div>
            <img src={iconRuler} alt="Icon ruler" />
            <span>{pokemon.height}</span>
          </div>
          <span>Taille</span>
        </div>
      </div>
      <button
        className={`pokemon__details pokemon__details--${typeName}`}
        onClick={handleClick}
      >
        <img src={iconBolt} alt="Icon bolt" />
        Voir plus
      </button>
    </div>
  );
};

export default PokemonCard;
