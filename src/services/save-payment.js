// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function savePayment({ pidx, appointmentId }) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/khalti/update?pidx=${pidx}&appointmentId=${appointmentId}`,
      {
        method: "POST",
      }
    );

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
    }
    return json;
  } catch (err) {
    toast.error(err.message);
  }
}
