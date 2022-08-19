import styled from "styled-components";
import { GiSoundWaves } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: black;
`

export const LeftSideContent = styled.div`
  margin: 10px 0 0 30px;
`

export const MiddleSideContent = styled.div`
  text-align: center;
  display: flex;
  margin: auto;
  vertical-align: center;
  column-gap: 80px;
  position: absolute;
  top: 50px; 
  left: 50%; 
  transform: translate(-50%, -50%);
`

export const BackgroundFade = styled.div`
  height: 150px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%);
  z-index: 1;
`

export const Logo = styled(GiSoundWaves)`
  width: 75px;
  height: 75px;
  color: #eae1e1;
  cursor: pointer;
`

export const LinkElement = styled(Link)`
  font-family: "Bebas Neue";
  font-size: 3em;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: #eae1e1;
  margin: 0 auto auto auto;
  transition: 0.1s ease-in-out;

  &:hover {
    transition: 0.1s ease-in-out;
    color: #c07a97;
    transform: scale(115%);
    transform-origin: center;
  }
`
