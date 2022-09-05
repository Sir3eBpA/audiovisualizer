import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { HomePresetsList } from "../../components/homePresetsList/HomePresetsList";
import { DoublePanel } from "../../components/doublePanel/DoublePanel";
import { Box, Typography } from "@mui/material";
import { AiFillSave, AiOutlineCloudServer } from "react-icons/ai";
import { ImageBox } from "../../components/imageBox/ImageBox";
import { IoMdMusicalNote } from "react-icons/io";
import { IoShapes } from "react-icons/io5";
import { IconWithTextItem } from "../../components/doublePanel/IconWithTextItem";
import { MdWallpaper } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function goToVisualizer(id: string) { navigate(`/visualizer/${id}`); }

    Emitter.on(EmitterEvents.OPEN_VISUALIZER, goToVisualizer);
    return function() { Emitter.off(EmitterEvents.OPEN_VISUALIZER, goToVisualizer); }
  });

  return (
    <>
      <Header />

      <DoublePanel spacing={5} marginTop={5}>
        <Box padding="1rem 1.5rem">
          <Typography fontWeight="bold" variant="h2">Create and Inspire</Typography>
          <Box display="flex"
               flexDirection="column"
               rowGap={4}
               marginTop={3}
               alignItems="flex-start">
            <IconWithTextItem icon={AiFillSave}
                              header="Save your creations"
                              body="Save and share your favorite presets with others with a single button press!"/>

            <IconWithTextItem icon={AiOutlineCloudServer}
                              header="Browse others"
                              body="Hundreds of other creations are available for you to try out!"/>

            <IconWithTextItem icon={IoMdMusicalNote}
                              header="Try with your songs"
                              body="Yes you read it right, check it all out with your own songs!"/>
          </Box>
        </Box>
        <video width="100%" height="450px" autoPlay muted loop src="preview1.webm" />
      </DoublePanel>

      <DoublePanel marginTop={5} spacing={5} invertOnSmallScreens>
        <video width="100%" height="450px" autoPlay muted loop src="preview1.webm" />

        <Box padding="1rem 1.5rem">
          <Typography fontWeight="bold" variant="h2">Experiment</Typography>

        <Box display="flex"
             flexDirection="column"
             rowGap={4}
             marginTop={3}
             alignItems="flex-start">
            <IconWithTextItem icon={IoShapes}
                              header="Colors & Shapes"
                              body="Pick your own colors and modify the shapes from the pre-existing presets!"/>

            <IconWithTextItem icon={MdWallpaper}
                              header="Backgrounds"
                              body="Single Colors, Gradients, Animated Gradients, Youtube Video... whatever you want!"/>

            <IconWithTextItem icon={BsFillCameraVideoFill}
                              header="Effects"
                              body="Screen Shake and Camera Distance are there to add as much vibe to your song as possible!"/>
          </Box>
        </Box>
      </DoublePanel>

      <HomePresetsList cols={5} rows={2} />
      <Footer />
    </>
  );
};
