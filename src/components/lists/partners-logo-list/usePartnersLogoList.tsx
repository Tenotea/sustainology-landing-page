import {
  IMG_PartnerBinance,
  IMG_PartnerBitfinex,
  IMG_PartnerCoinbase,
  IMG_PartnerCoinMarketCap,
} from "~/images";

export default function usePartnersLogoList() {
  const partners = [
    { id: 1, logo: IMG_PartnerCoinbase, name: "coinbase" },
    { id: 2, logo: IMG_PartnerBinance, name: "binance" },
    { id: 3, logo: IMG_PartnerCoinMarketCap, name: "coin market cap" },
    { id: 4, logo: IMG_PartnerBitfinex, name: "bitfinex" },
  ];
  return { partners };
}
