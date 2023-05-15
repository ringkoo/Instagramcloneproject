import axios from "axios";
import Cookies from "js-cookie";

// 데이터 조회
export const getBoard = async () => {
  try {
    const token = Cookies.get('token')
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/`,
      { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return Promise.reject(error.data)
  }
};


// 데이터 상세조회
export const getDetailBoard = async (id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`);
  return data;
}

//게시글 작성(post요청)
export const addBoard = async (formData) => {
  const token = Cookies.get('token')
  console.log('api 토큰', token)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards/`, formData, config);
  return response;
};

//게시글 삭제 (delet) 토큰 없음(0513~)
export const deleteBoard = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`);
  console.log('삭제 res', response)
  return response
};