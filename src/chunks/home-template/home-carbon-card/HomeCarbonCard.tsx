import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import FeatureList from "~/components/lists/feature-list/FeatureList";
import CaptionChip from "~/components/misc/caption-chip/CaptionChip";
import {
  IMG_CarbonCardIllustration,
  IMG_EllipseIllustration06,
} from "~/images";

export default function HomeCarbonCard() {
  return (
    <section className="relative mt-10 lg:mt-40">
      <Image
        src={IMG_EllipseIllustration06}
        alt=""
        className="absolute left-0 right-0 mx-auto w-[800px]"
      />
      <MaxWidthContainer>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex justify-center pt-10">
            <Image
              src={IMG_CarbonCardIllustration}
              alt="carbon card"
              width={500}
              priority
            />
          </div>
          <div>
            <CaptionChip>YOUR OWN CARBON CARD</CaptionChip>
            <h1 className="my-8 max-w-3xl text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-normal lg:max-w-2xl">
              Creating Your Own{" "}
              <span className="text-app-primary-green">Carbon Card</span>{" "}
              powered by{" "}
              <span className="text-app-primary-green">0carbonbank</span>: A
              Revolutionary Way to Lower Your{" "}
              <span className="text-app-primary-green">Carbon Emissions</span>{" "}
            </h1>
            <div>
              <FeatureList />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
