import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, LeftContainer, ImagePreview, ImageBox, Bodybox, Writebox } from "./styles";
import { Textbutton } from "../common/textbutton";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addBoard, getBoard } from "../../api/board";
import { useNavigate } from "react-router-dom";

function ReadModal(postId) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [image, setImage] = useState(null);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const { isLoading, isError, data } = useQuery("getBoard", getBoard);
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }
  return (
    <>
      {isOpen ? 
        <Overlay>
          <ModalWrap>
            <Contents>
              <LeftContainer
                style={{
                  backgroundImage: `url(${postId.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
              </LeftContainer>
              <Writebox>
              </Writebox>
              <Textbutton onClick={handleClose} >X</Textbutton>
            </Contents>
          </ModalWrap>
        </Overlay>
       : null}
    </>
  );
}

export default ReadModal;
