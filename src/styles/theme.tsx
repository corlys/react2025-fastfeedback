import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  // mono: `'Menlo', monospace`,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
