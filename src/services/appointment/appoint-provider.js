// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function appointProvider({
  userId,
  serviceId,
  providerId,
  data,
}) {
  console.log("data got in the function", data);
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/create-appointment?userId=${userId}&providerId=${providerId}&serviceId=${serviceId}`,
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
    } else {
      toast.success("Appointment created successfully");
      return json;
    }
  } catch (err) {
    toast.error(err.message);
  }
}
