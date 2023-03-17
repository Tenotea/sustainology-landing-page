import Image from "next/image";
import type { CompanyBenefitsListProps } from "./BenefitsList.types";
import useCompanyBenefitsList from "./useBenefitsList";

export default function BenefitsList(props: CompanyBenefitsListProps) {
  const { companyBenefits, tokenizedCarbonCreditsBenefits } =
    useCompanyBenefitsList();
  return (
    <ul className="grid gap-5">
      {(props.tokenizeBenefitsList
        ? tokenizedCarbonCreditsBenefits
        : companyBenefits
      ).map((benefit) => (
        <li
          key={benefit.id}
          className="flex gap-5 rounded-lg bg-[#162C4B] py-3 px-4 lg:py-4"
        >
          <div className="flex-shrink-0">
            <Image
              src={benefit.image}
              alt={benefit.name}
              className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] xl:h-[80px] xl:w-[80px]"
            />
          </div>
          <div>
            <h5 className="text-base font-semibold md:text-lg lg:text-xl">
              {benefit.name}
            </h5>
            <p className="text-xs font-light leading-5 text-app-primary-text lg:mt-1 lg:text-sm">
              {benefit.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
