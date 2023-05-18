import React, { useEffect, useState } from "react";
import { Container, NavLogo, Icon, Icondiv, Icontext } from "./styles";
import { useNavigate } from "react-router";
import WriteModal from "../modal/writemodal";
import Cookies from "js-cookie";
import { getProfileData } from "../../api/file";

function Navbar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [profileData, setProfileData] = useState(null)

    const openModal = () => {
        setIsOpen(true)
    }

    const handleLogout = () => {
        Cookies.remove('token')
        alert('로그아웃에 성공했습니다.')
        navigate('/')
    }

    useEffect(() => {
        const loadProfileData = async () => {
            const data = await getProfileData()
            setProfileData(data)
        }
        loadProfileData()
    },[])

    return (
        <>
            <Container>
                <NavLogo />
                <Icondiv onClick={() => {
                    navigate("/home")
                    window.location.reload()
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
                    <Icon url={profileData?.img}></Icon>
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