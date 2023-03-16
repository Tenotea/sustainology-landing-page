import Image from "next/image";
import HomeHeroChunk from "~/chunks/home-template/home-hero-chunk/HomeHeroChunk";
import GuestNavigation from "~/components/navigations/guest-navigation/GuestNavigation";
import { IMG_EllipseIllustration01 } from "~/images";

export default function HomeTemplate() {
  return (
    <main className="min-h-screen bg-app-background-green">
      <div className="absolute top-0 left-0">
        <Image src={IMG_EllipseIllustration01} alt="" height={350} />
      </div>
      <GuestNavigation />
      <HomeHeroChunk />
    </main>
  );
}
