import React, { useState, useRef } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { uploadimagePost } from "../api/file";

function Editprofile() {
    const navigate = useNavigate()
    const [img, setImg] = useState(null)
    const [content, setContent] = useState('')
    const editImageMutation = useMutation(uploadimagePost)
    const profileimg = useRef()

    const handleImageChange = (e) => {
        setImg(e.target.files[0])
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
        formData.append('img', img)

        editImageMutation.mutate(formData, {
            onSuccess: () => {
                navigate('/profile')
            }
        })
    }


    return (
        <div>
            <form onSubmit={handleImageSubmit}>
                <input type="file" onChange={handleImageChange} ref={profileimg} style={{ display: 'none' }} />
                <button type="button" onClick={handleBtnClick}>프로필 사진 바꾸기</button>
            </form>
            <form>
                <input type="text" value={content} onChange={handlecontentChange} placeholder="소개글" />
                <button type="submit">소개글 변경</button>
            </form>
            <button>제출</button>
        </div>
    )
}

export default Editprofile