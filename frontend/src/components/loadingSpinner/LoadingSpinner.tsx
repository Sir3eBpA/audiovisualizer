import { Box, CircularProgress } from "@mui/material";
import { SpinnerBox, SpinnerBoxSettings } from "./LoadingSpinnerElements";

export type LoadingSpinnerSettings = {
  boxSettings?: SpinnerBoxSettings
  size?: number,
}

export const LoadingSpinner = (props: LoadingSpinnerSettings) => {
  const boxSettings = props.boxSettings || {};

  return (
    <SpinnerBox justifyContent={boxSettings.justifyContent || "center"}
                display={boxSettings.display || "flex"}
                overflow="hidden"
                margin={boxSettings.margin}>
      <CircularProgress size={props.size || 100} />
    </SpinnerBox>
  );
};
