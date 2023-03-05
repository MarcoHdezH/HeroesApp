import { Heroes } from "../data/Heroes"

export const getHeroByID = (id) => {

    return Heroes.find( hero => hero.id === id)
}
