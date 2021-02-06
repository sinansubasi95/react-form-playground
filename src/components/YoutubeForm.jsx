import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import *  as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    }
}
  
const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
});

function YoutubeForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field 
                        type="text"
                        id="name"
                        name="name"
                    />
                    <ErrorMessage name="name" component={TextError}>
                        {(errorMsg) => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                    />
                    <ErrorMessage name="email"/>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field
                        type="text"
                        id="channel"
                        name="channel"
                        placeholder="Youtube channel name"
                    />
                    <ErrorMessage name="channel"/>
                </div>

                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" id="comments" name="comments" />
                </div>

                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {
                            (props) => {
                                const { field, form, meta } = props;
                                console.log("Render props", props);
                                return (
                                    <div>
                                        <input id="address" {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                );
                            }
                        }
                    </Field>
                </div>

                <div className="form-control">
                    <label htmlFor="facebook">Facebook profile</label>
                    {/* name is imported because we are dealing with nested object - social.facebook */}
                    <Field type="text" id="facebook" name="social.facebook" />
                </div>

                
                <div className="form-control">
                    <label htmlFor="twitter">Twitter profile</label>
                    {/* name is imported because we are dealing with nested object - social.twitter */}
                    <Field type="text" id="twitter" name="social.twitter" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;