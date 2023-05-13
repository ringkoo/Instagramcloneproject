import React, { useEffect, useState } from "react";
import { Contentsbox, Userinfobox, CommentHomeInput, CommentContainer, Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg } from "./styles";
import { BiComment } from "react-icons/bi";
import { Textbutton } from "../common/textbutton";
import { deleteBoard, getBoard } from "../../api/board";
import ReadModal from "../modal/readmodal";
import { useQuery } from "react-query";

function Feedcard({ id, imgurl, nickname, profileimg, date, content }) {
    const [isLike, setIsLike] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [boardData, setBoardData] = useState({});


    const LikeHandler = () => {
        setIsLike(!isLike)
    }

    const ModalOpenHandler = () => {
        setIsOpen(!isOpen)
    }

    const DeleteboardHandler = async (id) => {
        const confirmed = window.confirm("정말로 삭제하시겠습니까?");
        if (confirmed) {
            await deleteBoard(id);
        }
        setBoardData(boardData)
    };

    return (
        <>
            <Container>
                {/* 상단 div */}
                <Topdiv>
                    <Userinfobox>
                        {/* 게시자 프로필 이미지 */}
                        <Profilephoto url={profileimg}></Profilephoto>
                        <Nicknamecontainer>
                            {/* 게시자 닉네임 */}
                            <Nickname>{nickname}</Nickname>
                            {/* 게시 시간 */}
                            <Datetime>작성 시간: {date}</Datetime>
                        </Nicknamecontainer>
                    </Userinfobox>
                    <Textbutton onClick={()=>DeleteboardHandler(id)}>삭제</Textbutton>
                </Topdiv>

                {/* 올렸던 이미지 */}
                <Imagediv url={imgurl}></Imagediv>

                {/* 좋아요 댓글 icon div */}
                <Middlediv>
                    <Likeimg
                        onClick={LikeHandler}
                        isLike={isLike}
                        style={{ color: isLike ? "red" : "black" }}>♡</Likeimg>
                    <Commentimg >
                        <BiComment onClick={ModalOpenHandler} />
                    </Commentimg>
                    {isOpen ? <ReadModal postid={id} /> : null}
                </Middlediv>
                <Contentsbox>{content || '내용'}</Contentsbox>
                {/* 댓글입력창 div */}
                <CommentContainer>
                    <CommentHomeInput placeholder="댓글 입력"></CommentHomeInput><Textbutton>게시</Textbutton>
                </CommentContainer>
            </Container>
        </>
    )
}

export default Feedcard;