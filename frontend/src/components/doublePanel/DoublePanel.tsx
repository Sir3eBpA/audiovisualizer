import { ReactNode } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { Fade } from "react-awesome-reveal";

export type DoublePanelSettings = {
  children: [ReactNode, ReactNode];
  columns?: number,
  spacing?: number,
  marginTop?: number,
  invertOnSmallScreens?: boolean,
}

const GetGridOrder = (invert: boolean, column: number) => {
  const invertedColumn = column === 2 ? 1 : 2;
  const order = invert ? invertedColumn : column;
  return ({
    xs: order,
    sm: order,
    md: column,
    lg: column,
    xl: column
  });
}

export const DoublePanel = (props: DoublePanelSettings) => {
  const invertOrder: boolean = props.invertOnSmallScreens || false;

  return (
    <Container>
      <Fade direction="up" triggerOnce>
        <Box marginTop={props.marginTop}>
          <Grid container
                spacing={props.spacing}
                columns={12}>
            <Grid item xs={12} sm={12} md={6} order={ GetGridOrder(invertOrder, 1) }>
              {props.children[0]}
            </Grid>
            <Grid item xs={12} sm={12} md={6} order={ GetGridOrder(invertOrder, 2) }>
              {props.children[1]}
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Container>
  );
};
