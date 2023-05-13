import axios from "axios";

//회원가입
const signupPost = async ({ email, nickName, password }) => {
    const res = await axios.post(
        `${process.env.SERVER_URL}/members/signup`, {
        email, nickName, password
    }
    )
    console.log(res)
    return res.data
}

//로그인
const loginPost = async ({ email, password }) => {
    const res = await axios.post(
        `${process.env.SERVER_URL}/members/login`, {
        email, password
    }
    )
    console.log(res)
    return res.data
}

//유저 조회
const userInquiry = async ({ jwt }) => {
    const res = await axios.get(
        `${process.env.SERVER_URL}/members}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return res.data
}

//팔로우 상태
const followPost = async ({ userId, jwt }) => {
    const res = await axios.post(
        `${process.env.SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return res.data
}
//팔로우 조회
const followInquiry = async ({ userId, jwt }) => {
    const res = await axios.get(
        `${process.env.SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return res.data
}

//팔로잉 조회
const followingInqury = async ({ userId, jwt }) => {
    const res = await axios.get(
        `${process.env.SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return res.data
}

export { loginPost, signupPost, userInquiry, followPost, followInquiry, followingInqury }