import React from "react";
import { Container, Profilephoto, Nicknamestyle, Storybox } from "./styles";

function Storybar() {
    return (
        <>
            <Container>
                {/* 이미지 + 닉네임 */}
                <Storybox>
                    <Profilephoto url='Kazha.png' />
                    <Nicknamestyle>Kazha</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Eunchae.png' />
                    <Nicknamestyle>Eunchae</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Sakura.jpg' />
                    <Nicknamestyle>Sakura</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Yunjin.png' />
                    <Nicknamestyle>Yunjin</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Kazha.png' />
                    <Nicknamestyle>Kazha</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Eunchae.png' />
                    <Nicknamestyle>Eunchae</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Sakura.jpg' />
                    <Nicknamestyle>Sakura</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Yunjin.png' />
                    <Nicknamestyle>Yunjin</Nicknamestyle>
                </Storybox>
            </Container>
        </>
    )
}

export default Storybar;