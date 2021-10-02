import { Colors } from "./types";

export const baseColors = {
  failure: "#dc2625",
  primary: "#ffd800",
  primaryBright: "#459fff",
  primaryDark: "#218CFF",
  secondary: "#2a45ca",
  success: "#ffd800",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#2a4cca",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#000000",
  dropdown: "#1E1D20",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#EFF4F5",
  text: "#5E7FA3",
  textDisabled: "#BDC2C4",
  disabled: "#E9EAEB",
  textSubtle: "#5E7FA3",
  borderColor: "#262948",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#1f1f1f",
  contrast: "#FFFFFF",
  dropdown: "#F6F6F6",
  invertedContrast: "#191326",
  input: "#1b1d31",
  inputSecondary: "#d7caec",
  tertiary: "#353547",
  text: "#e7e8ea",
  textDisabled: "#666171",
  disabled: "#1f1f1f",
  textSubtle: "#ffd800",
  borderColor: "#262948",
  card: "#1b1d31",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
