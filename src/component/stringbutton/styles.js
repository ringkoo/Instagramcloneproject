import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 400px;
border: 2px solid lightgray;

`

const StringButton = styled.button`
text-decoration: none;
cursor: pointer;
margin: 15px;
border: white;
background-color: white;
color: #3897f0;
font-weight: bold;
`

export { StringButton, Container }