
const buildMakePerson = ({ getAge, getUUID }) => {

    return ({ name, birthdate }) => {

        return {
            id: getUUID(),
            name: name,
            birhdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson,
}