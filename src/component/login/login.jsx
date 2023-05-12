import React, { useState } from "react";
import Cookies from "js-cookie";
import { useMutation } from 'react-query'
import { loginPost } from '../api/users'
import {
  Container,
  Form,
  Input,
  Button,
  Image,
  Label,
} from "./loginstyle";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const mutation = useMutation(loginPost)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ email, password }, {
      onSuccess: (data) => {
        Cookies.set('token', data.token)
        // Handle successful login here, like redirecting to a different page
      },
      onError: (error) => {
        // Handle login error here
      }
    })
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Image />
          <Label>
            <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요." />
            <Input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." />
            <Button type="submit">로그인</Button>
          </Label>
        </Form>
        {/* <Form>
          계정이 없으신가요? <button>가입하기</button>
        </Form> */}
      </Container>

    </div>
  );
}

export default Login;
