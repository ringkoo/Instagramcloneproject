import React from "react";
import { Container, Profilephoto, Nicknamestyle, Storybox } from "./styles";

function Storybar() {
    return (
        <>
            <Container>
                {/* 이미지 + 닉네임 */}
                <Storybox>
                    <Profilephoto url='Kazha.png' />
                    <Nicknamestyle>k_a_z_u_h_a__</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Eunchae.png' />
                    <Nicknamestyle>lesserafim.eunchaes</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Sakura.jpg' />
                    <Nicknamestyle>sakura.lesserafim</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='Yunjin.png' />
                    <Nicknamestyle>sullendin</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='https://i.namu.wiki/i/BkLa1BQQ28XdNu2xXDiBlcri7YKlixgl23zw50_h6UfrcPL1X4rpI88ziYdBw3_qnzpvSdR-C4s4L3HCBKwzwV0SgMqkp0S5YCVDDjd9FRAJyw9E-YD70mVma1VXPpLBpuMsIL3bSCytdGKPBtCVIQ.webp' />
                    <Nicknamestyle>minji.newjean</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='https://i.namu.wiki/i/loICqkEZVKfzeKQE0i1-Nn81mD_Q9UR3fBPAxAVmY2jg1gKnoONwTrqTK0sKSjR8RDVV408DcFWWRI-EmnIcJXGDbw4gpZjOW2TstP1W8GVq6DA54a0iXpn1sG8bbySQJD0TUNrnuJ8oDVcEMqanfQ.webp' />
                    <Nicknamestyle>hanni_newjean</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='https://i.namu.wiki/i/ql4PKEofrfDg9ktTFRp2BV5VjtUICkqQYCMEkgIm1LWHWCdmi6d4szEcM8wcImks67-tFkzWsGSBohMweKDj18Vt9lBF8hqwBTRS18YClXN_hXOUlVa4e5OMU6TCqnQQeyvO2OqofBtaq77NdPQ5uA.webp' />
                    <Nicknamestyle>daniellenew.jeans</Nicknamestyle>
                </Storybox>
                <Storybox>
                    <Profilephoto url='https://i.namu.wiki/i/vJVfo-GadKkl84kdEInBGUHy9DlLt0A_ccpsWthXGT64ynuYsGQqXYpY88IqTqJs1aJOndZY_gCshWBue9TvWMhZz9CLvCDjcZRL95mMpDPxFHiwke8H3bkFBvvE5LnL5LE3C_iZycozrabNciHI3Q.webp' />
                    <Nicknamestyle>haerin.newjean</Nicknamestyle>
                </Storybox>
            </Container>
        </>
    )
}

export default Storybar;