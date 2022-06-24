import React, { ReactElement } from "react";
import { useVisualizerContext } from "../../contexts/VisualizerContext";
import { Drawer } from "@mui/material";
import { PropertiesContainer } from "./PropertiesDisplayerElements";

export type PropertiesDisplayerSettings = {
  children?: ReactElement | ReactElement[]
}

export const PropertiesDisplayer = (props: PropertiesDisplayerSettings) => {
  const { menus, setMenusVisibility } = useVisualizerContext();

  return (
    <Drawer anchor="right"
            open={menus?.settingsVisible}
            onClose={() => setMenusVisibility({ ...menus, settingsVisible: !menus.settingsVisible })}>
      <PropertiesContainer>
        {props.children}
      </PropertiesContainer>
    </Drawer>
  );
};
