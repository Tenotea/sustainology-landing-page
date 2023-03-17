import type { AllHTMLAttributes } from "react";

export type BaseButtonProps = Omit<
  AllHTMLAttributes<HTMLButtonElement>,
  "className" | "type"
> & {
  type?: "submit" | "reset" | "button" | undefined;
  tw?: string;
  applyoutlined?: string;
  applygradient?: string;
  applygradient2?: string;
};
