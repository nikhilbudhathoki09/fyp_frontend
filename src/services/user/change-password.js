// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function changePassword({ data, token }) {
  console.log(data, token);
  try {
    await fetch(
      `http://localhost:8000/api/v1/auth/user/reset-password?token=${token}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return toast.success("Password changed successfully");
  } catch (err) {
    toast.error(err.message);
  }
}
