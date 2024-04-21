// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function giveFeedBack(data, userId, providerId) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/ratings/?userId=${userId}&providerId=${providerId}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
    }
    return toast.success(json.message || "Feedback given successfully");
  } catch (err) {
    toast.error(err.message);
  }
}
