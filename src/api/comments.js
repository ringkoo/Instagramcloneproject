import axios from "axios";
import Cookies from "js-cookie";

const commentPost = async (newComment) => {
    const token = Cookies.get('token')
    console.log('api', newComment)
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/comments/`, newComment, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

const commentDelete = async ({ commentId, jwt }) => {
    const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/comments/${commentId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
    return response.data
}

export { commentPost, commentDelete }