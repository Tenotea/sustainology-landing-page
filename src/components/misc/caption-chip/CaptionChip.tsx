import type { CaptionChipProps } from "./CaptionChip.type";

export default function CaptionChip(props: CaptionChipProps) {
  return (
    <div className="max-w-max rounded-lg bg-[#394454] py-1.5 px-2.5 text-xs">
      <p className=" text-app-primary-green">{props.children}</p>
    </div>
  );
}
