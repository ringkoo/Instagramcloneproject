import React from "react";
import { useQuery } from "react-query";
import { followuserInquiry } from "../api/users";

function Follower() {
    const { data: followers, status } = useQuery('followers', followuserInquiry)

    if (status === 'loading') {
        return <p>불러오는중...</p>
    }

    if (status === 400) {
        return <p>데이터를 불러올수 없습니다.</p>
    }

    return (
        <>
            <h1>Followers</h1>
            {followers?.content && followers.content.map((follower) => {
                return (
                    <div key={follower.id}>
                        {follower.img && <img src={follower.img} alt={follower.nickName} />}
                        <p>{follower.nickName}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Follower;