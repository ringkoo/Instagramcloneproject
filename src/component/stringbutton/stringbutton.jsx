import React from "react";
import { StringButton, Container } from './styles'
import { Link } from "react-router-dom";

export function Stringsignupbutton() {
    // const navigate = useNavigate()

    // const handleSignup = () => {
    //     navigate('/singup')
    // }
    return (
        <Container>
            <p>계정이 없으신가요?</p>
            <Link to={'/signup'}>
                <StringButton>가입하기</StringButton>
            </Link>
        </Container>
    )
}

export function StringloginButton() {
    // const navigate = useNavigate()

    // const handleLogin = () => {
    //     navigate('/')
    // }

    return (
        <Container>
            <p>계정이 있으신가요?</p>
            <Link to={'/'}>
                <StringButton>로그인</StringButton>
            </Link>
        </Container>
    )
}

