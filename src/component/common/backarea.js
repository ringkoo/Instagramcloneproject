import styled from "styled-components";

const Backarea = styled.div`
    display:flex;
    justify-content:space-between;
`

const Feedbox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center; 
`

const Homenavbox = styled.div`
    width:260px;
    min-width:260px;
`

const Profileback = styled.div`
    display:flex;
    justify-content:center;
`

const Profilecontainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `

const Profileimgbox = styled.div`
    display:flex;
    gap : 3px;
    width:600px;
    height:auto;
    flex-wrap:wrap;
`

const Pronavbox = styled.div`
    width:260px;
    min-width:260px;
    background-color:red;
`

export { Pronavbox, Backarea, Feedbox, Homenavbox, Profileback, Profilecontainer, Profileimgbox }