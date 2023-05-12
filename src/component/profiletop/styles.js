import styled from "styled-components";

const Container = styled.div`
    display:flex;
    height: 200px;
    width: 600px;
    margin-top: 30px;
    justify-content:space-evenly;
    align-items:center;
    border-bottom:1px solid #DBDBDB;
`

const Storybox = styled.div`
    display:flex;
    align-items:center;
`

const Profilephoto = styled.div`
    width: 150px;
    height:150px;
    border-radius:200px;
    margin:5px 5px;
    background-image:url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`

const Nicknamestyle = styled.div`
    font-size:20px;
`

const Infocontainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Infobox = styled.div`
    display:flex;
    justify-content: space-between;
    width:300px;
`

const Infospace = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:100%;
`

const Descbox = styled.div`
    display:flex;
    width:305px;
    height:100px;
    flex-wrap:wrap;
`
export { Descbox, Container, Storybox, Profilephoto, Nicknamestyle, Infobox, Infocontainer, Infospace }