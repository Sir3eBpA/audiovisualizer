import { ReactElement } from "react";
import { ContainerElement } from "./BottomRightContainerElements";

export type ContainerSettings = {
  rowGap?: number|string,
  children?: ReactElement | ReactElement[];
}

export const BottomRightContainer = (props: ContainerSettings) => {
  return (
    <ContainerElement containerRowGap={props.rowGap}>
      {props.children}
    </ContainerElement>
  );
}
