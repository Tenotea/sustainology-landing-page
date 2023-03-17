import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import CarbonTokenFeaturesList from "~/components/lists/carbon-token-features-list/CarbonTokenFeaturesList";
import {
  IMG_CarbonConversionIllustration,
  IMG_CarbonPolygonIllustration,
  IMG_CarbonPolygonPartialIllustration,
  IMG_EllipseIllustration04,
} from "~/images";

export default function HomeCarbonBasedToken() {
  return (
    <section className="relative mt-28 lg:mt-40">
      <Image
        src={IMG_EllipseIllustration04}
        alt=""
        className="absolute right-0 -top-20"
      />
      <Image
        src={IMG_CarbonPolygonPartialIllustration}
        alt=""
        className="absolute right-0 -top-20 hidden lg:block"
      />
      <Image
        src={IMG_CarbonPolygonIllustration}
        alt=""
        className="absolute right-0 -bottom-1/2 hidden lg:block"
      />
      <div className="z-[1]">
        <MaxWidthContainer>
          <div className="flex grid-cols-2 flex-col-reverse gap-10 lg:grid lg:items-center lg:gap-20">
            <div>
              <CarbonTokenFeaturesList />
            </div>
            <div>
              <h1 className="mb-10 max-w-xl text-xl font-semibold leading-relaxed text-white sm:text-4xl sm:leading-relaxed">
                Introducing the{" "}
                <span className="text-app-primary-green">
                  Carbon Based Token
                </span>
                : A Novel Cryptocurrency for Sustainable Development
              </h1>
              <div className="mx-auto flex w-[60%] justify-center lg:w-[85%] lg:justify-start">
                <Image
                  src={IMG_CarbonConversionIllustration}
                  alt="how to make your carbon credits worth more"
                  priority
                />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </section>
  );
}
