import styled from "styled-components";

export const Picker = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  vertical-align: center;
  column-gap: 1em;
`

export const Label = styled.p`
  font-size: 1.2em;
  margin: 0.2em 0.5em;
`

export const Swatch = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

export const Popover = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  border-radius: 9px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  z-index: 15;
`
