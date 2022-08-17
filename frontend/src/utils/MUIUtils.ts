export type BreakpointsColumns = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number
}

export const getColumnsAmount = (width: number, breakpoints: any, columns: BreakpointsColumns) => {
  if (width < breakpoints.sm) {
    return 1
  } else if (width < breakpoints.md) {
    return 2
  } else if (width < breakpoints.lg) {
    return 3
  } else if (width < breakpoints.xl) {
    return 4
  } else {
    return 5
  }
}
