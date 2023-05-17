import axios from "axios";
import Cookies from "js-cookie";

// 데이터 조회
export const getBoard = async () => {
  try {
    const token = Cookies.get('token')
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/`,
      { headers: { Authorization: `Bearer ${token}` } });
    return response.data
  } catch (error) {
    return Promise.reject(error.data)
  }
};

//게시글 작성(post요청)
export const addBoard = async (formData) => {
  const token = Cookies.get('token')
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  }
  // for (let [key, value] of formData.entries()) { console.log(`${key}:`, value); }
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards/`, formData, config);
  return response;
};

//게시글 삭제 (delet) 
export const deleteBoard = async (id) => {
  const token = Cookies.get('token')
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response
};

//게시글 작성(post요청)
export const likeBoardPost = async (id) => {
  const token = Cookies.get('token')
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`, id, {
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log('api', response)
  return response;
};