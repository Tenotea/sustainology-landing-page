import Image from "next/image";
import BaseButton from "~/components/buttons/base-button/BaseButton";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import CaptionChip from "~/components/misc/caption-chip/CaptionChip";
import {
  IMG_CarbonTokenIllustrationBottom,
  IMG_CarbonTokenIllustrationRight,
  IMG_CarbonTokenIllustrationTop,
  IMG_EllipseIllustration02,
  IMG_RobotArmIllustration,
} from "~/images";
import { Icon } from "@iconify/react";
import CarbonCalculator from "~/components/misc/carbon-calculator/CarbonCalculator";

export default function HomeHeroChunk() {
  return (
    <div className="relative overflow-hidden pb-40">
      <div className="absolute top-0 right-0 h-[500px] w-[500px]">
        <Image src={IMG_EllipseIllustration02} alt="" fill />
      </div>
      <div className="absolute bottom-8 right-0 h-[150px] w-[65%] min-[450px]:bottom-0 sm:bottom-0 md:w-[50%] lg:-bottom-8 lg:h-[200px] lg:w-[35%] min-[2000px]:hidden">
        <Image src={IMG_RobotArmIllustration} alt="" fill />
      </div>
      <MaxWidthContainer>
        <section className="mt-20 grid gap-20 sm:mt-28 lg:grid-cols-2 lg:gap-10">
          <div className="relative z-[1]">
            <CaptionChip>The World&apos;s First Company To </CaptionChip>
            <h1 className="mb-6 mt-2 max-w-xl text-3xl font-semibold leading-snug text-white sm:mb-8 sm:text-4xl sm:leading-snug xl:text-5xl xl:leading-normal">
              Offset Carbon Emissions Using Innovative{" "}
              <span className="text-app-primary-green">Blockchain</span>{" "}
              Technology
            </h1>
            <p className="mb-6 max-w-lg leading-6 text-white sm:mb-8">
              Creating Sustainable Solutions through Blockchain-Based Carbon
              Offsetting Solutions
            </p>
            <div className="max-w-max">
              <BaseButton applygradient="true">
                <div className="flex items-center gap-2">
                  <span> Get Started</span>
                  <Icon
                    icon={"material-symbols:arrow-right-alt-rounded"}
                    width={20}
                  />
                </div>
              </BaseButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0">
              <div className="relative mx-auto h-full w-[95%]">
                <div className="absolute -top-20 -left-24 h-[150px] w-[150px] sm:-left-14">
                  <Image
                    src={IMG_CarbonTokenIllustrationTop}
                    alt="carbon caculator"
                  />
                </div>
                <div className="absolute -bottom-5 -left-44">
                  <Image
                    src={IMG_CarbonTokenIllustrationBottom}
                    alt="carbon caculator"
                  />
                </div>
                <div className="absolute -top-28 -right-32 lg:-right-24 xl:-right-16">
                  <Image
                    src={IMG_CarbonTokenIllustrationRight}
                    alt="carbon caculator"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-[1] mx-auto w-full lg:w-[90%] xl:w-[80%]">
              <CarbonCalculator />
            </div>
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
}
