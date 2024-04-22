import { toast } from "react-hot-toast";

export default async function addLocation(data) {
  try {
    console.log(data);
    const res = await fetch(`http://localhost:8000/api/v1/locations/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      toast.error("Error adding service");
      return;
    }
    return toast.success("Location added successfully");
  } catch (err) {
    console.log(err);
    toast.error(err);
  }
}
