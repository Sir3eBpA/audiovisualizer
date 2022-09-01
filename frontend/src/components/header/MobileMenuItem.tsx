import { Page } from "../../Constants";
import { Box, Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";

export type MobileMenuItemSettings = {
  page: Page,
  onClick: (url: string) => void,
}

export const MobileMenuItem = (props: MobileMenuItemSettings) => {
  const page = props.page;

  return (
    <Box marginBottom={1}>
      <ListItem key={page.name} disablePadding>
        <ListItemButton>
          <ListItemText onClick={() => props.onClick(page.url)} primary={page.name} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Box>
  );
};
