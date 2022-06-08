import * as React from "react";
import { ReactNode } from "react";
import { Container } from "./VerticalGroupElements";

export type VerticalGroupProps = {
  children?: ReactNode,
}

export const VerticalGroup = (props: VerticalGroupProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
