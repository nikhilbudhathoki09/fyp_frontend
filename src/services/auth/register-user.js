import { toast } from "react-hot-toast";

export default async function registerUser(data) {
  try {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("username", data.username);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("address", data.address);
    formData.append("gender", data.gender);

    data.userImage[0] && formData.append("userImage", data.userImage[0]);

    const res = await fetch("http://localhost:8000/api/v1/auth/register", {
      method: "POST",
      body: formData,
    });

    console.log(res);

    const json = await res.json();

    console.log(json);

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    toast.success(json.message);
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
