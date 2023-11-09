import { useState } from "react"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Pokedex from "../Components/Pokedex"
import { Pokemon } from "../types/Pokemon"
import { pokemonsArray } from "../data"

const PokedexView = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>(pokemonsArray)

    return (
        <>
            <HeroSection/>
            <Pokedex pokemonList={pokemonList}/>
            <Footer/>
        </>
    )
}

export default PokedexView