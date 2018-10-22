//Aquí se declaran los action creators. Cada action creator devolverá un objeto que contiene internamente el tipo de acción y el payload con los datos necesarios para alterar el estado según esa acción llamada

import { actionTypes } from './actionTypes';

//Action creator que se usará en storeResult
export const saveResult = res => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

//Action Creator para Store Result
export const storeResult = res => {
    //Se retorna una función y dentro de ella se puede ejecutar
    //código asincrono gracias a redux-thunk
    //También tengo acceso al estado de Redux
    return (dispatch, getState) => {
        //Aquí se podría hacer una llamada a un servicio web
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(' oldCounter', oldCounter);
            //Desde aquí se puede despachar la acción
            //Se despacha un action creator sincrono
            dispatch(saveResult(res));
        }, 2000);
    };
};

//Action Creator para Delete result
export const deleteResult = resID => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementID: resID
    };
};
