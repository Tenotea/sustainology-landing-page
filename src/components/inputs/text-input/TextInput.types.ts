export type TextInputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  icon?: string;
  placeholder?: string;
  onChange: (payload: SFormInputPayload) => void;
};
