import axios from "axios";

//회원가입

const signupPost = async ({ email, nickName, password }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/signup`, {
        email, nickName, password
    }
    )
    console.log(response.data)
    return response.data
}

//로그인
const loginPost = async ({ email, password }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/login`, {
        email, password
    }
    )
    console.log(response)
    return response.data
}

//유저 조회
const userInquiry = async ({ jwt }) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return response.data
}

//팔로우 상태
const followPost = async ({ userId, jwt }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return response.data
}
//팔로우 조회
const followInquiry = async ({ userId, jwt }) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return response.data
}

//팔로잉 조회
const followingInqury = async ({ userId, jwt }) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }

    }
    )
    return response.data
}


export { loginPost, signupPost, userInquiry, followPost, followInquiry, followingInqury }

