// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function getFilteredServices(categoryId, locationId) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/services/filter-services/?categoryId=${categoryId}&locationId=${locationId}`,
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
    console.log(err);
    toast.error(err.message);
  }
}