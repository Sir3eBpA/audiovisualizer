export type ResponsiveColumns = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number
};

export const defaultColumnsBreakpoints: ResponsiveColumns = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

export const getColumnsAmount = (width: number, breakpoints: any, columns: ResponsiveColumns) => {
  if (width < breakpoints.sm) {
    return columns.xs;
  } else if (width < breakpoints.md) {
    return columns.sm;
  } else if (width < breakpoints.lg) {
    return columns.md;
  } else if (width < breakpoints.xl) {
    return columns.lg;
  } else {
    return columns.xl;
  }
};
