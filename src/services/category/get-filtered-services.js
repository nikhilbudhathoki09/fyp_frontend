// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function getFilteredServices(categoryId, locationId) {
  console.log(categoryId, locationId);
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/services/filter-services/?categoryId=${categoryId}&locationId=${locationId}`,
      {
        method: "GET",
      }
    );

    console.log(res);

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
    }
    return json;
  } catch (err) {
    toast.error(err.message);
  }
}
