import styled from "styled-components";

export interface ContainerSettings {
  rowGap?: number|string
}

export const Container = styled.div<ContainerSettings>`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.rowGap || "0.5em"};
`
