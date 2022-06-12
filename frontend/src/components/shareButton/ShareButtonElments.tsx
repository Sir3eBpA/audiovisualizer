import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";

export const ShareButtonContainer = styled(Box)({
  position: "fixed",
  bottom: 0,
  right: 0,
  padding: "2.5em",
});

export const FabShare = styled(Fab)({
  transition: "all 0.2s ease-in-out",

  '&:hover': {
    transform: "scale(1.2)",
    transition: "all 0.2s ease-in-out",
  }
});
