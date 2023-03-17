import { Icon } from "@iconify/react";
import type { TextInputProps } from "./TextInput.types";
import useTextInput from "./useTextInput";

export default function TextInput(props: TextInputProps) {
  const { handleChange } = useTextInput(props);
  return (
    <div>
      <label className="mb-3 block text-sm font-medium">{props.label}</label>
      <div className="relative">
        {props.icon && (
          <Icon
            icon={props.icon}
            width={24}
            className="absolute top-0 bottom-0 left-3 z-[1] my-auto text-app-primary-green"
          />
        )}
        <input
          name={props.name}
          type={props.type || "text"}
          onChange={handleChange}
          placeholder={props.placeholder}
          className="no-autocomplete-background block h-[46px] w-full rounded-lg border border-[#37F2AD3D] bg-[#050F1D] pl-12 text-sm text-app-primary-text outline-none drop-shadow-input placeholder:text-[#45566F]"
        />
      </div>
    </div>
  );
}
