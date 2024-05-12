import { toast } from "react-hot-toast";
import { USER_KEY } from "../../utils/constants";

export default async function editDetails(providerId, data) {
  const formData = new FormData();
  data.providerName && formData.append("providerName", data.providerName);
  data.phoneNumber && formData.append("phoneNumber", data.phoneNumber);
  data.description && formData.append("description", data.description);
  data.address && formData.append("address", data.address);
  data.yearOfExperience &&
    formData.append("yearOfExperience", data.yearOfExperience);
  data.minServicePrice &&
    formData.append("minServicePrice", data.minServicePrice);
  data.maxServicePrice &&
    formData.append("maxServicePrice", data.maxServicePrice);
  data.categoryId && formData.append("categoryId", data.categoryId);
  data.locationId && formData.append("locationId", data.locationId);

  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/providers/${providerId}`,
      {
        method: "PUT",
        body: JSON.stringify(formData),
        "Content-Type": "application/json",
      }
    );

    const json = await res.json();

    if (!res.ok) {
      return toast.error("Something went wrong");
    }

    localStorage.setItem(USER_KEY, JSON.stringify(json));

    document.cookie = `token=${json.access_token}`;

    window.location.reload();
    return toast.success(
      json.message || "Provider details updated successfully"
    );
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
