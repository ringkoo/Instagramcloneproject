import axios from "axios";
import Cookies from "js-cookie";

// 회원가입
const signupPost = async ({ email, nickName, password }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/signup`, {
        email, nickName, password
    })
    console.log(response.data)
    return response.data
}

// 로그인
const loginPost = async ({ email, password }) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/members/login`, {
            email, password
        }
        )
        const token = response.headers.get('authorization').split(' ')[1]
        Cookies.set('token', token)
        console.log('로그인하고 받은 토큰', { token })
        return { token }
    } catch (error) {
        return Promise.reject(error.response)
    }
}

// 유저 조회
const userInquiry = async (id, nickName, img) => {
    const token = Cookies.get('token')
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/members/recommends`, {
            content: {
                id,
                nickName,
                img
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error('유저 조회 실패', error)
    }
}

// 팔로우 유저 조회
const followuserInquiry = async () => {
    const token = Cookies.get('token')
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members/follwers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
    console.log('팔로우 유저 조회', response)
    return response.data
}

// 팔로우 상태
const followPost = async ({ userId }) => {
    const token = Cookies.get('token')
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log('팔로우 상태', response)
    return response.data
}
// 팔로우 조회
const followInquiry = async ({ userId }) => {
    const token = Cookies.get('token')
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log('팔로우 조회', response)
    return response.data
}

// 팔로잉 조회
const followingInqury = async ({ userId }) => {
    const token = Cookies.get('token')
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log('팔로잉 조회', response)
    return response.data
}

export { loginPost, signupPost, userInquiry, followPost, followInquiry, followingInqury, followuserInquiry }
