import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, LeftContainer, ImagePreview, ImageBox, Bodybox, Writebox } from "./styles";
import { Textbutton } from "../common/textbutton";

function ReadModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [image, setImage] = useState(null);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

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
                      style={{
                        objectFit: "cover",
                      }}
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
                <Bodybox placeholder="내용을 입력해주세요." />
                <Textbutton style={{fontSize:'20px'}}>글작성</Textbutton>
                {/* <div>추가기능은 여기에...</div> */}
              </Writebox>
              <Textbutton onClick={handleClose}>X</Textbutton>
            </Contents>
          </ModalWrap>
        </Overlay>
      ) : null}
    </>
  );
}

export default ReadModal;
