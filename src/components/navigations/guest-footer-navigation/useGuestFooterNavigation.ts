import { routePaths } from "~/utils/router/routePaths";

export default function useGuestFooterNavigation() {
  const footerLinks = {
    platform: [
      { id: 1, path: routePaths.INDEX, name: "Home" },
      { id: 2, path: routePaths.INDEX, name: "Features" },
      { id: 3, path: routePaths.INDEX, name: "Services" },
      { id: 4, path: routePaths.INDEX, name: "About Us" },
    ],
    company: [
      { id: 1, path: routePaths.INDEX, name: "Management" },
      { id: 2, path: routePaths.INDEX, name: "Our Story" },
      { id: 3, path: routePaths.INDEX, name: "Career" },
      { id: 4, path: routePaths.INDEX, name: "Partnership" },
    ],
    support: [
      { id: 1, path: routePaths.INDEX, name: "Support Center" },
      { id: 2, path: routePaths.INDEX, name: "Transaction" },
      { id: 3, path: routePaths.INDEX, name: "Privacy Policy" },
      { id: 4, path: routePaths.INDEX, name: "Contact Us" },
    ],
  };
  return {
    footerLinks: footerLinks as Record<string, SRouteListItem[]>,
  };
}
