import { Box, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { PresetCardElement } from "./PresetCardElements";

export type PresetCardData = {
  imageUrl: string,
  text: string,
}

export const PresetCard = (props: PresetCardData) => {
  return (
    <PresetCardElement variant="outlined">
      <CardActionArea>
        <CardMedia component="img"
                   height="150px"
                   image={props.imageUrl}
                   alt="alt text" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </PresetCardElement>
  );
};
