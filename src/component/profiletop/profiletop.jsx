import React, { useEffect, useState } from "react";
import { Descbox, Container, Profilephoto, Nicknamestyle, Storybox, Infobox, Infocontainer, Infospace } from "./styles";
import { Textbutton } from "../common/textbutton";
import { useNavigate } from "react-router-dom";
import { getProfilePhoto } from "../../api/file";

function Profiletop() {
    const navigate = useNavigate()
    const [profilepic, setProfilePic] = useState('')

    const handleSubmit = () => navigate('/Profilemodify')

    useEffect(() => {
        const fetchProfilePhoto = async () => {
            const photoUrl = await getProfilePhoto();
            setProfilePic(photoUrl);
        }
        fetchProfilePhoto();
    }, []);

    return (
        <>
            <Container>
                {/* 이미지 + 닉네임 */}
                <Storybox>
                    <Profilephoto url={profilepic} />
                </Storybox>
                <Infospace>
                    <Infocontainer>
                        <Nicknamestyle>Chaewon</Nicknamestyle>
                        <Textbutton onClick={handleSubmit}>프로필편집</Textbutton>
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