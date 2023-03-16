import {
  IMG_BenefitFinancialAccessibilityIllustration,
  IMG_BenefitIncreasedApplicationIllustration,
  IMG_BenefitIntegrityIllustration,
  IMG_BenefitMarketOpportunityIllustration,
  IMG_BenefitOpenAccessIllustration,
  IMG_BenefitProgrammableIllustration,
  IMG_BenefitTransparencyIllustration,
} from "~/images";

export default function useCompanyBenefitsList() {
  const companyBenefits = [
    {
      id: 1,
      name: "High Integrity",
      description:
        "Immutable, openly accessible data on all credit attributes, including traded and retired volume.",
      image: IMG_BenefitIntegrityIllustration,
    },
    {
      id: 2,
      name: "Programmable",
      description:
        "Open APIs allow for the integration of tokenized carbon into any system",
      image: IMG_BenefitProgrammableIllustration,
    },
    {
      id: 3,
      name: "Open Access",
      description:
        "With fewer entry hurdles and greater transparency, tokenized carbon enables both big and little customers to interact with carbon.",
      image: IMG_BenefitOpenAccessIllustration,
    },
    {
      id: 4,
      name: "Full Transparency",
      description:
        "By using advanced technology like a smart contract we bring a high amount of trust and transparency by decreasing the number of middlemen and reducing fees.",
      image: IMG_BenefitTransparencyIllustration,
    },
  ];
  const tokenizedCarbonCreditsBenefits = [
    {
      id: 1,
      name: "Increase market opportunity",
      description:
        "Promote your project on the upcoming carbon marketplaces to increase awareness for it.",
      image: IMG_BenefitMarketOpportunityIllustration,
    },
    {
      id: 2,
      name: "Increased application",
      description:
        "There are numerous further applications for tokenized carbon credits, such as rapid liquidity",
      image: IMG_BenefitIncreasedApplicationIllustration,
    },
    {
      id: 3,
      name: "Financial accessibility",
      description:
        "Reduce the friction between you and your customers so that money will reach your project more quickly.",
      image: IMG_BenefitFinancialAccessibilityIllustration,
    },
  ];
  return { companyBenefits, tokenizedCarbonCreditsBenefits };
}
