import { Heroes } from "../data";

export const getHeroesByName = (name='') => {

    name = name.toLocaleLowerCase().trim();

    if( name.length ===0 ) return [];

    return Heroes.filter(
        hero=> hero.superhero.toLocaleLowerCase().includes(name)
    );

}

