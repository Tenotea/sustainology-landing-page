import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import BenefitsList from "~/components/lists/benefits-list/BenefitsList";
import CaptionChip from "~/components/misc/caption-chip/CaptionChip";
import {
  IMG_CarbonOffsettingSingleIllustration,
  IMG_EllipseIllustration05,
  IMG_EllipseIllustration06,
} from "~/images";

export default function HomeCarbonCreditsBenefitsChunk() {
  return (
    <section className="relative mt-28 text-app-primary-text lg:mt-40">
      <Image
        src={IMG_EllipseIllustration05}
        alt=""
        className="absolute left-0 -top-1/3 h-[800px]"
      />
      <Image
        src={IMG_EllipseIllustration06}
        alt=""
        className="absolute left-0 -right-36 mx-auto"
      />
      <div className="z-[2]">
        <MaxWidthContainer>
          <CaptionChip>WHY TOKENIZE CARBON?</CaptionChip>
          <div className="mt-4 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="mb-8 max-w-md text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
                Benefits of Tokenized{" "}
                <span className="text-app-primary-green">Carbon Credits</span>
              </h1>
              <div className="mx-auto w-[60%] md:w-[50%] lg:mt-10 lg:w-[85%]">
                <Image
                  src={IMG_CarbonOffsettingSingleIllustration}
                  alt="carbon ofsetting"
                />
              </div>
            </div>
            <div>
              <BenefitsList tokenizeBenefitsList />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </section>
  );
}
