import { useReducer } from "react";

export default function useFormData<T>(initialState: T) {
  function reducer(state: T, payload: SFormInputPayload) {
    return {
      ...state,
      [payload.field]: payload.value,
    } as T;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return { formData: state, handleChange: dispatch };
}
