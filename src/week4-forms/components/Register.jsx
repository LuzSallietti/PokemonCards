import React, { useState } from 'react'
import { Form } from './StyledComponents';
import { Title } from './StyledComponents';
import { Input } from './StyledComponents';
import { Link } from './StyledComponents';
import { BtnContainer } from './StyledComponents';
import { Button } from './StyledComponents';

const Register = () => {
    const [values, setValues] = useState({
        username:"",
        email: "",
        password:"",
        repeatPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //controlar los valores en consola
        console.log(values);
        //resetea los valores del estado
        setValues({
            username:"",
            email: "",
            password:"",
            repeatPassword: ""
        })
    }

    return(
    <Form id='register-form' onSubmit={handleSubmit}>
        <Title>Sign up</Title>
        <Input
        name="username"
        type="text"
        placeholder='Enter your user name'
        onChange={e => setValues({... values, username:e.target.value})}
        />
        <Input
        name="email"
        type="email"
        placeholder='Enter your email'
        onChange={e => setValues({... values, email:e.target.value})}
        />
        <Input
        name="password"
        type="password"
        placeholder='Type your password'
        onChange={e => setValues({... values, password:e.target.value})}
        />
        <Input
        name="repeat_password"
        type="password"
        placeholder='Repeat your password'
        onChange={e => setValues({... values, repeatPassword:e.target.value})}
        />
        <Link>Already have an account?</Link> 
        <BtnContainer>
            <Button background= '#301B52' form="register-form" btn="submit">Register</Button>
            <Button background= '#59575D' type='reset'>Cancel</Button>
        </BtnContainer>  
    </Form>
    )

}
export default Register;