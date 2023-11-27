import { SyntheticEvent, useState } from "react";

const SearchPokemon = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        
        console.log(inputValue);
    }

    return (
        <>
            <div className="main-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search Pokemon" value={inputValue} />
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}

export default SearchPokemon;