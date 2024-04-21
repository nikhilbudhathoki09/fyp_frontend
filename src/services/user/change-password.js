// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function changePassword(data, token) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/auth/user/reset-password?token=${token}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data, token);

    const json = await res.json();
    console.log(json);

    if (!res.ok) {
      return toast.error(json.message);
    }
    return toast.success(json.message || "Feedback given successfully");
  } catch (err) {
    toast.error(err.message);
  }
}
