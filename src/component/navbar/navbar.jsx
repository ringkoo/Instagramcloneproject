import React, { useState } from "react";
import { Container, NavLogo, Icon, Icondiv, Icontext } from "./styles";
import { useNavigate } from "react-router";
import WriteModal from "../modal/writemodal";
import Cookies from "js-cookie";

function Navbar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const handleLogout = () => {
        Cookies.remove('token')
        navigate('/')
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
                <Icondiv onClick={handleLogout}>
                    <Icon></Icon>
                    <Icontext>로그아웃</Icontext>
                </Icondiv>
            </Container >
        </>
    )
}

export default Navbar;