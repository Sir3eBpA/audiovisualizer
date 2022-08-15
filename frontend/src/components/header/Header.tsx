import { Container, BackgroundFade, LeftSideContent, LinkElement, Logo, MiddleSideContent } from "./HeaderElements";

export const Header = () => {
  return (
    <>
      <Container>
        <LeftSideContent>
          <Logo />
        </LeftSideContent>

        <MiddleSideContent>
          <LinkElement to="/">Home</LinkElement>
          <LinkElement to="/browse">Browse</LinkElement>
          <LinkElement to="/visualizer">Create</LinkElement>
        </MiddleSideContent>

      </Container>
      <BackgroundFade />
    </>
  );
};
