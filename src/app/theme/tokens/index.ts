import { colors } from "./colors";
import { spacing } from "./spacing";
import { layout } from "./layout";
import { radius } from "./radius";

export const tokens = {
  colors,
  spacing,
  layout,
  radius,
} as const;

export type Tokens = typeof tokens;