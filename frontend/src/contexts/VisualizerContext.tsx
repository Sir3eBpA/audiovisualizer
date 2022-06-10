import {createContext, useContext} from "react";

// ====================
// Visualizer Context
// ====================

export type MenusVisibility = {
  songsVisible: boolean,
  settingsVisible: boolean
}

export type VisualizerState = {
  menus: MenusVisibility,
  setMenusVisibility: (data: MenusVisibility) => void
}

export const VisualizerContext = createContext<VisualizerState>({
  menus: { settingsVisible: false, songsVisible: false },
  setMenusVisibility: () => {}
});

export const useVisualizerContext = () => useContext(VisualizerContext);
