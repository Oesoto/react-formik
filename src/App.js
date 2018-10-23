import React, { Component } from 'react';
import FormikApp from './views/Formulario/Formulario';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FormikApp email="foo@bar.com" />
            </div>
        );
    }
}

export default App;
