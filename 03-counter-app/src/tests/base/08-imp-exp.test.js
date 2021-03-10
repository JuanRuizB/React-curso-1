import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funcionaes de heroes.js', () => {
    
    test('Debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData )

    })


    test('Debe de retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined )

    })

    //debe de retornar un array con los heroes de DC 
    // owner 
    // toEqual al arreglo filtrado

    test('debe de retornar un array con los heroes de DC', () => {
        
        const owner = 'DC'

        const heroeData = heroes.filter( h => h.owner === owner );

        const heroe = getHeroesByOwner( owner );

        expect( heroe ).toEqual( heroeData );

    })

    // deve de retornar un arreglo con los heroes de Marvel
    // length = 2 toBe
    
    test('deve de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel'

        // const heroeData = heroes.filter( h => h.owner === owner );

        const length = 2;

        const heroe = getHeroesByOwner( owner );

        expect( heroe.length ).toBe( length );

    })

})
