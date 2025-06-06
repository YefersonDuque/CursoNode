import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory', () => {


    const getUUID = () => '1234';
    const getAge = (birthdate: string) => 30;

    test('buildMakePerson should return a function ', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });

        expect(typeof buildMakePerson({ getUUID, getAge })).toBe('function');
    })

    test('makePerson should return a person', () => {
    
        const makePerson = buildMakePerson({ getUUID, getAge });
        const person = makePerson({ name: 'John Doe', birthdate: '1990-01-01' });

        expect(person).toEqual({
            id: '1234',
            name: 'John Doe',
            birhdate: '1990-01-01',
            age: 30
        });
    })
})