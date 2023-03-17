import { type ChangeEvent } from "react";
import type { TextInputProps } from "./TextInput.types";

export default function useTextInput(props: TextInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange({
      field: props.name,
      value: e.target.value,
    });
  }
  return { handleChange };
}
