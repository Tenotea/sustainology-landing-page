import {
  IMG_PartnerBinance,
  IMG_PartnerBitfinex,
  IMG_PartnerCoinbase,
  IMG_PartnerCoinMarketCap,
} from "~/images";

export default function usePartnersLogoList() {
  const partners = [
    { id: 1, logo: IMG_PartnerCoinbase },
    { id: 2, logo: IMG_PartnerBinance },
    { id: 3, logo: IMG_PartnerCoinMarketCap },
    { id: 4, logo: IMG_PartnerBitfinex },
  ];
  return { partners };
}
