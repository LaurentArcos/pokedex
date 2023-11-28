import { Pokemon } from "../@types/Pokemon"
import PokemonCard from "./PokemonCard"
import "../assets/styles/pokedex.scss"

const Pokedex = (props: { pokemonList: Pokemon[] }) => {
    console.log(props.pokemonList)

    return (
        <div className="pokedex">
            <div className="main-container">
                <div className="pokedex__list">
                    {props.pokemonList.map((pokemon: Pokemon) => (
                        <PokemonCard pokemon={pokemon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pokedex