import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";

export const ButtonElement = styled(Fab)({
  transition: "all 0.2s ease-in-out",

  '&:hover': {
    transform: "scale(1.2)",
    transition: "all 0.2s ease-in-out",
  }
});
