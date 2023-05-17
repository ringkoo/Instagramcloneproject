import React, { useState, useRef, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { getProfileData, uploadimagePut } from "../api/file";
import {
    Container,
    Form,
    Button,
    Input,
    Button1,
    Div,
    Profilephoto
} from "./styles";

function Editprofile() {
    const navigate = useNavigate()
    const [image, setImg] = useState(null)
    const [contents, setContent] = useState('')
    const editImageMutation = useMutation(uploadimagePut)
    const profileimg = useRef()
    const [profilePic, setProfilePic] = useState('')

    useEffect(() => {
        const fetchProfilePic = async () => {
            const url = await getProfileData()
            setProfilePic(url)
        }
        fetchProfilePic()
    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImg(file)
    }

    const handlecontentChange = (e) => {
        setContent(e.target.value)
    }

    const handleBtnClick = () => {
        profileimg.current.click()
    }

    const handleImageSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const feedData = { contents: contents }
        formData.append("image", image)
        formData.append("feed", new Blob([JSON.stringify(feedData)], { type: "application/json" }))
        editImageMutation.mutate(formData, {
            onSuccess: () => {
                navigate('/profile')
            }
        })
    }

    return (
        <Container>
            <Form onSubmit={handleImageSubmit}>
                <Div>
                    <Profilephoto url={profilePic}/>
                    <Input type="file" onChange={handleImageChange} ref={profileimg} style={{ display: 'none' }} />
                </Div>
                <Div>
                    <Button1 type="button" onClick={handleBtnClick}>프로필 사진 바꾸기</Button1>
                    <Input type="text" value={contents} onChange={handlecontentChange} placeholder="소개글" />
                    <Button type="submit">제출</Button>
                </Div>
            </Form>
        </Container>
    )
}

export default Editprofile