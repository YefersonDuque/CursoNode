
interface buildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}


export const buildMakePerson = ({ getAge, getUUID }: buildMakePersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUUID(),
            name: name,
            birhdate: birthdate,
            age: getAge(birthdate)
        }
    }
}
