import ProductLogo from "~/components/misc/product-logo/ProductLogo";
import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import { useGuestNavigation } from "./useGuestNavigation";
import GuestNavigationMenuList from "~/components/lists/guest-navigation-menu-list/GuestNavigationMenuList";
import BaseButton from "~/components/buttons/base-button/BaseButton";
import { Icon } from "@iconify/react";

export default function GuestNavigation() {
  const { navigationItems } = useGuestNavigation();
  return (
    <MaxWidthContainer>
      <header className="flex items-center justify-between pt-8">
        <ProductLogo />
        <div className="hidden md:block">
          <GuestNavigationMenuList items={navigationItems} />
        </div>
        <BaseButton applyOutlined tw="max-w-[200px] hidden md:block">
          Launch App
        </BaseButton>
        <button className="text-white md:hidden">
          <Icon icon={"material-symbols:menu-rounded"} width={25} />
        </button>
      </header>
    </MaxWidthContainer>
  );
}
