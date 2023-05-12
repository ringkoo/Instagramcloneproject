import styled from "styled-components";

const Container = styled.div`
    display:flex;
    gap: 20px;
    height: 10vh;
    width: 70vh;
    margin-top: 50px;
`

const Storybox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Profilephoto = styled.div`
    width: 55px;
    height:55px;
    border-radius:50px;
    margin:5px 5px;
    background-image:url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`

const Nicknamestyle = styled.div`
    font-size:10px;
`

export { Container, Storybox, Profilephoto, Nicknamestyle }