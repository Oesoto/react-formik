//Importar el objeto con tipos de acciones para usar en el switch
import { actionTypes } from '../actions/actionTypes';

//Un reducer es una función
//Toma como parametros un estado y una acción

//Se define un estado inicial para el reducer
const initialState = {
    results: [] //Array de resultados. Cada uno con ID y valor
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
                //Concat es una forma inmutable de actualizar un arreglo sin afectar el original

                //action.result trae el valor de la suma. Esta viene desde otra parte del estado y no se puede acceder desde este reducer. Es pasada como parámetro
            };
        case actionTypes.DELETE_RESULT:
            //Eliminar un resultado del arreglo de resultados
            //La función FILTER del arreglo retorna una copia del mismo
            const updatedArray = state.results.filter(result => result.id !== action.resultElementID);
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
};

export default resultReducer;
