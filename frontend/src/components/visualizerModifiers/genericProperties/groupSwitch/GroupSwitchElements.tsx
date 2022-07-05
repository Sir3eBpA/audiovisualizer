import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const SwitchContainer = styled(Box)({
  display: "flex",
  verticalAlign: "center",
  textAlign: "center",
  width: "100%",
  position: "relative"
})

export const Label = styled(Typography)({
  textAlign: "center",
  position: "absolute",
  left: "50%",
  top: "50%",
  verticalAlign: "middle",
  transform: "translate(-50%, -50%)"
});
