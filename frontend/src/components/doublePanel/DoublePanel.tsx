import { ReactNode } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { Fade } from "react-awesome-reveal";

export type DoublePanelSettings = {
  children: [ReactNode, ReactNode];
  columns?: number,
  spacing?: number,
  marginTop?: number,
}

export const DoublePanel = (props: DoublePanelSettings) => {
  return (
    <Container>
      <Fade direction="up" triggerOnce>
        <Box marginTop={props.marginTop}>
          <Grid container
                spacing={props.spacing}
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
                columns={12}>
            <Grid item xs={12} sm={12} md={6}>
              {props.children[0]}
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              {props.children[1]}
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Container>
  );
};
