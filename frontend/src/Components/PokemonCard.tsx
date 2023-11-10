import { Pokemon } from "../types/Pokemon"
import PokemonType from "./pokemonType"
import iconWeight from "../assets/images/icon-weight.svg"
import iconRuler from "../assets/images/icon-ruler.svg"
import iconBolt from "../assets/images/icon-bolt.svg"
import "../assets/styles/pokemonCard.scss"
import { useNavigate } from "react-router-dom"

const PokemonCard = (props: {pokemon: Pokemon}) => {
    const navigate = useNavigate()
    const typeName = props.pokemon.types[0].type.name
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`

    const formatPokemonId = (pokemonId: number) => {
        if (pokemonId < 10) return `#00${pokemonId}`
        else if (pokemonId >= 10 && pokemonId < 100) return `#0${pokemonId}`
        else return `#${pokemonId}`
    }

    const handleClick = () => {
        navigate(`/pokemon/${props.pokemon.id}`)
    }

    return (
        <div className="pokemon">
            <div className={`pokemon__overlay pokemon__overlay--${typeName}`}></div>
            <div className="pokemon__image">
                <img src={pokemonImg} alt={props.pokemon.name} width="250" height="250" />
            </div>
            <span className="pokemon__number">
                {formatPokemonId(props.pokemon.id)}
            </span>
            <div className="pokemon__type">
                {props.pokemon.types.map(({type}) => (
                    <PokemonType type={type.name} />
                ))}
            </div>
            <span className="pokemon__name">{props.pokemon.name}</span>
            <div className="pokemon__features">
                <div className="pokemon__weight">
                    <div>
                        <img src={iconWeight} alt="Icon weight" />
                        <span>{props.pokemon.weight}</span>
                    </div>
                    <span>Weight</span>
                </div>
                <div className="pokemon__height">
                    <div>
                        <img src={iconRuler} alt="Icon ruler" />
                        <span>{props.pokemon.height}</span>
                    </div>
                    <span>Height</span>
                </div>
            </div>
            <button className={`pokemon__details pokemon__details--${typeName}`} onClick={handleClick}>
                <img src={iconBolt} alt="Icon bolt" />
                More details
            </button>
        </div>
    )
}

export default PokemonCard