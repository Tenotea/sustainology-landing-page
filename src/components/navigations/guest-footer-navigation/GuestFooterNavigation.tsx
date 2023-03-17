import { Icon } from "@iconify/react";
import Image from "next/image";
import LinkContainer from "~/components/containers/link-container/LinkContainer";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import ProductLogo from "~/components/misc/product-logo/ProductLogo";
import NewsLetterForm from "~/forms/newsletter-form/NewsLetterForm";
import { IMG_FracxnLogo } from "~/images";
import { routePaths } from "~/utils/router/routePaths";
import useGuestFooterNavigation from "./useGuestFooterNavigation";

export default function GuestFooterNavigation() {
  const { footerLinks } = useGuestFooterNavigation();
  return (
    <footer className="bg-[#050F1D] pt-10 text-app-primary-text md:pt-16">
      <MaxWidthContainer>
        <div className="grid-cols-3 items-start gap-10 md:grid xl:grid-cols-4">
          <div className="">
            <div className="mx-auto max-w-max md:mx-0">
              <ProductLogo />
            </div>
            <p className="mt-3 text-center text-sm leading-6 md:mt-5 md:text-left">
              Blockchain, based company to offset carbon emission
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
              <LinkContainer href={routePaths.INDEX}>
                <Icon icon={"entypo-social:linkedin-with-circle"} width={24} />
              </LinkContainer>
              <Icon icon={"ant-design:twitter-circle-filled"} width={24} />
              <Icon icon={"ic-baseline-telegram"} width={24} />
              <Icon icon={"ri:github-fill"} width={24} />
            </div>
          </div>

          <div className="col-span-2 my-10 mx-auto grid w-[90%] grid-cols-2 gap-y-10 gap-x-5 min-[500px]:grid-cols-3 md:my-0">
            {Object.keys(footerLinks).map((heading) => (
              <div key={heading}>
                <h6 className="font-semibold capitalize">{heading}</h6>
                <div className="mt-3 grid gap-3">
                  {footerLinks[heading]?.map((link) => (
                    <LinkContainer
                      key={link.id}
                      href={link.path}
                      className="max-w-max text-sm"
                    >
                      {link.name}
                    </LinkContainer>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <NewsLetterForm />
        </div>
      </MaxWidthContainer>
      <div className="mt-14 border-t border-app-primary-green py-8 text-[#8D939D]">
        <span className="block text-center text-xs">
          {" "}
          Copyright 2023 carbonbank.io{" "}
        </span>
        <div className="mt-2 flex items-center justify-center gap-2.5">
          POWERED BY{" "}
          <LinkContainer href="https://fracxn.io" external className="-mt-1">
            <Image src={IMG_FracxnLogo} alt="fracxcn.io" />{" "}
          </LinkContainer>
        </div>
      </div>
    </footer>
  );
}
