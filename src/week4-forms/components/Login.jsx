import React, { useState } from 'react'
import { Form } from './StyledComponents';
import { Title } from './StyledComponents';
import { Input } from './StyledComponents';
import { Link } from './StyledComponents';
import { BtnContainer } from './StyledComponents';
import { Button } from './StyledComponents';

const inputs = [
    {
        id: 1,
        label: "User name",
        type: "text",
        name: "username",
        placeholder: "User name"

    },
    {
        id: 2,
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Password"

    }
]

const Login = () => {

    const [values, setValues] = useState({
        username:"",
        password:""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        //controlar los valores en consola
        console.log(values);
        //resetear los valores del estado
        setValues({
            username: "",
            password: ""
        })
    }

    const handleChange = e => {
        const property = e.target.name;
        const value = e.target.value;        
        setValues({...values, [property]:value});
    }

    return (
        <Form id="login-form" onSubmit={ e => handleSubmit(e)}>
            <Title>Login</Title>
            {inputs.map(input => {
                return(
                    <>
                    <label key={input.id}>{input.label}
                    <Input
                    type={input.type}
                    name={input.name}
                    value={values[input.name]}
                    placeholder={`Enter your ${input.placeholder.toLowerCase()}`}
                    onChange= {e => handleChange(e)}
                    />
                    </label>                    
                    </>
                )
            })}
            
            <Link>Forgot password?</Link>
            <BtnContainer>
                <Button background= '#301B52' form="login-form" btn="submit">Login</Button>
                <Button background= '#59575D'>Sign up</Button>
            </BtnContainer>                           
            
        </Form>
    )
}
export default Login;