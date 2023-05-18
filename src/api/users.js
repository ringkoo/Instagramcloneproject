import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

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
        const token = response.headers['authorization'].split(' ')[1]
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
    console.log('token', token)
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/members/followers`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
        console.log('팔로우 유저 조회', response)
        return response.data
    } catch (error) {
        if (error.response) {
            console.log('조회 실패', error.response)
        }
        console.log(error)
        throw error
    }
}

// 팔로우
const followPost = async ({ nickName }) => {
    const token = Cookies.get('token')
    console.log(token)
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log('팔로우 상태', response)
        return response.data
    } catch (error) {
        if (error.response) {
            console.log('서버응답', error.response)
        }
        console.log('팔로우 실패', error)
        throw error
    }
}

// 언팔로우
const unfollowPost = async ({ nickName }) => {
    const token = Cookies.get('token')
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log('언팔로우 상태', response)
        return response.data
    } catch (error) {
        console.log('언팔로우 실패', error)
        throw error
    }
}

// // 팔로우 회원 조회
// const followInquiry = async ({ nickName }) => {
//     const token = Cookies.get('token')
//     const response = await axios.get(
//         `${process.env.REACT_APP_SERVER_URL}/members/followers`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//     console.log('팔로우 조회', response)
//     return response.data
// }

// 팔로잉 조회
const followingInqury = async ({ nickName }) => {
    const token = Cookies.get('token')
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log('팔로잉 조회', response)
    return response.data
}

// 내 피드 조회
const myfeedInqury = async () => {
    const token = Cookies.get('token')
    let decodedToken = jwt_decode(token)
    let nickName = decodedToken.nickName
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log('내 피드 조회 실패', error, decodedToken)
    }
}

export {
    loginPost,
    signupPost,
    userInquiry,
    followPost,
    // followInquiry,
    followingInqury,
    followuserInquiry,
    myfeedInqury,
    unfollowPost
}
