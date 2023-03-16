import Image from "next/image";
import LinkContainer from "~/components/containers/link-container/LinkContainer";
import { IMG_ProductLogo } from "~/images";
import { routePaths } from "~/utils/router/routePaths";

export default function ProductLogo() {
  return (
    <LinkContainer href={routePaths.INDEX}>
      <Image src={IMG_ProductLogo} alt="sustainology" height={20} />
    </LinkContainer>
  );
}
