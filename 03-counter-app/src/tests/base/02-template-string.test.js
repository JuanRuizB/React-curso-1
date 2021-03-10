import {getSaludo} from '../../base/02-template-string';


describe('Pruebas en 01-template-string.test.js', () => {

    test('getSaludo debe de retornar Hola Juan', () => {
        
        const nombre = 'Juan';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre + '!');



    })


    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!' );


    })
    
    
})



