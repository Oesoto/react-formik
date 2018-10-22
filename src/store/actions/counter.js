//Aquí se declaran los action creators. Cada action creator devolverá un objeto que contiene internamente el tipo de acción y el payload con los datos necesarios para alterar el estado según esa acción llamada

import { actionTypes } from './actionTypes';
console.log(' actionTypes', actionTypes);

//Action Creator para increment
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

//Action Creator para decrement
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

//Action Creator para add
export const add = value => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

//Action Creator para subtract
export const subtract = value => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};
