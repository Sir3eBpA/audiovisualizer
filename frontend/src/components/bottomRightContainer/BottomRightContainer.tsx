import { ReactElement } from "react";
import { ContainerElement } from "./BottomRightContainerElements";

export type ContainerSettings = {
  rowGap?: number|string,
  children?: ReactElement | ReactElement[];
  right?: number|string,
}

export const BottomRightContainer = (props: ContainerSettings) => {
  return (
    <ContainerElement offsetRight={props.right}
                      containerRowGap={props.rowGap}>
      {props.children}
    </ContainerElement>
  );
}
