import React, { useEffect, useState } from "react";
import { Descbox, Container, Profilephoto, Nicknamestyle, Storybox, Infobox, Infocontainer, Infospace } from "./styles";
import { Textbutton } from "../common/textbutton";
import { useNavigate } from "react-router-dom";
import { getProfilePhoto } from "../../api/file";
import { myfeedInqury } from "../../api/users";

function Profiletop() {
    const navigate = useNavigate()
    const [profilepic, setProfilePic] = useState('')
    const [followerCount, setFollowerCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)
    const [postCount, setPostCount] = useState(0)

    const handleSubmit = () => navigate('/Profilemodify')

    useEffect(() => {
        const fetchProfilePhoto = async () => {
            const photoUrl = await getProfilePhoto()
            setProfilePic(photoUrl)
        }
        const fetchProfile = async () => {
            const profileData = await myfeedInqury()
            setFollowerCount(profileData.followerCnt)
            setFollowingCount(profileData.followingCnt)
            setPostCount(profileData.boardResponseDtoList.length)
        }

        fetchProfilePhoto()
        fetchProfile()
    }, [])



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
                        <div>게시글 {postCount}</div>
                        <div>팔로워 {followerCount}</div>
                        <div>팔로잉 {followingCount}</div>
                    </Infobox>
                    <Descbox>소개글은 최대 50자 textarea 로</Descbox>
                </Infospace>
            </Container>
        </>
    )
}

export default Profiletop;