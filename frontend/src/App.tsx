import Footer from "./Components/HeroSection"
import HeroSection from "./Components/HeroSection"
import Pokedex from "./Components/Pokedex"
import { pokemonsArray } from "./data"

const App = () => {
  return (
    <>
      <HeroSection/>
      <Pokedex pokemonList={pokemonsArray}/>
      <Footer/>
    </>
  )
}

export default App
