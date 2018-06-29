import Typography from "typography";

import deYoung from "typography-theme-de-young";

const typography = new Typography(deYoung);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
