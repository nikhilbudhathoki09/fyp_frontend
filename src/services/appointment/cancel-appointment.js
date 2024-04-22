import toast from "react-hot-toast";

export default async function cancelAppointment(appointmentId) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/appointments/cancel?appointmentId=${appointmentId}`,
      {
        method: "PUT",
      }
    );
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
    } else {
      toast.success("Appointment cancelled successfully");
      return json;
    }
  } catch (err) {
    toast.error(err.message);
  }
}
