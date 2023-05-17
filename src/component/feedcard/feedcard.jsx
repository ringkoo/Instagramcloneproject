import React, { useEffect, useState } from "react";
import { Contentsbox, Userinfobox, CommentHomeInput, CommentContainer, Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg } from "./styles";
import { BiComment } from "react-icons/bi";
import { Textbutton } from "../common/textbutton";
import { deleteBoard } from "../../api/board";
import ReadModal from "../modal/readmodal";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { commentPost } from "../../api/comments";
import { getBoard } from "../../api/board";

function Feedcard({ boardId, imgurl, nickname, profileimg, date, content, comments }) {
  const [isLike, setIsLike] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setIsComment] = useState('')
  const queryClient = useQueryClient();

  const LikeHandler = () => {
    setIsLike(!isLike)
  }

  const ModalOpenHandler = () => {
    setIsOpen(!isOpen)
  }

  const mutation = useMutation(deleteBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
  });

  function DeleteboardHandler(boardId) {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      mutation.mutate(boardId);
    }
  }

  const CommentChangeHandler = (e) => {
    setIsComment(e.target.value)
  }

  const mutations = useMutation(commentPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const CommentPostHandler = () => {
    mutations.mutate(newComment)
    setIsComment('')
  }

  const newComment = {
    "contents": isComment,
    "boardId": boardId
  }

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
          <Textbutton onClick={() => DeleteboardHandler(boardId)}>삭제</Textbutton>
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
          {isOpen ? <ReadModal
            boardId={boardId}
            imageUrl={imgurl}
            nickname={nickname}
            profileimg={profileimg}
            date={date}
            content={content}
            comments={comments}
          /> : null}
        </Middlediv>
        <Contentsbox>{content}</Contentsbox>

        {/* 댓글입력창 div */}
        <CommentContainer>
          <CommentHomeInput
            placeholder="댓글 입력"
            onChange={CommentChangeHandler}
          ></CommentHomeInput><Textbutton onClick={CommentPostHandler}>게시</Textbutton>
        </CommentContainer>
      </Container>
    </>
  )
}

export default Feedcard;