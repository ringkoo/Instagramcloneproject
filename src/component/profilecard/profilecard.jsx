import React, { useState } from "react";
import { Box } from "./styles";
import ReadModal from "../modal/readmodal";

function ProfileCard({ id, imageUrl, nickname, profileimg, date, content }) {
  const [isOpen, setisOpen] = useState(false);

  const boxClickHandler = () => {
    setisOpen(!isOpen)
  }
  return (
    <>
      <Box url={imageUrl} onClick={boxClickHandler} />
      {
        isOpen ? <ReadModal
          id={id}
          imageUrl={imageUrl}
          nickname={nickname}
          profileimg={profileimg}
          date={date}
          content={content}
        /> : null
      }
    </>
  )
}

export default ProfileCard;