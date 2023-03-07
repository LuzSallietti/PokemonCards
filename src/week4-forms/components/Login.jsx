import React, { useState } from 'react'
import { Form } from './StyledComponents';
import { Title } from './StyledComponents';
import { Input } from './StyledComponents';
import { Link } from './StyledComponents';
import { BtnContainer } from './StyledComponents';
import { Button } from './StyledComponents';



const Login = () => {

    const [values, setValues] = useState({
        username:"",
        password:""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        //controlar los valores en consola
        console.log(values);
        //resetea los valores del estado
        setValues({
            username: "",
            password: ""
        })
    }

    return (
        <Form id="login-form" onSubmit={handleSubmit}>
            <Title>Login</Title>
            <Input
            type= 'text'
            name='username'
            placeholder='User Name'
            onChange={e => setValues({...values, username:e.target.value})}
            />
            <Input
            type= 'password'
            name='password'
            placeholder='Password'
            /> 
            <Link>Forgot password?</Link>
            <BtnContainer>
                <Button background= '#301B52' form="login-form" btn="submit">Login</Button>
                <Button background= '#59575D'>Sign up</Button>
            </BtnContainer>                           
            
        </Form>
    )
}
export default Login;