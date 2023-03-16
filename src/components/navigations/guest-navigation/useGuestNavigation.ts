import { routePaths } from "~/utils/router/routePaths";

const guestNavigationItems: SRouteListItem[] = [
  { id: 1, name: "About", path: routePaths.INDEX },
  { id: 2, name: "Ecosystem", path: routePaths.ECOSYSTEM },
  { id: 3, name: "Solution", path: routePaths.SOLUTION },
  { id: 4, name: "Contact Us", path: routePaths.CONTACT_US },
];

export function useGuestNavigation() {
  return { navigationItems: guestNavigationItems };
}
