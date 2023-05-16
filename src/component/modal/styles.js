import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 1000px;
  height: fit-content;
  border-radius: 15px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const Contents = styled.div`
  display:flex;
`;

const ImagePreview = styled.img`
  width: 100%; // 미리보기 창을 div박스와 같은 크기로 설정
  height: 100%;
  max-width: 100%;
`;

const ImageDiv = styled.div`
  position: relative;
  width: 600px; // div박스 크기 설정
  height: 600px;
  border: 1px solid #DBDBDB;
  &:hover {
    cursor: pointer;
  }
`;

const LeftContainer = styled.div`
  display:flex;
  height: 600px;
`;

const ImageBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  color: #999595;
`;

const Bodybox = styled.textarea`
  width: 375px;
  height: 200px;
  margin: 10px;
  border: 1px solid #DBDBDB;
  resize: none;
`

const Writebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  gap:10px;
`

const Readbox = styled.div`
  display: flex;
  padding:5px 10px 10px 10px;
  font-size:13px;
`

const Readinfobox = styled.div`
  width:500px;
`

const ChangeContentsbox = styled.div`
  border-bottom:1px solid #DBDBDB;

`

const Commentlistbox = styled.div`
`
export { ChangeContentsbox,Readbox, Commentlistbox, Readinfobox, Writebox, Overlay, ModalWrap, Contents, ImageDiv, ImagePreview, LeftContainer, ImageBox, Bodybox };