import React, { useState } from "react"
import { useMutation } from 'react-query'
import { signupPost } from '../api/users'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const mutation = useMutation(signupPost)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNicknameChange = (e) => {
    setNickname(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ email, nickname, password }, {
      onSuccess: (data) => {
        // Handle successful signup here, like redirecting to a different page
        navigate('/login');
      },
      onError: (error) => {
        // Handle signup error here
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요." />
        <input type="text" value={nickname} onChange={handleNicknameChange} placeholder="닉네임을 입력해주세요." />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;