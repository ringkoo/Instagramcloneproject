import React from "react";
import { Container, NavLogo, Icon, Icondiv, Icontext, Backarea } from "./styles";
import { useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <NavLogo />
                <Icondiv onClick={() => {
                    navigate("/home")
                }}>
                    <Icon url='/home.png'></Icon>
                    <Icontext>홈</Icontext>
                </Icondiv>
                <Icondiv onClick={() => {
                    navigate("/profile")
                }}>
                    <Icon url='/Chaewon.png'></Icon>
                    <Icontext >프로필</Icontext>
                </Icondiv>
            </Container >
        </>
    )
}

export default Navbar;