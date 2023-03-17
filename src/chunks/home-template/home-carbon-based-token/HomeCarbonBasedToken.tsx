import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import CarbonTokenFeaturesList from "~/components/lists/carbon-token-features-list/CarbonTokenFeaturesList";
import { IMG_CarbonConversionIllustration } from "~/images";

export default function HomeCarbonBasedToken() {
  return (
    <section className="mt-40">
      <MaxWidthContainer>
        <div className="flex grid-cols-2 flex-col-reverse gap-20 lg:grid lg:items-center">
          <div>
            <CarbonTokenFeaturesList />
          </div>
          <div>
            <h1 className="mb-10 max-w-xl text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-relaxed">
              Introducing the{" "}
              <span className="text-app-primary-green">Carbon Based Token</span>
              : A Novel Cryptocurrency for Sustainable Development
            </h1>
            <div className="mx-auto w-max lg:w-[85%]">
              <Image
                src={IMG_CarbonConversionIllustration}
                alt="how to make your carbon credits worth more"
              />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
