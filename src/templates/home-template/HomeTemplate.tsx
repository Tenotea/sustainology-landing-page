import Image from "next/image";
import HomeAuditChecksChunk from "~/chunks/home-template/home-audit-checks-chunk/HomeAuditChecksChunk";
import HomeBenefitsChunk from "~/chunks/home-template/home-benefits-chunk/HomeBenefitsChunk";
import HomeBlogPostsChunk from "~/chunks/home-template/home-blog-posts-chunk/HomeBlogPostsChunk";
import HomeCarbonBasedToken from "~/chunks/home-template/home-carbon-based-token/HomeCarbonBasedToken";
import HomeCarbonCard from "~/chunks/home-template/home-carbon-card/HomeCarbonCard";
import HomeCarbonCreditsBenefitsChunk from "~/chunks/home-template/home-carbon-credits-benefits-chunk/HomeCarbonCreditsBenefitsChunk";
import HomeHeroChunk from "~/chunks/home-template/home-hero-chunk/HomeHeroChunk";
import HomeMarketProfit from "~/chunks/home-template/home-market-profit/HomeMarketProfit";
import HomePartnersChunk from "~/chunks/home-template/home-partners-chunk/HomePartnersChunk";
import HomeWorkFlowChunk from "~/chunks/home-template/home-work-flow-chunk/HomeWorkFlowChunk";
import GuestFooterNavigation from "~/components/navigations/guest-footer-navigation/GuestFooterNavigation";
import GuestNavigation from "~/components/navigations/guest-navigation/GuestNavigation";
import { IMG_EllipseIllustration01 } from "~/images";

export default function HomeTemplate() {
  return (
    <main className="min-h-screen overflow-hidden bg-app-background-green">
      <div className="absolute top-0 left-0">
        <Image src={IMG_EllipseIllustration01} alt="" height={350} />
      </div>
      <GuestNavigation />
      <HomeHeroChunk />
      <HomePartnersChunk />
      <HomeBenefitsChunk />
      <HomeCarbonBasedToken />
      <HomeWorkFlowChunk />
      <HomeMarketProfit />
      <HomeCarbonCreditsBenefitsChunk />
      <HomeAuditChecksChunk />
      <HomeCarbonCard />
      <HomeBlogPostsChunk />
      <GuestFooterNavigation />
    </main>
  );
}
