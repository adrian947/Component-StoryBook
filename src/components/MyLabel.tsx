import "./mylabel.css";
import { CustomFontColor } from "../stories/components/MyLabel.stories";

export interface Props {
  /**
   * Is this name for label
   */
  label: string;
  /**
   * Is this size for label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Text transform Uppercase
   */
  allCaps: boolean;
  /**
   * Basic color label
   */

  color?: "primary" | "secondary" | "tertiary";
  /**
   * Custom Color label
   */
  customColor?: string;

  backGround?: string;
}

/**
 * Label component for user interaction
 */
export const MyLabel = ({
  label = "no Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  customColor,
  backGround = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${allCaps && "allCaps"} label text-${color}`}
      style={{ color: customColor, backgroundColor: backGround }}
    >
      {label}
    </span>
  );
};
