import styled from "styled-components";

const Container = styled.div`
    border:1px solid black;
    height: 99vh;
    width: 27vh;
`

const NavLogo = styled.div`
    margin: 20px 0px;
    width:27vh;
    height:15vh;
    background-image:url('/instalogo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

const Icondiv = styled.div`
    display:flex;
    align-items: center;
    padding:12px;
    margin:4px 14px;
    cursor: pointer;
    &:hover {
        background-color: #F2F2F2;
    }
    border-radius: 10px;
`

const Icon = styled.div`
    width:4vh;
    height:4vh;
    border-radius:50px;
    background-image:url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`

const Icontext = styled.div`
    padding-left:16px;
`


export { Container, NavLogo, Icon, Icondiv, Icontext }