import React from "react";
import { StringButton, Container } from './styles'
import { useNavigate } from "react-router-dom";

export function Stringsignupbutton() {
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate('/singup')
    }
    return (
        <Container>
            <p>계정이 없으신가요?</p>
            <StringButton onSubmit={handleSignup}>가입하기</StringButton>
        </Container>
    )
}

export function StringloginButton() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <Container>
            <p>계정이 있으신가요?</p>
            <StringButton onSubmit={handleLogin}>로그인</StringButton>
        </Container>
    )
}

