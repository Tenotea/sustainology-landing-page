import Link from "next/link";
import type { LinkContainerProps } from "./LinkContainer.types";

export default function LinkContainer(props: LinkContainerProps) {
  if (props.external) {
    return <a {...props}> {props.children}</a>;
  }
  return <Link {...props}>{props.children}</Link>;
}
