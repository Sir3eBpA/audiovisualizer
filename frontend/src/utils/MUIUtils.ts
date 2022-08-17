export type BreakpointsColumns = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number
}

export const getColumnsAmount = (width: number, breakpoints: any, columns: BreakpointsColumns) => {
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
}
