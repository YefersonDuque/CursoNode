const {http} = require('../plugins')

const getPokemonByid = async(id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await http.get(url);

    // throw new Error('Pokemon no existe');
    return pokemon.name;
}
 
module.exports = getPokemonByid;  