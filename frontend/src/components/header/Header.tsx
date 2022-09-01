import { Container, BackgroundFade, LeftSideContent, LinkElement, Logo, MiddleSideContent } from "./HeaderElements";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Pages } from "../../App";
import { useNavigate } from "react-router-dom";
import { MobileMenuItem } from "./MobileMenuItem";

const renderDesktopHeader = () => {
  return (
    <>
      <LeftSideContent>
        <Logo />
      </LeftSideContent>

      <MiddleSideContent>
        {Pages.map(item => (
          <LinkElement key={item.name} to={item.url}>{item.name}</LinkElement>
        ))}
      </MiddleSideContent>
    </>
  );
};

const renderMobileHeader = (onClick: () => void) => {
  return (
    <>
      <LeftSideContent>
        <Logo />
      </LeftSideContent>

      <Box flexGrow={1}
           paddingTop={1.5}>
        <AppBar position="static"
                color="transparent"
                elevation={0}>
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onClick}>
              <AiOutlineMenu size={45} color="white" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Container>
        {isSmallScreen ? renderMobileHeader(() => setOpen(!open)) : renderDesktopHeader()}
      </Container>
      <BackgroundFade />

      <MobileMenu open={open}
                  onClose={() => setOpen(false)}
                  width={350}>
        <Box>
          {Pages.map((value, index) => (
            <MobileMenuItem key={value.name}
                            page={value}
                            onClick={url => navigate(url)}/>
          ))}
        </Box>
      </MobileMenu>
    </Box>
  );
};
