import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
flex-wrap: wrap;
`

export const Title = styled.h2`
font-size: 2rem;
text-align: center;
font-family: "Helvetica";
width: 100%;
margin: 24px 0;
color: blue;
`
export const OperationButton = styled.button `
width: ${props => props.btnWidth || '75px'};
height: ${props => props.btnHeight || '75px'};
border-radius: 100%;
background-color: ${props => props.bgColor || 'darkgrey'};
border: 1px solid gray;
display:flex;
justify-content: center;
align-items: center;
font-weight: bold;
color: ${props => props.color || '#fff'};
font-size: ${props => props.fontSize || '16px'};
`