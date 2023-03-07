import React from 'react'
import { Container } from './components/StyledComponents';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return <>
    <Container>
        <Login/>
        <Register/>              
    </Container>
    </>
}

export default App;