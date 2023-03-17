import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import BenefitsList from "~/components/lists/benefits-list/BenefitsList";
import CaptionChip from "~/components/misc/caption-chip/CaptionChip";
import {
  IMG_CarbonOffsettingIllustration,
  IMG_EllipseIllustration03,
} from "~/images";

export default function HomeBenefitsChunk() {
  return (
    <section className="relative pt-16 text-white lg:pt-24">
      <Image
        src={IMG_EllipseIllustration03}
        alt=""
        className="absolute top-0 left-0"
      />
      <div className="relative z-[1]">
        <MaxWidthContainer>
          <CaptionChip>WHY WORK WITH US?</CaptionChip>
          <div className="mt-6 mb-8 grid lg:mb-5 lg:mt-10 lg:grid-cols-2 lg:gap-16">
            <h1 className="mb-8 max-w-xl text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
              Scaling Carbon Markets with Tokenized{" "}
              <span className="text-app-primary-green">Carbon Credits</span>
            </h1>
            <p className=" text-app-primary-text sm:mb-20">
              Tokenized carbon credits can solve a key market problem, which
              also enables carbon markets to scale quickly beyond their current
              constraints.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto w-[60%] md:w-[50%] lg:mt-10 lg:w-[80%] xl:w-full">
              <Image
                src={IMG_CarbonOffsettingIllustration}
                alt="carbon ofsetting"
                priority
              />
            </div>
            <div>
              <BenefitsList />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </section>
  );
}
