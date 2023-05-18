import React, { useEffect, useState } from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";
import { followPost, userInquiry } from "../../api/users";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getProfileData } from "../../api/file";

function Followarea({ nickName }) {
  const queryClient = useQueryClient();
  const { data: users, status } = useQuery('users', userInquiry)
  const [profileData, setProfileData] = useState(null)

  const followMutation = useMutation(followPost, {
    onMutate: async (newData) => {
      await queryClient.cancelQueries('users')

      const previousValue = queryClient.getQueryData('users')

      queryClient.setQueryData('users', (oldData) => {
          return {
              ...oldData,
              content: oldData.content.map(user =>
                  user.nickName === newData.nickName
                      ? { ...user, isFollowing: !user.isFollowing }
                      : user
              ),
          }
      })

      return { previousValue }
  },
  onError: (previousValue) =>
      queryClient.setQueryData('users', previousValue),
  onSettled: () => {
      queryClient.invalidateQueries('users')
  },
})

  useEffect(() => {
    const loadProfileData = async () => {
      const data = await getProfileData()
      setProfileData(data)
    }
    loadProfileData()
  }, [])

  if (status === 'loading') {
    return <p>불러오는중...</p>
  }

  if (status === 'error') {
    return <p>데이터를 불러올수 없습니다.</p>
  }

  const handleClick = async (clickedNickName) => {
    try {
      followMutation.mutate({ nickName: clickedNickName });
    } catch (error) {
      console.log('팔로우/언팔로우 요청 처리 중 에러 발생:', error)
    }
  }

  return (
    <>
      <Container>
        {users && users.content?.map((members) => {
          if (members.nickName === nickName) {
            return null
          } else {
            return (
              <Nicknamecontainer key={members.id}>
                <Divstyle>
                  <Profilephoto url={members.img ? members.img : profileData?.img} />
                  <Nickname>{members.nickName}</Nickname>
                </Divstyle>
                <Textbutton
                  onClick={() => handleClick(members.nickName)}>
                  {members.isFollowing ? '언팔로우' : '팔로우'}
                </Textbutton>
              </Nicknamecontainer>
            )
          }
        }
        )}
      </Container>
    </>
  )
}

export default Followarea