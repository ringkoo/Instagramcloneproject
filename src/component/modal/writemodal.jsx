import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, LeftContainer, ImagePreview, ImageBox, Bodybox, Writebox } from "./styles";
import { Textbutton } from "../common/textbutton";
import { useMutation, useQueryClient } from "react-query";
import { addBoard } from "../../api/board";
import { useNavigate } from "react-router-dom";

function WriteModal() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [contents, setContents] = useState("");
  const [image, setImage] = useState(null);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const queryClient = useQueryClient()
  const mutation = useMutation(addBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries("boards")
      alert("글 작성 완료")
      navigate('/home')
      window.location.reload()
    },
    onError: (error) => {
      if (error.response.status !== null) {
        console.log(error.response.data.errorMessage);
      }
    },
  });

  //내용 변경
  const changeContents = (event) => {
    setContents(event.target.value)
  };

  // image 변경을 감지하는 함수
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  //글작성
  const boardSubmitHandler = () => {
    const formData = new FormData();
    formData.append("img", image);
    formData.append("contents", contents);

    mutation.mutate(formData);

    //form 조회
    for (const [key, value] of formData.entries()) {
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }



  return (
    <>
      {isOpen ? (
        <Overlay>
          <ModalWrap>
            <Contents>
              <LeftContainer>
                <ImageDiv
                  className="image-upload"
                  onClick={() => {
                    document.getElementById("image").click();
                  }}
                >
                  {image ? (
                    <ImagePreview
                      src={URL.createObjectURL(image)}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <ImageBox>이미지 추가</ImageBox>
                  )}
                  <input
                    name="image"
                    id="image"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </ImageDiv>
              </LeftContainer>
              <Writebox>
                <Bodybox value={contents} onChange={changeContents} placeholder="내용을 입력해주세요." />
                <Textbutton style={{ fontSize: '20px' }} onClick={boardSubmitHandler}>글작성</Textbutton>
                {/* <div>추가기능은 여기에...</div> */}
              </Writebox>
              <Textbutton onClick={handleClose} style={{ color: ' white' }}>X</Textbutton>
            </Contents>
          </ModalWrap>
        </Overlay>
      ) : null}
    </>
  );
}

export default WriteModal;
