// src/Components/Pokedex.tsx
import { PokedexProps, Pokemon } from "../@types/Pokemon"
import PokemonCard from "./PokemonCard"
import "../assets/styles/pokedex.scss"
import Pagination from "./Pagination"

interface ExtendedPokedexProps extends PokedexProps {
  onSelect: (pokemon: Pokemon) => void;
}

const Pokedex = (props: ExtendedPokedexProps) => {
    return (
        <div className="pokedex">
            <div className="main-container">
                <div className="pokedex__list">
                    {props.pokemonList.map((pokemon: Pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} onSelect={props.onSelect} />
                    ))}
                </div>
                <Pagination 
                    setPokemonList={props.setPokemonList}
                    pokemonCount={props.pokemonCount} 
                    page={props.page}
                    setPage={props.setPage} />
            </div>
        </div>
    )
}

export default Pokedex;
