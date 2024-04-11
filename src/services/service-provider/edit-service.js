import { toast } from "react-hot-toast";

export default async function editService(data, serviceId) {
  try {
    const formData = new FormData();
    data.serviceName && formData.append("serviceName", data.serviceName);
    data.perHourRate && formData.append("perHourRate", data.perHourRate);
    data.perHourRate &&
      formData.append("categoryName", data.categoryName || "");
    data.description && formData.append("description", data.description || "");

    data.serviceImage[0] &&
      formData.append("serviceImage", data.serviceImage[0]);

    const res = await fetch(
      `http://localhost:8000/api/v1/providers/services/${serviceId}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!res.ok) {
      toast.error("Something went wrong");
      return;
    }

    toast.success("Service updated successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
