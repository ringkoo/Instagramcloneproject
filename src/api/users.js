import axios from "axios";

//회원가입
const signupPost = async ({ email, nickname, password }) => {
    const res = await axios.post(
        `${process.env.SERVER_URL}/members/signup`, {
        email, nickname, password
    }
    )
    return res.data
}

//로그인
const loginPost = async ({ email, password }) => {
    const res = await axios.post(
        `${process.env.SERVER_URL}/members/login`, {
        email, password
    }
    )
    return res.data
}

export { loginPost, signupPost }