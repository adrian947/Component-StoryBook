import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button radius
   */
  radius: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  radius,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const radiusMode = radius && "storybook-button--radius";

  return (
    <button
      type='button'
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        radiusMode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}!!!
    </button>
  );
};

export default Button;
