import { toast } from "react-hot-toast";
import { USER_KEY } from "../../utils/constants";

export default async function updateUserDetails(data, userId) {
  try {
    const formData = new FormData();

    data.name && formData.append("name", data.name);
    data.phoneNumber && formData.append("phoneNumber", data.phoneNumber);
    data.address && formData.append("address", data.address);
    data.gender && formData.append("gender", data.gender);

    data.userImage[0] && formData.append("userImage", data.userImage[0]);

    const res = await fetch(`http://localhost:8000/api/v1/users/${userId}`, {
      method: "PUT",
      body: formData,
    });

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(json));

    document.cookie = `token=${json.access_token}`;

    window.location.reload();

    return toast.success(json.message || "Profile updated successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
