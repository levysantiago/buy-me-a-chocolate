import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    orange: "#F07606",
    brown: "#9b5d08",
    brownLight: "#FFBE5C",
    brownLight2: "#976A2D",
    brownMedium: "#3F2706",
    brownDark: "#0f0901",
    black: "#150D02",
    white: "#fafafa",
  },
  fonts: {
    title: "Roboto-Bold",
    title2: "Roboto-Medium",
    text: "Roboto-Light",
  },
};

export type ITheme = typeof theme;

const Theme: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
