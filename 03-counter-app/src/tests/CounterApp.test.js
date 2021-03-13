import { shallow } from "enzyme"
import CounterApp from "../CounterApp"


describe('Pruebas en CounterApp', () => {

    let wrapper = shallow( <CounterApp/> ); //Mala practica pero asi tenemos las referencias de VS

    beforeEach( () => { //se ejecuta justo antes de cada prueba.

        wrapper = shallow( <CounterApp/> );

    });
    
    test('Debe de mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar el valor por defecto de 100', () => {

        const valueDefault = 100;
        const wrapper = shallow(
            <CounterApp value={valueDefault} />
        );

        const value = wrapper.find('h2').text().trim();
        expect( value ).toBe( valueDefault.toString() );

    });
    
    test('Debe de incrementar con el boton de +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect( value ).toBe('11');

    });


    test('Debe de decrementar con el boton de -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect( value ).toBe('9');

    });


    test('Debe de colocar el valor por defecto con el btn reset', () => {
      
        const wrapper = shallow(
            <CounterApp value={105} />
        );  

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const value = wrapper.find('h2').text().trim();

        expect( value ).toBe('105');



    })
    

})
