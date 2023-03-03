import React from 'react'
import { FormContainer, Container } from '../styles/StyledComponents'
import { CustomInput } from '../common/CustomInput'

const names = ["email", "password"];

const Login = () => {
  return (
    
    <FormContainer
      from="login">
      {names.map(name => (        
        <CustomInput name={name}/>
        )
      )}     
    </FormContainer>
    
  )
}

export default Login