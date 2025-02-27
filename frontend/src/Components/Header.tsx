import LogoPokemon from "/src/assets/images/logo-pokemon.svg"
import '../assets/styles/layouts/header.scss'

const Header = () => {
    return (
        <header className="header">
            <img src={LogoPokemon} className="main-img" alt="Logo Pokemon" />
        </header>
    )
}

export default Header