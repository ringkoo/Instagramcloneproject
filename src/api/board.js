import axios from "axios";

// 데이터 조회
export const getBoard = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards`);
  console.log('조회 data', data)
  return data;
}

//게시글 작성(post요청)
export const addBoard = async (formData) => {
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards`, formData, config);
  return response;
};