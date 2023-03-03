import React from 'react'
import { CustomInput } from '../common/CustomInput'
import { FormContainer, Container } from '../styles/StyledComponents'

const names = ["Name","Email", "Password", "Repeat Password"];

const Register = () => {
  return (
    <FormContainer
      from="register"
    >     
      {names.map(name => (
        <CustomInput name={name}/>
        )
      )}
             
    </FormContainer>
  )
}

export default Register