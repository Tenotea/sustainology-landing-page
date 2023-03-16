import LinkContainer from "~/components/containers/link-container/LinkContainer";
import type { GuestNavigationMenuListProps } from "./GuestNavigationMenuList.types";
import useGuestNavigationMenuList from "./useGuestNavigationMenuList";

export default function GuestNavigationMenuList(
  props: GuestNavigationMenuListProps
) {
  const { isActive } = useGuestNavigationMenuList();
  return (
    <ul className="flex max-w-max items-center gap-6 rounded-full border border-[#78787A] bg-[#394454] px-10 pt-2 pb-2.5 shadow-navigation">
      {props.items.map((item) => (
        <li key={item.id}>
          <LinkContainer
            href={item.path}
            className={`text-xs ${
              isActive(item.path) ? "text-app-primary-green" : "text-[#F4F4F4]"
            }`}
          >
            {item.name}
          </LinkContainer>
        </li>
      ))}
    </ul>
  );
}
