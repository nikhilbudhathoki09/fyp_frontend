// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function getSuggestedProviders(providerId) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/providers/suggested-providers?providerId=${providerId}`,
      {
        method: "GET",
      }
    );

    const json = await res.json();

    if (!res.ok) {
      return toast.error(json.message);
    }
    return json;
  } catch (err) {
    toast.error(err.message);
  }
}
