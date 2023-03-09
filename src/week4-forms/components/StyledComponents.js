import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color: #301B52;
height: 100vh;
width: 100vw;
justify-content: space-around;
align-items: center;
`
export const Form = styled.form`
background-color: #BDBDBD;
padding: 2rem;
width: 33%;
border-radius: 20px;
font-family: 'Roboto';
`
export const Title = styled.h1`
font-size: 1.5rem;
color: #301B52;
text-align: center;
font-weight: 700;
`
export const Input = styled.input`
background-color: #F6F6F6;
border-radius: 20px;
border: 1px solid #828282;
width:100%;
padding: .5rem;
margin: 0.25rem 0 1rem 0;
`
export const Link = styled.a`
text-decoration: none;
color: #301B52;
font-size: 0.8rem;
font-weight: 700;
margin-top: 0.5rem;
display: block;
cursor: pointer;
`
export const BtnContainer = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
margin: 1rem 0;
`
export const Button = styled.button`
color: #fff;
border-radius: 20px;
width: 40%;
background-color: ${props => props.background || 'white'};
padding: 0.5rem 1rem;
cursor: pointer;
font-weight: 700;
border: none;
`