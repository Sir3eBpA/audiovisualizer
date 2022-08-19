import { useEffect, useState } from "react";
import { PresetsList } from "./HomePresetsListElements";
import { PresetCard } from "../presetCard/PresetCard";
import { PresetPreview } from "../../models/Presets";
import { Box, Container, Paper, useTheme } from "@mui/material";
import { BreakpointsColumns, getColumnsAmount } from "../../utils/MUIUtils";
import { Fade } from "react-awesome-reveal";

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
  const [data, setData] = useState<PresetPreview[]>([]);
  const [columns, setColumns] = useState(CalculateAvailableColumns(window.innerWidth, theme.breakpoints.values));

  useEffect(() => {
    const data: PresetPreview[] = [];
    const rows = props.rows || 2;
    const cols = props.cols || 5;

    for (let i = 0; i < cols * rows; ++i) {
      data.push({ name: i.toString(10), imageUrl: "" });
    }

    setData(data);
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
        <Fade direction="up" big={false} triggerOnce duration={500}>
          <Box pb={2}>
            <PresetsList rowHeight={props.rowHeight}
                         cols={columns}
                         gap={props.gap || 0}>
              {data.map(x => <PresetCard marginTop={4} imageUrl={x.imageUrl} text={x.name} key={x.name} />)}
            </PresetsList>
          </Box>
        </Fade>
      </Paper>
    </Container>
  );
};
