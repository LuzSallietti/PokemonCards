import React, { useState } from 'react'

const Login = () => {
  const { values, setValues } = useState({ email: "", password: "" });
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div id="login-container">
      <form onSubmit={handleLogin} id="login-form">
        <div>
          <label htmlFor='email'>Email: </label>
          <input value={values.email} id="email" placeholder='Ingresa tu email' />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input value={values.password} id="password" placeholder='Ingresa tu Password' />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Login