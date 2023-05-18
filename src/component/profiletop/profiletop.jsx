import React, { useEffect, useState } from "react";
import { Descbox, Container, Profilephoto, Nicknamestyle, Storybox, Infobox, Infocontainer, Infospace } from "./styles";
import { Textbutton } from "../common/textbutton";
import { useNavigate, Link } from "react-router-dom";
import { getProfileData } from "../../api/file";
import { myfeedInqury } from "../../api/users";

function Profiletop() {
    const navigate = useNavigate()
    const [followerCount, setFollowerCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)
    const [postCount, setPostCount] = useState(0)
    const [profileData, setProfileData] = useState(null)

    const handleSubmit = () => navigate('/Profilemodify')

    useEffect(() => {
        const fetchProfileData = async () => {
            const profileData = await getProfileData() 
            setProfileData(profileData)
        }
        const fetchProfile = async () => {
            const profileData = await myfeedInqury()
            setFollowerCount(profileData.followerCnt)
            setFollowingCount(profileData.followingCnt)
            setPostCount(profileData.boardResponseDtoList.length)
        }

        fetchProfileData()
        fetchProfile()
    }, [])

    return (
        <>
            <Container>
                {/* 이미지 + 닉네임 */}
                <Storybox>
                    <Profilephoto url={profileData?.img} />
                </Storybox>
                <Infospace>
                    <Infocontainer>
                        <Nicknamestyle>{profileData?.nickName}</Nicknamestyle>
                        <Textbutton onClick={handleSubmit}>프로필편집</Textbutton>
                    </Infocontainer>
                    <Infobox>
                        <div>게시글 {postCount}</div>
                        <div><Link to='/follower'>팔로워</Link> {followerCount}</div>
                        <div><Link to='/following'>팔로잉</Link> {followingCount}</div>
                    </Infobox>
                    <Descbox>{profileData?.contents}</Descbox>
                </Infospace>
            </Container>
        </>
    )
}

export default Profiletop;