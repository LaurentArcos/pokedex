import React from "react";
import { PaginationProps } from "../@types/Pokemon";
import { fetchPokemonList } from "../api/fetchPokemonList";

const Pagination = ({pokemonCount, setPage, setPokemonList}: PaginationProps) => {
    const items = [];
    for (let i = 1; i <= Math.ceil(pokemonCount / 9); i++) {
        items.push(i);
    }

    const handleClick = async (e: React.MouseEvent) => {
        console.log('CLICK')
        const page = Number(e.currentTarget.textContent);
        const {pokemonData} = await fetchPokemonList(page);
        setPage(page);
        setPokemonList(await pokemonData);
    }

    return (
        <>
            <nav className="pagination">
                <ul>
                    {items.map((item) => (
                        <li onClick={handleClick}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination