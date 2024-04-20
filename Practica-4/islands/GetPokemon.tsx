import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

type Pokemon = {
    id: number;
    name: string;
    type: string;
    base_experience: string;
}


const GetPokemon: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        fetchPokemon(name, page);
    }, [name, page]);

    const fetchPokemon = async (name: string, page: number) => {
        const response = await fetch(`https://fernandomur-random-data-72.deno.dev/pokemon?query=${name}&page=${page}`);
        const data = await response.json();
        setPokemon(data);
    };

    return (
        <div class="PokemonDiv">
            <input type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} class="search" />
            {pokemon.map((pokemon) => (
                <div>
                    <h2>{pokemon.name}</h2>
                    <h4>{pokemon.type}</h4>
                    <h4>{pokemon.base_experience}</h4>
                </div>
            ))}      
            <button class="bottonmovilidad1izq" onClick={() => setPage(page-1)}>Previous</button>
            <button class="bottonmovilidad1dcha" onClick={() => setPage(page+1)}>Next</button>
        </div>
    );
};

export default GetPokemon;

