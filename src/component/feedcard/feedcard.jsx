import React, { useState } from "react";
import { Userinfobox, CommentHomeInput, CommentContainer, Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg } from "./styles";
import { BiComment } from "react-icons/bi";
import { Textbutton } from "../common/textbutton";

function Feedcard(props) {
    const now = new Date();
    const dateString = now.toLocaleString();
    const [isLike, setIsLike] = useState(false)
    const [isModal, setIsModal] = useState(false)

    const LikeHandler = () => {
        setIsLike(!isLike)
    }
    return (
        <>
            <Container>
                {/* 상단 div */}
                <Topdiv>
                    <Userinfobox>
                        <Profilephoto url={props.nickurl}></Profilephoto>
                        <Nicknamecontainer>
                            <Nickname>Kim Chaewon</Nickname>
                            <Datetime>작성 시간: {dateString}</Datetime>
                        </Nicknamecontainer>
                    </Userinfobox>
                    <Textbutton>삭제</Textbutton>
                </Topdiv>

                {/* 이미지div */}
                <Imagediv url={props.imgurl}></Imagediv>

                {/* 좋아요 댓글 icon div */}
                <Middlediv>
                    <Likeimg
                        onClick={LikeHandler}
                        isLike={isLike}
                        style={{ color: isLike ? "red" : "black" }}>♡</Likeimg>
                    <Commentimg ><BiComment /></Commentimg>
                </Middlediv>

                {/* 댓글입력창 div */}
                <CommentContainer>
                    <CommentHomeInput placeholder="댓글 입력"></CommentHomeInput><Textbutton>게시</Textbutton>
                </CommentContainer>
            </Container>
        </>
    )
}

export default Feedcard;