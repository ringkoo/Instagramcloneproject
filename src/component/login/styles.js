import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: white;
flex-direction: column;
gap: 10px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
background-color: white;
border: 2px solid lightgray;
padding: 20px;
width: 400px;
box-sizing: border-box;
align-items: center;
`

const Input = styled.input`
width: 320px;
height: 40px;
margin-bottom: 10px;
border: 1px solid lightgray;
border-radius: 5px;
padding: 10px;
box-sizing: border-box;
`

const Button = styled.button`
height: 30px;
background: lightblue;
border: none;
border-radius: 5px;
color: white;
font-weight: 8px 0;
margin-top: 10px;
cursor: pointer;
`

const Image = styled.img`
width: 240px;
height: 105px;
background-position: center;
background-image: url('https://fontmeme.com/images/instagram-new-logo.png');
background-size: cover;
margin-bottom: 30px;
border: none;
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export {
    Container,
    Form,
    Input,
    Button,
    Image,
    ErrorMessage,
}