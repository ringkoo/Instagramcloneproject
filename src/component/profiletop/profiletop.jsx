import React from "react";
import { Descbox, Container, Profilephoto, Nicknamestyle, Storybox, Infobox, Infocontainer, Infospace } from "./styles";
import { Textbutton } from "../common/textbutton";

function Profiletop() {
    return (
        <>
            <Container>
                {/* 이미지 + 닉네임 */}
                <Storybox>
                    <Profilephoto url='Chaewon.png' />
                </Storybox>
                <Infospace>
                    <Infocontainer>
                        <Nicknamestyle>Chaewon</Nicknamestyle>
                        <Textbutton>프로필편집</Textbutton>
                    </Infocontainer>
                    <Infobox>
                        <div>게시글 100</div>
                        <div>팔로워 100</div>
                        <div>팔로잉 100</div>
                    </Infobox>
                    <Descbox>소개글은 최대 50자 textarea 로</Descbox>
                </Infospace>
            </Container>
        </>
    )
}

export default Profiletop;