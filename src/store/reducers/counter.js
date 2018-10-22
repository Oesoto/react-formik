//Importar el objeto con tipos de acciones para usar en el switch
import { actionTypes } from '../actions/actionTypes';

//Un reducer es una función
//Toma como parametros un estado y una acción

//Se define un estado inicial para el reducer
const initialState = {
    counter: 3
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                //... Spread operator. Traer una copia del estado para hacer cambios sobre ella sin tocar directamente el estado original.
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            };
        default:
            return state;
    }
};

export default counterReducer;
