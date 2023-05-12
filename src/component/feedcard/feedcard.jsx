import React from "react";
import { Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg } from "./styles";
import { BiComment } from "react-icons/bi";

function Feedcard() {
    const now = new Date();
    const dateString = now.toLocaleString();
    return (
        <>
            <Container>
                {/* 상단 div */}
                <Topdiv>
                    <Profilephoto></Profilephoto>
                    <Nicknamecontainer>
                        <Nickname>Kim Chaewon</Nickname>
                        <Datetime>작성 시간: {dateString}</Datetime>
                    </Nicknamecontainer>
                </Topdiv>

                {/* 이미지div */}
                <Imagediv url='/card1.jpg'></Imagediv>

                {/* 좋아요 댓글 icon div */}
                <Middlediv>
                    <Likeimg>♡</Likeimg>
                    <Commentimg><BiComment /></Commentimg>
                </Middlediv>

                {/* 댓글입력창 div */}
                <div>
                    <input></input><button>게시</button>
                </div>
            </Container>
        </>
    )
}

export default Feedcard;