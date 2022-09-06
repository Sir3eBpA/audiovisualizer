import { useEffect, useState } from "react";
import { PresetsList } from "./HomePresetsListElements";
import { PresetCard } from "../presetCard/PresetCard";
import { Box, Container, Paper, useTheme } from "@mui/material";
import { BreakpointsColumns, getColumnsAmount } from "../../utils/MUIUtils";
import { Fade } from "react-awesome-reveal";
import { asyncGetTopVisualizers } from "../../services/Visualizer";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import { VisualizerData } from "../../models/VisualizerData";

export type HomePresetsListData = {
  cols?: number,
  rows?: number,
  rowHeight?: number,
  gap?: number
}

const columnsDefine: BreakpointsColumns = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

const CalculateAvailableColumns = (width: number, breakpoints: any) => {
  return getColumnsAmount(width, breakpoints, columnsDefine);
};

export const HomePresetsList = (props: HomePresetsListData) => {
  const theme = useTheme();
  const [data, setData] = useState<VisualizerData[]>([]);
  const [columns, setColumns] = useState(CalculateAvailableColumns(window.innerWidth, theme.breakpoints.values));

  useEffect(() => {
    const data: VisualizerData[] = [];
    const rows = props.rows || 2;
    const cols = props.cols || 5;

    const fetchData = async () => {
      const returnData = await asyncGetTopVisualizers(cols * rows);
      const visualizers = returnData.visualizers;
      setData(visualizers);
    }

    fetchData();
  }, []);

  const updateDimensions = () => {
    setColumns(CalculateAvailableColumns(window.innerWidth, theme.breakpoints.values));
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <Paper>
        <Fade direction="up"
              big={false}
              triggerOnce
              duration={500}>

          <Box pb={2}>
            <PresetsList rowHeight={props.rowHeight}
                         cols={columns}
                         gap={props.gap || 0}>
              {data.map(x => <PresetCard marginTop={4}
                                         id={x.id}
                                         imageUrl={x.previewUrl}
                                         text={x.name}
                                         onClick={(id: string) => Emitter.emit(EmitterEvents.OPEN_VISUALIZER, id)}
                                         key={x.name} />)}
            </PresetsList>
          </Box>

        </Fade>
      </Paper>
    </Container>
  );
};
