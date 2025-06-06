import { http } from '../plugins';

export const getPokemonByid = async (id: number | string): Promise<string> => {

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;
    }
    catch (error) {

        throw `Pokemon not found with id ${id}`;
    }
}
