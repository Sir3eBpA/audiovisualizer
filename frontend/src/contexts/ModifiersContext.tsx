import { createContext, useContext } from "react";

// ====================
// Modifiers Context
// ====================

export type KeyValueStructure = {
  [key: string]: any
}

export type ModifiersState = {
  data: KeyValueStructure,
  setData: (data: KeyValueStructure) => void
}

export const ModifiersContext = createContext<ModifiersState>({
  data: {},
  setData: () => {}
});

export const useModifiersContext = () => useContext(ModifiersContext);
