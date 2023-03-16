import type { AllHTMLAttributes } from "react";

export type BaseButtonProps = Omit<
  AllHTMLAttributes<HTMLButtonElement>,
  "className" | "type"
> & {
  type?: "submit" | "reset" | "button" | undefined;
  tw?: string;
  applyOutlined?: boolean | { theme: string };
  applyGradient?: boolean;
  applyGradient2?: boolean;
};
