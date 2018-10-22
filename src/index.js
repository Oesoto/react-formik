import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//Redux-Thunk - Permitirá hacer llamadas asincronas con Redux
import thunk from 'redux-thunk';

//Importar cada uno de los reducers
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//La función combineReducers recibe un objeto con cada uno de los reducers
//para crear un único reducer
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//Función que se le envía al middleware
//Hace log de la acción enviada y del estado actualizado
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        };
    };
};

//Permite integrar la aplicación al add-on de Redux Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Se crea un store con el reducer importado y los middlewares que se quieran agregar
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

//El componente Provider permite inyectar el store en la aplicación como prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
