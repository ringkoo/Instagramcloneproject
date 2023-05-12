import React from "react";
import { Box } from "./styles";

function ProfileCard(props) {
  return (
    <Box url={props.imgurl} />
  )
}

export default ProfileCard;