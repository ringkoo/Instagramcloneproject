import axios from "axios";
import Cookies from "js-cookie";
// 댓글 작성
const commentPost = async (newComment) => {
  const token = Cookies.get('token')
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments/`, newComment, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

//댓글 삭제
const commentDelete = async (id) => {
  const token = Cookies.get('token')
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

export { commentPost, commentDelete }