import Image from "next/image";
import BaseButton from "~/components/buttons/base-button/BaseButton";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import ContentTabNavigation from "~/components/navigations/content-tab-navigation/ContentTabNavigation";
import { IMG_MarketProfitIllustration } from "~/images";
import useHomeMarketProfit from "./useHomeMarketProfit";

export default function HomeMarketProfit() {
  const { tabOptions, activeTab, handleTabChange } = useHomeMarketProfit();
  return (
    <section className="mt-40">
      <MaxWidthContainer>
        <ContentTabNavigation
          options={tabOptions}
          value={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-8 max-w-xl text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
              How to make your{" "}
              <span className="text-app-primary-green">carbon credits</span>{" "}
              worth more
            </h1>
            <p className="mb-8 text-app-primary-text md:text-xl">
              Bring your carbon projects on-chain into the Open Climate Registry
              to increase value and transparency, discover new sales channels,
              and improve project value.
            </p>
            <div className="mx-auto max-w-[400px] lg:hidden">
              <Image
                src={IMG_MarketProfitIllustration}
                alt="how to make your carbon credits worth more"
              />
            </div>
            <div className="max-w-[150px]">
              <BaseButton applyGradient>Learn more</BaseButton>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={IMG_MarketProfitIllustration}
              alt="how to make your carbon credits worth more"
            />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
