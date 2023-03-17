import Image from "next/image";
import { IC_FeatureTick } from "~/icons";
import useFeatureList from "./useFeatureList";

export default function FeatureList() {
  const { carbonCardFeatures } = useFeatureList();
  return (
    <ul className="grid grid-cols-2 gap-6">
      {carbonCardFeatures.map((feature) => (
        <li
          key={feature.id}
          className="flex items-center gap-3 text-app-primary-text"
        >
          <Image
            src={IC_FeatureTick}
            alt=""
            className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
          />
          <span className="text-sm sm:text-base">{feature.name}</span>
        </li>
      ))}
    </ul>
  );
}
