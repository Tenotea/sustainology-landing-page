import type { BaseButtonProps } from "./BaseButton.types";
import useBaseButton from "./useBaseButton";

export default function BaseButton(props: BaseButtonProps) {
  const { outlinedClassList, gradientClassList } = useBaseButton();
  return (
    <div
      className={
        props.applyGradient
          ? "w-max rounded-md bg-gradient-to-r from-[#37F2AD] to-[#40E2CF] p-[1px]"
          : ""
      }
    >
      <button
        {...props}
        className={`w-full py-2.5 px-5 text-xs
        ${props.applyGradient ? gradientClassList : ""}
        ${props.outlined ? outlinedClassList : ""}
        ${props.tw || ""}`}
      >
        {props.children}
      </button>
    </div>
  );
}
