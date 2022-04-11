import "./mylabel.css";
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
export declare const MyLabel: ({ label, size, allCaps, color, customColor, backGround, }: Props) => JSX.Element;
