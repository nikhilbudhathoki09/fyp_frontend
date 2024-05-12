import { toast } from "react-hot-toast";

export default async function registerProvider(data) {
  try {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("providerName", data.providerName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("address", data.address);

    data.description && formData.append("description", data.description);
    data.providerImage[0] &&
      formData.append("providerImage", data.providerImage[0]);
    data.registrationDocument[0] &&
      formData.append("registrationDocument", data.registrationDocument[0]);
    data.experienceDocument[0] &&
      formData.append("experienceDocument", data.experienceDocument[0]);
    const res = await fetch(
      "http://localhost:8000/api/v1/auth/providers/register",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log(res);

    const json = await res.json();

    console.log(json);

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    toast.success("Provider registered successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
