import type { BaseButtonProps } from "./BaseButton.types";
import useBaseButton from "./useBaseButton";

export default function BaseButton(props: BaseButtonProps) {
  const { outlinedClassList, gradientClassList } = useBaseButton();
  return (
    <div
      className={
        props.applyGradient
          ? "rounded-lg bg-gradient-to-l from-[#37F2AD] to-[#40E2CF] p-[1px]"
          : props.applyGradient2
          ? "rounded-lg bg-gradient-to-l from-[#37F2AD] to-[#2E71FF78] p-[1px]"
          : ""
      }
    >
      <button
        {...props}
        className={`w-full py-3 px-5 text-xs
        ${props.applyGradient || props.applyGradient2 ? gradientClassList : ""}
        ${props.applyOutlined ? outlinedClassList : ""}
        ${props.tw || ""}`}
      >
        {props.children}
      </button>
    </div>
  );
}
