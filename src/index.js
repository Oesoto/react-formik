import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Permite integrar la aplicación al add-on de Redux Dev tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//El componente Provider permite inyectar el store en la aplicación como prop
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
