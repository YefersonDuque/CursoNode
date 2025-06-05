"use strict";
var _a;
const herores = [
    {
        id: 1,
        name: 'Iroman',
        ower: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        ower: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        ower: 'DC'
    },
];
const finHeroById = (id) => {
    return herores.find((hero) => hero.id === id);
};
const hero = finHeroById(4);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found');
