import React, { useState } from "react";
import { Box } from "./styles";
import ReadModal from "../modal/readmodal";

function ProfileCard({ boardId, imageUrl, nickName, profileimg, createdAt, content, comments }) {
  const [isOpen, setisOpen] = useState(false);

  const boxClickHandler = () => {
    setisOpen(!isOpen)
  }
  return (
    <>
      <Box url={imageUrl} onClick={boxClickHandler} />
      {
        isOpen ? <ReadModal
          boardId={boardId}
          imageUrl={imageUrl}
          nickName={nickName}
          profileimg={profileimg}
          createdAt={createdAt}
          content={content}
          comments={comments}
        /> : null
      }
    </>
  )
}

export default ProfileCard;