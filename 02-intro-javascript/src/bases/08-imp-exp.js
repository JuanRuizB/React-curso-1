// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

export const getHeroeByID = (id) => heroes.find(( heroe ) => heroe.id === id);

// console.log(getHeroeByID(2));

export const getHeroesByOwner = (owner) => heroes.filter(( heroe ) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));