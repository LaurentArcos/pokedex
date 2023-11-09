import LogoPokemon from "/src/assets/images/logo-pokemon.svg"
import '../assets/styles/layouts/header.scss'

const Header = () => {
    return (
        <header className="header">
            <img src={LogoPokemon} alt="Logo Pokemon" />
        </header>
    )
}

export default Header