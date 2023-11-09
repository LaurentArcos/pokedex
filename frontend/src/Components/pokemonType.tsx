import '../assets/styles/pokemonType.scss'

type PokemonTypeProps = {
  type: string
}

const PokemonType = (props: PokemonTypeProps) => {
  const imgUrl = new URL(
      `/src/assets/images/pokemonTypes/${props.type}.svg`,
      import.meta.url
  ).href

  return (
      <button className={`type--${props.type}`}>
          <img src={imgUrl} alt={props.type} />
          {props.type}
      </button>
  )
}

export default PokemonType