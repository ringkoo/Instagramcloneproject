import axios from "axios";
import Cookies from "js-cookie";

// 프로필 사진 수정
const uploadimagePost = async ({ img, nickname }) => {
    const token = Cookies.get('token')
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/members/${nickname}`, {
        Headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
    console.log('프로필 사진 수정', response)
    return response.data
}

export { uploadimagePost }