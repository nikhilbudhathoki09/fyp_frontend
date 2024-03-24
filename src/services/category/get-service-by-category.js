// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function getServiceByCategory(name) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/providers/services/category/${name}`,
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
