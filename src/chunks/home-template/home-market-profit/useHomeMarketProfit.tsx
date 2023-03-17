import { useState } from "react";

export default function useHomeMarketProfit() {
  const tabOptions = [
    { id: 1, name: "Credit Supplier" },
    { id: 2, name: "Credit Buyer" },
  ];
  const [activeTab, setActiveTab] = useState(tabOptions[0]?.id || 0);

  function handleTabChange(id: number) {
    setActiveTab(id);
  }

  return { tabOptions, activeTab, handleTabChange };
}
