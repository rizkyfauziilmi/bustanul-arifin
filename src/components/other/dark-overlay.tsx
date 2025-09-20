import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const overlayVariants = cva("absolute inset-0 pointer-events-none", {
  variants: {
    variant: {
      solid: "",
      gradient: "",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "gradient",
    rounded: "none",
  },
});

interface DarkOverlayProps extends VariantProps<typeof overlayVariants> {
  darkness?: number; // value between 0 and 1
  direction?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  className?: string;
}

export const DarkOverlay = ({
  darkness = 0.5,
  direction = "bottom",
  className,
  variant,
  rounded,
}: DarkOverlayProps) => {
  const directionMap: Record<
    NonNullable<DarkOverlayProps["direction"]>,
    string
  > = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
    "top-left": "to top left",
    "top-right": "to top right",
    "bottom-left": "to bottom left",
    "bottom-right": "to bottom right",
  };
  const gradientDirection = directionMap[direction!] || "to bottom";
  const style =
    variant === "solid"
      ? { background: `rgba(0,0,0,${darkness})` }
      : {
          background: `linear-gradient(${gradientDirection}, rgba(0,0,0,${darkness}), transparent)`,
        };

  return (
    <div
      className={cn(overlayVariants({ variant, rounded, className }))}
      style={style}
    />
  );
};
