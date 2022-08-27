import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { HomePresetsList } from "../../components/homePresetsList/HomePresetsList";
import { DoublePanel } from "../../components/doublePanel/DoublePanel";
import { Box, Typography } from "@mui/material";
import { RoundedIcon } from "../../components/roundedIcon/RoundedIcon";
import { AiFillSave, AiOutlineCloudServer } from "react-icons/ai";
import { ImageBox } from "../../components/imageBox/ImageBox";
import { IoMdMusicalNote } from "react-icons/io";
import { Zoom } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <Header />

      <DoublePanel spacing={5} marginTop={5}>
        <Box padding="1rem 1.5rem">
          <Typography fontWeight="bold" variant="h2">Create and Inspire</Typography>

          <Box display="flex" flexDirection="column" rowGap={4} marginTop={3} alignItems="flex-start">

            <Box display="flex" alignItems="center" flexDirection="row">
              <Box paddingRight={3} marginLeft={2}>
                <RoundedIcon icon={AiFillSave}
                             iconSize={45}
                             backgroundColor="white"
                             padding={0.9}
                             borderRadius={90} />
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="bold">Save your creations</Typography>
                <Typography>
                  Save and share your favorite presets with others with a single button press!
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="row">
              <Box paddingRight={3} marginLeft={2}>
                <RoundedIcon icon={AiOutlineCloudServer}
                             iconSize={45}
                             backgroundColor="white"
                             padding={0.9}
                             borderRadius={90} />
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="bold">Browse others</Typography>
                <Typography>
                  Hundreds of other creations are available for you to try out!
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="row">
              <Box paddingRight={3} marginLeft={2}>
                <RoundedIcon icon={IoMdMusicalNote}
                             iconSize={45}
                             backgroundColor="white"
                             padding={0.9}
                             borderRadius={90} />
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="bold">Try with your songs</Typography>
                <Typography>
                  Yes you read it right, check it all out with your own songs!
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>
        <ImageBox width="100%" height="450px" src="image1.png" />
      </DoublePanel>

      <DoublePanel marginTop={5} spacing={5}>
        <ImageBox width="100%" height="450px" src="image1.png" />
        <Box padding="1rem 1.5rem">
          <Typography fontWeight="bold" variant="h1">Save</Typography>
          <RoundedIcon icon={AiFillSave}
                       iconSize={55}
                       backgroundColor="white"
                       padding={1}
                       margin={1}
                       borderRadius={90} />
          <Typography>
            Save and share your favorite presets with others with a single button press!
          </Typography>
        </Box>
      </DoublePanel>

      <HomePresetsList cols={5} rows={2} />
      <Footer />
    </>
  );
};
