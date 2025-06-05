import { http } from '../plugins';

export const getPokemonByid = async (id: number|string):Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    // throw new Error('Pokemon no existe');
    return pokemon.name;
}
