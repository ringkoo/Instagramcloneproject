import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 30vh;
    margin: 50px 150px 50px 0px;
    background-color:white;
`

const Divstyle = styled.div`
    display:flex;
    align-items:center;
`

const Profilephoto = styled.div`
    width: 45px;
    height:45px;
    border-radius:50px;
    margin:5px 5px;
    background-image:url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`

const Nicknamecontainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const Nickname = styled.div`
    font-weight:700;
    font-size: 13px;
    margin: 3px 10px;
`


export { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle }