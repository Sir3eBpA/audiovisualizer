import { useEffect, useState } from "react";
import { PresetsList } from "./HomePresetsListElements";
import { PresetCard } from "../presetCard/PresetCard";
import { PresetPreview } from "../../models/Presets";
import { useTheme } from "@mui/material";
import { BreakpointsColumns, getColumnsAmount } from "../../utils/MUIUtils";

export type HomePresetsListData = {
  cols?: number,
  rows?: number,
  rowHeight?: number
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
  const [data, setData] = useState<PresetPreview[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const data: PresetPreview[] = [];
    const rows = props.rows || 2;
    const cols = props.cols || 5;

    for (let i = 0; i < cols * rows; ++i) {
      data.push({ name: i.toString(10), imageUrl: "" });
    }

    setData(data);
  }, []);

  const [columns, setColumns] = useState(CalculateAvailableColumns(window.innerWidth, theme.breakpoints.values));

  const updateDimensions = () => {
    setColumns(CalculateAvailableColumns(window.innerWidth, theme.breakpoints.values));
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <PresetsList rowHeight={props.rowHeight}
                 cols={columns}
                 gap={25}>
      {data.map(x => <PresetCard imageUrl={x.imageUrl} text={x.name} key={x.name} />)}
    </PresetsList>
  );
};
