import axios from "axios";
import Cookies from "js-cookie";

// 댓글 작성
export const commentPost = async (newComment) => {
  const token = Cookies.get('token')
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments/`, newComment, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

//댓글 삭제
export const commentDelete = async (id) => {
  const token = Cookies.get('token')
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

//좋아요 클릭(post요청)
export const likeCommentPost = async (id) => {
  console.log(id)
  const token = Cookies.get('token')
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`, id, {
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log('api', response)
  return response;
};
