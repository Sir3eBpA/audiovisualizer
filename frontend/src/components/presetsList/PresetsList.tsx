import { useEffect, useState } from "react";
import { PresetsCardList } from "./PresetsListElements";
import { PresetCard } from "../presetCard/PresetCard";
import { Box, Container, Paper, useTheme } from "@mui/material";
import { ResponsiveColumns, getColumnsAmount, defaultColumnsBreakpoints } from "../../utils/MUIUtils";
import { Fade } from "react-awesome-reveal";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import { VisualizerData } from "../../models/VisualizerData";

export type HomePresetsListData = {
  rowHeight?: number,
  gap?: number,
  columnsOverride?: ResponsiveColumns,
  data: VisualizerData[],
}

const CalculateAvailableColumns = (width: number, breakpoints: any, columnsTable: any) => {
  return getColumnsAmount(width, breakpoints, columnsTable);
};

export const PresetsList = (props: HomePresetsListData) => {
  const theme = useTheme();

  const calculateDimensions = () => {
    const width = window.innerWidth;
    const breakpoints = theme.breakpoints.values;
    const columns = props.columnsOverride || defaultColumnsBreakpoints;
    return CalculateAvailableColumns(width, breakpoints, columns);
  };

  const [columns, setColumns] = useState(calculateDimensions());

  useEffect(() => {
    function onResize() { setColumns(calculateDimensions); }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <Paper>
        <Fade direction="up"
              big={false}
              triggerOnce
              duration={500}>

          <Box pb={2}>
            <PresetsCardList rowHeight={props.rowHeight}
                             cols={columns}
                             gap={props.gap || 0}>
              {props.data.map(x => <PresetCard marginTop={4}
                                               id={x.id}
                                               imageUrl={x.previewUrl}
                                               text={x.name}
                                               onClick={(id: string) => Emitter.emit(EmitterEvents.OPEN_VISUALIZER, id)}
                                               key={x.name} />)}
            </PresetsCardList>
          </Box>

        </Fade>
      </Paper>
    </Container>
  );
};
