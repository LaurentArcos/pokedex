import { PokedexProps, Pokemon } from "../@types/Pokemon"
import PokemonCard from "./PokemonCard"
import "../assets/styles/pokedex.scss"
import Pagination from "./Pagination"

const Pokedex = (props: PokedexProps) => {
    return (
        <div className="pokedex">
            <div className="main-container">
                <div className="pokedex__list">
                    {props.pokemonList.map((pokemon: Pokemon) => (
                        <PokemonCard pokemon={pokemon} />
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

export default Pokedex