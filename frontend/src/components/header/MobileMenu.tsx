import { ReactElement, useState } from "react";
import { Box, Drawer, List, paperClasses } from "@mui/material";

export type MobileMenuSettings = {
  children?: ReactElement,
  width?: number,
  onClose: () => void,
  open: boolean,
}

export const MobileMenu = (props: MobileMenuSettings) => {
  return (
    <Box>
      <Drawer anchor="right"
              open={props.open}
              onClose={props.onClose}
              PaperProps={{
                sx: {
                  width: props.width,
                  backgroundColor: "black"
                }
              }}>
        <List>
          {props.children}
        </List>
      </Drawer>
    </Box>
  );
};
