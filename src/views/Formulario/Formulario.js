import React, { Component } from 'react';
//Importar elementos de Formik
//withFormik crea un elemento de orden mayor
import { withFormik, Form, Field } from 'formik';
//yup ayuda a la validación de formularios
// import Yup from 'yup';

const Formulario = ({ values, handleReset, handleChange, handleSubmit }) => (
    // <form onSubmit={handleSubmit}>
    //     <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
    //     <input type="Password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
    //     <button>Submit</button>
    // </form>

    //El componente form me evita tener que especificar el handleSubmit
    <Form>
        {/* Usando el componente Field no debo especificar value y onChange. Automaticamente se toman */}
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <label>
            <Field type="checkbox" name="newsletter" checked={values.newsletter} />
            Join our newsletter
        </label>
        <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
        <button type="button" onClick={handleReset}>
            Hola
        </button>
        <button type="submit">Submit</button>
    </Form>
);

const FormikApp = withFormik({
    //Object destructuring
    //{email} es una propiedad del mismo nombre tomada del objeto Props
    mapPropsToValues({ email, password, newsletter, plan }) {
        return {
            email: email || '',
            password: password || '',
            newsletter: newsletter || true,
            plan: plan || 'free'
        };
    },
    handleSubmit(values, bag) {
        //Ejecuto el submitHandler personalizado definido en el componente contenedor
        bag.props.onSubmit(values);
    }
})(Formulario);

export default FormikApp;
