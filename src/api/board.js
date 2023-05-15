import axios from "axios";

// 데이터 조회
export const getBoard = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards`);
  console.log(data)
  return data;
}

// 데이터 상세조회
export const getDetailBoard = async (id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`);
  return data;
}

//게시글 작성(post요청)
export const addBoard = async (formData) => {
  // const config = {
  //   headers: { 'Content-Type': 'multipart/form-data' }
  // };
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards`, formData,
    // config
  );
  return response;
};

//게시글 삭제 (delet) 토큰 없음(0513~)
export const deleteBoard = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`);
};