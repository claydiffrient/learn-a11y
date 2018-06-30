import Typography from "typography";
import variables from "./variables";

import deYoung from "typography-theme-de-young";

deYoung.bodyFontFamily = [
  "LatoWeb",
  "Lato",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif"
];

const typography = new Typography(deYoung);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
