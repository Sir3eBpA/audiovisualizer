import {createContext, useContext} from "react";

// ====================
// Page Context
// ====================

export type PageData = {
  right: number,
  inspectorOn: boolean,
}

export type PageState = {
  pageData: PageData,
  setPageData: (data: PageData) => void,
}

export const DefaultPageData = {
  right: 0,
  inspectorOn: false,
}

export const PageContext = createContext<PageState>({
  pageData: {...DefaultPageData},
  setPageData: () => {},
});

export const usePageContext = () => useContext(PageContext);
