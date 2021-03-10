import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones.test.js', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest )

    })

    //getUsuarioActivo debe evaluar un objeto
    test('getUsuarioActivo debe evaluar un objeto', () => {
        
        const userTest = 'El_Papi1502'
    

        const {username} = getUsuarioActivo(userTest);

        expect(username).toEqual(userTest)

    })
    
    

})
