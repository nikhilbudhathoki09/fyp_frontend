import toast from "react-hot-toast";

export default async function getAllUsers() {
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      return toast.error(json.message || "Something went wrong");
    }

    return json;
  } catch (err) {
    console.log(err);
    return [];
  }
}
