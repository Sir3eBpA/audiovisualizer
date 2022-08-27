import styled from "styled-components";

export const BottomAlignedContainer = styled.div`
  position: relative;
  left: 0%;
  bottom: 0%;
  right: 0%;
`

export const Content = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-color: black;
`

export const InvertedBackgroundFade = styled.div`
  height: 6rem;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%);
`
