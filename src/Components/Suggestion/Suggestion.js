import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import './Suggestion.css'


function Suggestion() {

    const initialValues = {
        name: '',
        email: '',
        age: '',
        gender: '',
        checked: [],
    }

    const validationSchema = Yup.object({
        name: Yup.string().max(10, 'Must be 10 characters or less').required('Name is Required!!!'),
        email: Yup.string().email('Input valid email format').required('Email is Required!!'),
        age: Yup.number().required('Age is Required!!!'),
        gender: Yup.string().required('Gender is Required')
    })

    const [data, setData] = useState([])
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('')

    console.log(data)
    
    const list = () => {
        setData((oldData) => {
            return (
                [...oldData, ({ id: Date.now(), name, email, age, gender })]
            )
        })
    }
    const onSubmit = (values, onSubmitProps) => {
        console.log(values.name)
        // onSubmitProps.resetForm()
        setname(values.name)
        setemail(values.email)
        setage(values.age)
        setgender(values.gender)
        list()
    }
    
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label>Name</label>
                        <Field type='text' name='name' label='name' autoComplete='off' />
                        <ErrorMessage name='name'>{color => <div style={{ color: 'red' }}>{color}</div>}</ErrorMessage>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field type='email' name='email' label='email' autoComplete='off' values='name' />
                        <ErrorMessage name='email'>{color => <div style={{ color: 'red' }}>{color}</div>}</ErrorMessage>
                    </div>

                    <div>
                        <label>Age</label>
                        <Field type='number' name='age' label='age' />
                        <ErrorMessage name='age'>{color => <div style={{ color: 'red' }}>{color}</div>}</ErrorMessage>
                    </div>

                    <label>Gender</label>
                    <div className='radios'>
                        <Field type='radio' name='gender' value='male' />Male
                        <Field type='radio' name='gender' value='female' />Female
                    </div>
                    <ErrorMessage name='gender'>{color => <div style={{ color: 'red' }}>{color}</div>}</ErrorMessage>

                    <label>Hobbies</label>
                    <div className='hobbies'>
                        <Field type='checkbox' value='Reading' name='checked' />Reading
                        <Field type='checkbox' value='Sports' name='checked' />Sports
                        <Field type='checkbox' value='Music' name='checked' />Music
                    </div>

                    <Button type='submit' variant='contained' color='primary' >Submit</Button>
                </Form>
            </Formik>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Action(Edit/Delete)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.age}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.hobby}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Suggestion
