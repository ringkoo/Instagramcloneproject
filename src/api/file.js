import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode'

// 프로필 사진 수정
const uploadimagePut = async (formData) => {
    const token = Cookies.get('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    }
    let decodedToken = jwt_decode(token)
    let nickName = decodedToken.nickName

    try {
        const response = await axios.put(
            `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`,
            formData, config
        )
        console.log('프로필 사진 수정', response)
        return response.data
    } catch (error) {
        console.log('프로필 사진 수정 오류', error, nickName, formData, config)
    }
}

// 프로필 정보 가져오기
const getProfileData = async () => {
    const token = Cookies.get('token')
    let decodedToken = jwt_decode(token)
    let nickName = decodedToken.nickName
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        return response.data
    } catch (error) {
        console.log('프로필 사진 받아오기 오류', error)
    }
}

export { uploadimagePut, getProfileData }