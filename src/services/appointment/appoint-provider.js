// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";
import savePayment from "../save-payment";

export default async function appointProvider({
  userId,
  serviceId,
  providerId,
  data,
}) {
  const formData = new FormData();
  formData.append("description", data.description);
  formData.append("detailedLocation", data.detailedLocation);
  formData.append("arrivalDate", data.arrivalDate);
  formData.append("arrivalTime", data.arrivalTime);
  // data.appointmentImage[0] &&
  //   formData.append("appointmentImage", data.appointmentImage[0]);

  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/create-appointment?userId=${userId}&providerId=${providerId}&serviceId=${serviceId}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await res.json();

    if (!res.ok) {
      return toast.error(json.message);
    }
    window.location.href = json.payment_url;
    await savePayment({ pidx: json.pidx, appointmentId: json.appointmentId });
    return toast.success("Appointment created successfully");
  } catch (err) {
    toast.error(err.message);
  }
}
