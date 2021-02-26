import {getHeroeByID} from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout(() => {
//         //Tarea
//         const res = getHeroeByID(2);
//         resolve(res);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000)

// } );

// promesa.then( (heroe) => {
//     console.log(heroe)
// } )
// .catch(err => console.warn(err));

const getHeroeByIDAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
    
        setTimeout(() => {
            //Tarea
            const res = getHeroeByID( id );
            res === undefined ? reject('No se pudo encontrar el héroe') : resolve(res);
            
        }, 2000)
    
    } );
    
}

getHeroeByIDAsync(1)
    .then( console.log )
    .catch( console.warn );
    // .catch(err => console.warn(err));