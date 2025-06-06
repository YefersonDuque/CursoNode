import { getPokemonByid } from './../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {

    test('getPokemonByid should return a pokemon name', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonByid(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    });

    test('Should return an error if pokemon does not exist', async () => {

        const pokemonId = 100000000000;

        try {
            await getPokemonByid(pokemonId);
            expect(true).toBeFalsy();

        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }
    })
});