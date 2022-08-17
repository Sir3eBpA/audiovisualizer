import { Video } from "./HeroSectionElements";

export const HeroSection = () => {
  return (
    <>
      <Video height="1000px"
             width="100%"
             playing url="https://www.youtube.com/watch?v=s9X0_Vb-4zc"
             loop
             muted
      />
    </>
  )
}
