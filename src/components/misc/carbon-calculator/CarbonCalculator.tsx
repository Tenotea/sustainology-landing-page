import { Icon } from "@iconify/react";
import Image from "next/image";
import BaseButton from "~/components/buttons/base-button/BaseButton";
import {
  IMG_CarbonCreditSupplierIllustration,
  IMG_EmitterBusinessIllustration,
  IMG_EmitterIndividualIllustration,
} from "~/images";

export default function CarbonCalculator() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#6F79877A] to-[#DEEBFE1A] p-[1px]">
      <div className="rounded-2xl bg-[#16263E] py-8 px-5">
        <div className="mb-6 flex items-center justify-between text-white">
          <p className="font-semibold">Carbon Calculator</p>
          <Icon icon={"charm:menu-hamburger"} />
        </div>

        <div className="mb-6 grid grid-cols-2 gap-x-3 gap-y-5">
          <div className="col-span-2 flex items-center gap-3 rounded-lg border border-[#91B0D82E] bg-[#0E1A2C] px-5 py-4">
            <Image
              src={IMG_CarbonCreditSupplierIllustration}
              alt="carbon credit supplier"
              width={40}
            />
            <p className="text-xs text-app-neutral-grey sm:text-sm">
              Carbon Credit Supplier
            </p>
          </div>
          <div className="grid items-center justify-center gap-3 rounded-lg border border-[#91B0D82E] bg-[#0E1A2C] px-5 py-8">
            <Image
              src={IMG_EmitterIndividualIllustration}
              alt="carbon credit supplier"
              width={40}
              className="mx-auto"
            />
            <p className="text-center text-xs text-app-neutral-grey sm:text-sm">
              Emitter Individual
            </p>
          </div>
          <div className="grid items-center justify-center gap-3 rounded-lg border border-[#91B0D82E] bg-[#0E1A2C] px-5 py-8">
            <Image
              src={IMG_EmitterBusinessIllustration}
              alt="carbon credit supplier"
              width={40}
              className="mx-auto"
            />
            <p className="text-center text-xs text-app-neutral-grey sm:text-sm">
              Emitter Business
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-xs">
          <BaseButton applyGradient2>Launch Calculator</BaseButton>
        </div>
      </div>
    </div>
  );
}
