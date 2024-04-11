// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";
import { TOKEN_KEY, USER_KEY } from "../../utils/constants";

export default async function loginProvider(data) {
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/auth/providers/login",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);

      return;
    }

    localStorage.setItem(TOKEN_KEY, json.access_token);
    localStorage.setItem(USER_KEY, JSON.stringify(json.provider));

    document.cookie = `token=${json.access_token}`;

    window.location.href = `provider-landing/${json.provider.providerId}`;

    toast.success("Logged in successfully");
  } catch (err) {
    toast.error(err.message);
  }
}
