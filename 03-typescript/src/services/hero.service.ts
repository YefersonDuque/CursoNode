import { herores } from "../data/heroes";

export const finHeroById = (id:number) => {
    return herores.find((hero)=>hero.id === id);
}