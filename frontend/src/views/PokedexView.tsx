import { useState } from "react"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Pokedex from "../Components/Pokedex"
import { Pokemon } from "../types/Pokemon"
import { pokemonsArray } from "../data"
import SearchPokemon from "../Components/SearchPokemon"

const PokedexView = () => {
    const [pokemonList] = useState<Pokemon[]>(pokemonsArray)

    return (
        <>
            <HeroSection/>
            <SearchPokemon />
            <Pokedex pokemonList={pokemonList}/>
            <Footer/>
        </>
    )
}

export default PokedexView