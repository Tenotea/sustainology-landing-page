import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import BenefitsList from "~/components/lists/benefits-list/BenefitsList";
import CaptionChip from "~/components/misc/caption-chip/CaptionChip";
import { IMG_CarbonOffsettingSingleIllustration } from "~/images";

export default function HomeCarbonCreditsBenefitsChunk() {
  return (
    <section className="mt-16 text-white lg:mt-28">
      <MaxWidthContainer>
        <CaptionChip>WHY TOKENIZE CARBON?</CaptionChip>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
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
    </section>
  );
}
