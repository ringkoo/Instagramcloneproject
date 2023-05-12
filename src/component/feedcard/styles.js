import styled from "styled-components";



const Container = styled.div`
    border:1px solid red;
    height: 65vh;
    width: 50vh;
    margin-top: 15px;
`

const Topdiv = styled.div`
    display:flex;
    align-items:center;
`

const Profilephoto = styled.div`
    width: 45px;
    height:45px;
    border-radius:50px;
    margin:5px 5px;
    background-image:url('/Chaewon.png');
    background-repeat: no-repeat;
    background-size: cover;
`

const Nicknamecontainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
`

const Nickname = styled.div`
    font-weight:700;
    font-size: 13px;
    margin: 3px 10px;
`

const Datetime = styled.div`
    font-weight:700;
    font-size: 10px;
    margin: 3px 10px;
    color: gray;
`

const Imagediv = styled.div`
    width: 50vh;
    height:50vh;
    border-radius:5px;
    /* background-image:url('/card1.jpg'); */
    background-image:url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`

const Middlediv = styled.div`
    display:flex;
    align-items:center;
    margin:0px 5px;
`

const Likeimg = styled.div`
    font-size: 40px;
    cursor: pointer;
    &:hover {
        color: #8E8E8E;
    }
`

const Commentimg = styled.div`
    font-size: 30px;
    margin:8px 5px 0px 15px;
    cursor: pointer;
    &:hover {
        color: #8E8E8E;
    }
`
export { Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg }