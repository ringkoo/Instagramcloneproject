import React, { useState } from "react";
import Cookies from "js-cookie";
import { useMutation } from 'react-query'
import { loginPost } from '../../api/users'
import { useNavigate } from 'react-router-dom'
import { Stringsignupbutton } from '../stringbutton/stringbutton'
import {
    Container,
    Form,
    Input,
    Button,
    Image,
    ErrorMessage,
} from "./styles";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginMutation = useMutation(loginPost)
    const navigate = useNavigate()



    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginMutation.mutate({ email, password }, {
            onSuccess: (data) => {
                console.log(data)
                Cookies.set('token', data.token)
                navigate('/home')
            },
            onError: (error) => {
            }
        })
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Image />
                    <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요." />
                    <Input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." />
                    <Button type="submit">로그인</Button>
                </Form>
                <Stringsignupbutton />
            </Container>

        </div>
    );
}

export default Login;
