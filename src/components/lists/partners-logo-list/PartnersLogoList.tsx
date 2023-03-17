import Image from "next/image";
import usePartnersLogoList from "./usePartnersLogoList";

export default function PartnersLogoList() {
  const { partners } = usePartnersLogoList();
  return (
    <ul className="grid grid-cols-2 flex-wrap items-center gap-4 sm:flex sm:justify-around">
      {partners.map((partner) => (
        <li key={partner.id}>
          <Image
            src={partner.logo}
            alt={partner.name}
            priority
            className="h-[25px] w-auto sm:h-[20px] md:h-[25px]"
          />
        </li>
      ))}
    </ul>
  );
}
