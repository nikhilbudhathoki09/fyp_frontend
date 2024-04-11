import { toast } from "react-hot-toast";

export default async function addService(data, providerId) {
  try {
    const formData = new FormData();
    formData.append("serviceName", data.serviceName);
    formData.append("perHourRate", data.perHourRate);
    formData.append("categoryName", data.categoryName || "");
    formData.append("description", data.description || "");

    data.serviceImage[0] &&
      formData.append("serviceImage", data.serviceImage[0]);

    const res = await fetch(
      `http://localhost:8000/api/v1/providers/add_service/${providerId}`,
      {
        method: "POST",
        body: formData,
      }
    );



    if (!res.ok) {
      toast.error("Service added successfully");
      return;
    }

    toast.success("Service added successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
