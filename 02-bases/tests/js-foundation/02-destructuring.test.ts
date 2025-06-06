import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/32-destricturing.ts', () => {

    test('Characters should contain Flash, Superman', () => {
        // console.log(characters)

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    const [Flash, Superman] = characters;

    expect(Flash).toBe('Flash');
    expect(Superman).toBe('Superman');

})
