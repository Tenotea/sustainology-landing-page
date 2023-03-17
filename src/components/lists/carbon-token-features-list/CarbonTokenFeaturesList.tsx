import useCarbonTokenFeaturesList from "./useCarbonTokenFeaturesList";

export default function CarbonTokenFeaturesList() {
  const { features } = useCarbonTokenFeaturesList();
  return (
    <div className="grid gap-5">
      {features.map((feature, index) => (
        <div key={feature.id} className="relative flex items-start gap-3">
          {index < features.length - 1 && (
            <div className="absolute top-5 left-3.5 h-full w-1 bg-[#394454]" />
          )}
          <div className="z-[1] flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-app-background-green bg-gradient-to-l from-[#37F2AD80] to-[#3798F280] text-xs font-semibold text-app-primary-text">
            {feature.id}
          </div>
          <div className="flex-grow rounded-md border border-dashed border-[#B2B6BD] bg-[#162C4B] py-2 px-3 text-app-primary-text sm:py-5 sm:px-6">
            <p className="whitespace-pre-line text-xs leading-6 sm:text-sm">
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
