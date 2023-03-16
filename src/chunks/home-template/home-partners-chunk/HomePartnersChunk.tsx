import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import PartnersLogoList from "~/components/lists/partners-logo-list/PartnersLogoList";

export default function HomePartnersChunk() {
  return (
    <section className="relative">
      <div className="absolute h-full w-full rotate-1 transform-gpu bg-app-primary-green" />{" "}
      <div className="relative z-[1] flex h-full items-center bg-[#101F35] py-7">
        <MaxWidthContainer>
          <PartnersLogoList />
        </MaxWidthContainer>
      </div>
    </section>
  );
}
