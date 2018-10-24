import React, { Component } from 'react';
import FormikApp from './views/Formulario/Formulario';
import FormularioBasic from './views/Formulario/FormularioBasic';

class App extends Component {
    myCustomSubmitHanlder = values => {
        console.log('submitHandler');

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // setSubmitting(false);
        }, 400);
    };

    render() {
        return (
            <div className="App">
                {/* <FormikApp email="foo@bar.com" /> */}
                <FormikApp email="foo@bar.com" onSubmit={this.myCustomSubmitHanlder} />
                {/* <FormularioBasic email="foo@bar.com" onSubmit={this.submitHandler} /> */}
            </div>
        );
    }
}

export default App;
