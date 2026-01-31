import { toast } from "react-toastify";
import type { FormData } from "../components/ContactSection";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.error(response.message);
      toast.error("Failed to send email")
    })
    .catch((err) => {
      console.error(err);
      toast.error("Failed to send email")
    });
}
