import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export type ContainerProps = {
  containerRowGap?: number|string,
}

export const ContainerElement = styled(Box)<ContainerProps>( ({containerRowGap}) => ({
  position: "fixed",
  bottom: 0,
  right: 0,
  padding: "2.5em",
  rowGap: containerRowGap || "1em",
  display: "flex",
  flexDirection: "column-reverse"
}));
