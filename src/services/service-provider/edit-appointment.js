import { toast } from "react-hot-toast";

export default async function editAppointment(appointmentId, value) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/appointments/respond?appointmentId=${appointmentId}&action=${value}`,
      {
        method: "PUT",
        "Content-Type": "application/json",
      }
    );

    if (!res.ok) {
      toast.error("Something went wrong");
      return;
    }

    toast.success("Appointment updated successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
