import axios from "axios";
import Cookies from "js-cookie";

// 프로필 사진 수정
const uploadimagePut = async ({ nickName,image, content }) => {
    const token = Cookies.get('token')
    console.log(token)
    try {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('feed', content)

        const response = await axios.put(
            `${process.env.REACT_APP_SERVER_URL}/members/${nickName}`,
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        console.log('프로필 사진 수정', response)
        return response.data
    } catch (error) {
        console.log('프로필 사진 수정 오류', error)
    }
}

// 프로필 사진 가져오기
const getProfilePhoto = async () => {
    const token = Cookies.get('token')
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/members/profilePhoto`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        console.log('프로필 사진 받아오기', response)
        return response.data
    } catch (error) {
        console.log('프로필 사진 받아오기 오류', error)
    }
}

export { uploadimagePut, getProfilePhoto }