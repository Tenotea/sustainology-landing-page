import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import {
  IMG_CapaIllustration,
  IMG_CarbonWorkflowDesktop,
  IMG_CarbonWorkflowMobile,
  IMG_EllipseIllustration05,
} from "~/images";

export default function HomeWorkFlowChunk() {
  return (
    <section className="relative mt-28 lg:mt-40">
      <Image
        src={IMG_CapaIllustration}
        alt=""
        className="absolute top-0 bottom-0 my-auto w-full lg:-bottom-1/3"
      />
      <Image
        src={IMG_EllipseIllustration05}
        alt=""
        className="absolute left-0 -top-20"
      />
      <MaxWidthContainer>
        <div className="relative z-[1]">
          <h1 className="mb-8 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
            Our Customised{" "}
            <span className="text-app-primary-green">Workflow</span>{" "}
          </h1>
          <div className="mt-10 w-full">
            <Image
              src={IMG_CarbonWorkflowDesktop}
              alt="our customized workflow"
              className="mx-auto hidden h-auto w-10/12 lg:block"
            />
            <Image
              src={IMG_CarbonWorkflowMobile}
              alt="our customized workflow"
              className="mx-auto w-full max-w-[80%] min-[500px]:max-w-[60%] min-[800px]:max-w-[40%] lg:hidden lg:max-w-[55%]"
            />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
