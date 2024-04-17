import React from 'react';
import {Formik, Field, Form} from 'formik';
import s from '../../App.module.css'

const AddTodoFormik = ({createTextValidationSchema, handleSubmit}) => {
    const SignupSchema = createTextValidationSchema('newTodoText', 1, 50)
    return <Formik initialValues={{newTodoText: ''}}
                   onSubmit={handleSubmit}
                   validationSchema={SignupSchema}>
        {({errors, touched}) => (
            <Form>
                <div>
                    {/*<button type="submit" >*/}
                    {/*    <img src={addButton} alt="" />*/}
                    {/*</button>*/}
                    <Field
                        name='newTodoText'
                        type='text'
                        as='input'
                        // autoFocus
                        placeholder='What needs to be done?'
                        className={s.inputFormik}
                    />

                    {errors.newTodoText && touched.newTodoText ? (
                        <div>{errors.newTodoText}</div>
                    ) : null}

                </div>
            </Form>
        )}
    < /Formik>
}
export default AddTodoFormik;