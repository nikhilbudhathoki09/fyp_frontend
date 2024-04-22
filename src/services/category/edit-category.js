import { toast } from "react-hot-toast";

export default async function editCategory(data, categoryId) {
  try {
    const formData = new FormData();

    formData.append("title", data.title);

    formData.append("description", data.description || "");

    data.categoryImage[0] &&
      formData.append("categoryImage", data.categoryImage[0]);

    const res = await fetch(
      `http://localhost:8000/api/v1/categories/${categoryId}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (!res.ok) {
      toast.error("We couldn't update the category. Please try again.");
      return;
    }

    toast.success("Category updated successfully");
  } catch (err) {
    console.log(err);

    toast.error(err);
  }
}
