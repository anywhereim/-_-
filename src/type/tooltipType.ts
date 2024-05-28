export type TooltipPosition =
  | "top-left"
  | "top-middle"
  | "top-right"
  | "left-top"
  | "left-middle"
  | "left-bottom"
  | "right-top"
  | "right-middle"
  | "right-bottom"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right";

export interface TooltipButtonProps {
  position: TooltipPosition;
  text: string;
  tooltipText: string;
}
