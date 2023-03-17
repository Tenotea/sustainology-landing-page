import Image from "next/image";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import { IMG_VerificationAndAuditIllustration } from "~/images";

export default function HomeAuditChecksChunk() {
  return (
    <section className="mt-16 lg:mt-36">
      <MaxWidthContainer>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="mt-8">
            <h1 className="mb-10 max-w-xl text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
              Verification <span className="text-app-primary-green">and</span>{" "}
              Audit checks
            </h1>
            <p className="mb-10 text-app-primary-text">
              The company believes in maintaining very compliant procedure for
              carbon trading and will appoint top rate audit firms to conduct
              periodic checks and verification.
              <br />
              <br />
              The audit reports to be made available on the website so as to
              make sure that investors are secured and everything happens in
              full transparency.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={IMG_VerificationAndAuditIllustration}
              alt="verification and audit checks"
            />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
