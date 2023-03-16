import type { AllHTMLAttributes, ReactNode } from "react";

export type LinkContainerProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
} & AllHTMLAttributes<HTMLAnchorElement>;
