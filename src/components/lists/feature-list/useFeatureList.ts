export default function useFeatureList() {
  const carbonCardFeatures = [
    { id: 1, name: "Multi-currency IBAN" },
    { id: 2, name: "Instant Issuance" },
    { id: 3, name: "Virtual and Physical cards" },
    { id: 4, name: "Merchant Acceptance" },
  ];
  return { carbonCardFeatures };
}
