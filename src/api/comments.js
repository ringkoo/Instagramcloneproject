import axios from "axios";

const commentPost = async ({ boardId, contents }) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/comments`, {
        boardId, contents
    }
    )
    return response.data
}

const commentDelete = async ({ commentId }) => {
    const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/comments/${commentId}`
    )
    return response.data
}

export { commentPost, commentDelete }