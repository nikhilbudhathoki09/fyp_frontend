import { toast } from "react-hot-toast";

export default async function addCategory(data) {
  try {
    const formData = new FormData();
    formData.append("title", data.title);

    formData.append("description", data.description || "");

    data.categoryImage[0] &&
      formData.append("categoryImage", data.categoryImage[0]);

    const res = await fetch(`http://localhost:8000/api/v1/categories/`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      toast.error("Category not added successfully");
      return;
    }

    toast.success("Category added successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
