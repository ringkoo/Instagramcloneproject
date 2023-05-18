import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { followuserInquiry, followPost } from "../api/users";

function Follower() {
    const queryClient = useQueryClient();
    const { data: followers, status } = useQuery('followers', followuserInquiry)

    const unfollowMutation = useMutation(followPost, {
        onSuccess: () => {
            queryClient.invalidateQueries('followers')
        }
    })

    if (status === 'loading') {
        return <p>불러오는중...</p>
    }

    if (status === 'error') {
        return <p>데이터를 불러올수 없습니다.</p>
    }

    const handleUnfollow = async (nickName) => {
        try {
            unfollowMutation.mutate({ nickName });
        } catch (error) {
            console.log('언팔로우 요청 처리 중 에러 발생:', error)
        }
    }

    return (
        <>
            <h1>Following</h1>
            {followers?.content && followers.content.map((follower) => {
                return (
                <div key={follower.id}>
                    {follower.img && <img src={follower.img} alt={follower.nickName} />}
                    <p>{follower.nickName}</p>
                    <button onClick={() => handleUnfollow(follower.nickName)}>언팔로우</button>
                </div>
            )
        })}
        </>
    )
}
export default Follower