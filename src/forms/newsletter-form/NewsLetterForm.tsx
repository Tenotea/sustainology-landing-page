import { Icon } from "@iconify/react";
import TextInput from "~/components/inputs/text-input/TextInput";
import useFormData from "~/utils/hooks/useFormData";
import useNewsLetterForm from "./useNewsLetterForm";

export default function NewsLetterForm() {
  const { formData, handleChange, handleSubmit } = useNewsLetterForm();
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <TextInput
        label="Get notified by Sustainoloy"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Enter your email address"
        icon={"fluent:mail-unread-20-regular"}
      />
      <button className="absolute bottom-[1.5px] right-0 h-[43px] rounded-r-lg bg-[#050F1D] px-2">
        <Icon
          icon={"material-symbols:send-rounded"}
          className="-rotate-45 transform-gpu text-app-primary-green"
          width={24}
        />
      </button>
    </form>
  );
}
