import Image from "next/image";
import HomeHeroChunk from "~/chunks/home-template/home-hero-chunk/HomeHeroChunk";
import HomePartnersChunk from "~/chunks/home-template/home-partners-chunk/HomePartnersChunk";
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
    </main>
  );
}
