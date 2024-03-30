import { toast } from "react-hot-toast";

export default async function getUserAppointments(userId) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/appointments/user/${userId || 1}`,
      {
        method: "GET",
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
