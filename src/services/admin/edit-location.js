import { toast } from "react-hot-toast";

export default async function editLocation(data, locationId) {
  try {
    console.log(data);
    const res = await fetch(
      `http://localhost:8000/api/v1/locations/${locationId}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      toast.error("Error updating service");
      return;
    }
    return toast.success("Location updated successfully");
  } catch (err) {
    console.log(err);
    toast.error(err);
  }
}
