import { toast } from "react-hot-toast";

export default async function editProviderStatus(providerId, status) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/providers/${providerId}/update-status?status=${status}`,
      {
        method: "PUT",
        "Content-Type": "application/json",
      }
    );

    console.log(providerId, status);

    if (!res.ok) {
      toast.error("Something went wrong");
      return;
    }
    const data = await res.json();

    toast.success("Provider updated successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
