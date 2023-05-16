import styled from 'styled-components'

const Container = styled.div`
boder: 2px solid gary;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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

const Input = styled.input`
width: 320px;
height: 40px;
margin-bottom: 10px;
border: 1px solid lightgray;
border-radius: 5px;
padding: 10px;
box-sizing: border-box;
`

const Button1 = styled.button`
height: 30px;
background: white;
border: none;
color: lightblue;
font-weight: bold;
font-size: 15px;
margin-top: 10px;
cursor: pointer;
`

const Div = styled.div`
dispaly: flex;
`

const Profilephoto = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 200px;
    margin: 5px 5px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`

export {
    Container,
    Form,
    Button,
    Button1,
    Input,
    Div,
    Profilephoto
}