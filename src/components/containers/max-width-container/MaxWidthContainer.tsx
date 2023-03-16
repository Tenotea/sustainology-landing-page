import type { MaxWidthContainerProps } from "./MaxWidthContainer.types";

export default function MaxWidthContainer(props: MaxWidthContainerProps) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-10">
      {props.children}
    </div>
  );
}
