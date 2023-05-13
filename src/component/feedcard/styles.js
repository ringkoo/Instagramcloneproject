import styled from "styled-components";



const Container = styled.div`
    border:1px solid #DBDBDB;
    height: 650px;
    width: 500px;
    min-width:50px;
    min-height:50px;
    margin-top: 15px;
`

const Topdiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Profilephoto = styled.div`
    width: 45px;
    height:45px;
    min-width:45px;
    min-height:45px;
    border-radius:50px;
    margin:5px 5px;
    background-image:url(${props => props.url});
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
    width: 500px;
    height:500px;
    max-width: 100%; 
    max-height: 100%; 
    border-radius:5px;
    background-image:url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

const CommentContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
`

const CommentHomeInput = styled.input`
    border:none;
    border-bottom:1px solid gray;
    width:80%;
    
`

const Commentsubmit = styled.div`
    border:none;
`

const Userinfobox = styled.div`
    display:flex;
`

const Contentsbox = styled.div`
    
`
export { Contentsbox, Userinfobox, Commentsubmit, CommentHomeInput, CommentContainer, Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg }