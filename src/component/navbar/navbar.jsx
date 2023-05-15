import React, { useState } from "react";
import { Container, NavLogo, Icon, Icondiv, Icontext, Backarea } from "./styles";
import { useNavigate } from "react-router";
import WriteModal from "../modal/writemodal";

function Navbar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

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
                <Icondiv onClick={openModal}>
                    {isOpen ? <WriteModal /> : null}
                    <Icon url='/plus.png'></Icon>
                    <Icontext >글작성</Icontext>
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