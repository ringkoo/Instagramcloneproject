import styled from "styled-components";

const Box = styled.div`
width: 195px;
height: 195px;
border: 1px solid black;
background-image: url(${props => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
cursor: pointer;
    &:hover{
      filter: brightness(0.5);
    }
`
export { Box }