import { styled } from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: white;
flex-direction: column;
`

const Button = styled.button`
text-decoration: none;
cursor: pointer;
margin: 15px;
border: white;
background-color: white;
color: black;
font-weight: bold;
`

export {Container, Button}