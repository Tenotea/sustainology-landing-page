import { useRouter } from "next/router";

export default function useGuestNavigationMenuList() {
  const router = useRouter();
  function isActive(path: string) {
    return router.asPath === path;
  }
  return { isActive };
}
