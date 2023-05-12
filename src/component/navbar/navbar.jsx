import React from "react";
import { Container, NavLogo, Icon, Icondiv, Icontext, Backarea } from "./styles";

function Navbar() {
    return (
        <>
            <Container>
                <NavLogo />
                <Icondiv>
                    <Icon url='/home.png'></Icon>
                    <Icontext>홈</Icontext>
                </Icondiv>
                <Icondiv>
                    <Icon url='/Chaewon.png'></Icon>
                    <Icontext>프로필</Icontext>
                </Icondiv>
            </Container>
        </>
    )
}

export default Navbar;