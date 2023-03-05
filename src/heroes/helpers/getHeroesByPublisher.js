
import { Heroes } from '../data';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics','Marvel Comics'];

    if(!validPublishers.includes(publisher)){
        throw new Error(`${ publisher } is not a valid Publisher`);
    }

    return Heroes.filter( Heroe => Heroe.publisher === publisher);
}

