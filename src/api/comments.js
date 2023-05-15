import axios from "axios";

const commentPost = async ({ boardId, contents, jwt }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/comments`, {
        boardId, contents
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }
    )
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