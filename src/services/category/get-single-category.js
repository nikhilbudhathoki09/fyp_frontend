// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function getSingleCategory(id) {
  try {
    const res = await fetch(`http://localhost:8000/api/v1/categories/${id}`, {
      method: "GET",
    });

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
    }
    return json;
  } catch (err) {
    toast.error(err.message);
  }
}
