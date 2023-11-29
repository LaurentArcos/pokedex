import { useContext } from "react";
import { PaginationProps } from "../@types/Pokemon";
import { fetchPokemonList } from "../api/fetchPokemonList";
import "../assets/styles/pagination.scss";
import { useTheme } from "../hooks/usetheme";

const Pagination = ({pokemonCount, page, setPage, setPokemonList}: PaginationProps) => {
    const theme = useContext(useTheme);

    const items = [];
    for (let i = 1; i <= Math.ceil(pokemonCount / 9); i++) {
        items.push(i);
    }

    const handleClick = async (item: number) => {
        setPage(item);
        refreshPokemonPage(item);
    }

    const handlePrev = async () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            refreshPokemonPage(newPage);
        }
    }

    const handleNext = async () => {
        if (page < items.length) {
            const newPage = page + 1;
            setPage(newPage);
            refreshPokemonPage(newPage);
        }
    }

    const handleFirstPage = async () => {
        const newPage = 1
        setPage(newPage);
        refreshPokemonPage(newPage);
    }

    const handleLastPage = async () => {
        const newPage = items.length
        setPage(newPage);
        refreshPokemonPage(newPage);
    }

    const refreshPokemonPage = async (newPage: number) => {
        const {pokemonData} = await fetchPokemonList(newPage);
        setPokemonList(await pokemonData);
    }

    return (
        <>
            <nav className="pagination">
                <ul>
                    <li className="prev" onClick={handleFirstPage}>First Page</li>
                    <li className="prev" onClick={handlePrev}>Prev</li>
                    {items.map((item) => {
                        if (
                            item < page - 3 ||
                            item > page + 3
                        ) {
                            return null;
                        }

                        return (
                            <li className={item === page ? 'current' : ''} onClick={() => handleClick(item)}>
                                {item}
                            </li>
                        )
                    })}
                    <li className="next" onClick={handleNext}>Next</li>
                    <li className="next" onClick={handleLastPage}>Last Page</li>
                </ul>
            </nav>
        </>
    )
}
export default Pagination