import { toast } from "react-hot-toast";

export default async function resetPassword(data) {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/auth/user/reset-password-request`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }

    // Check if the response is JSON
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const json = await res.json();
      console.log(json);
    } else {
      const textResponse = await res.text();
      console.log(textResponse);
    }

    toast.success("Password reset link sent successfully to email");
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
}
