import { type FormEvent } from "react";
import useFormData from "~/utils/hooks/useFormData";

export default function useNewsLetterForm() {
  const { formData, handleChange } = useFormData({ emailAddress: "" });
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formData.emailAddress) return;
    console.log(formData);
  }
  return { handleSubmit, formData, handleChange };
}
