import axios from "axios";
import { type FormEvent } from "react";
import useFormData from "~/utils/hooks/useFormData";

export default function useNewsLetterForm() {
  const { formData, handleChange } = useFormData({ emailAddress: "" });
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formData.emailAddress) return;

    async function reigisterUserForNewLetter() {
      const instance = axios.create({
        baseURL: "https://api.staging.smtpexpress.com",
        headers: {
          Authorization:
            "Bearer fb334af0fc81a9c90c4b23d324fd837c6743a549f475ef84d5",
        },
      });
      const response = await instance.post("/send", {
        sender: {
          name: "Emmanuel Adelakun",
          email: "no-reply@smtpexpress.com",
        },
        recipients: [{ email: formData.emailAddress }],
      });
      return response;
    }

    reigisterUserForNewLetter()
      .then((r) => {
        console.log(r);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { handleSubmit, formData, handleChange };
}
