// import { TRegisterForm } from "#/components/login/register-form";
import { toast } from "react-hot-toast";

export default async function loginUser(data) {
  try {
    // const res = await fetch(process.env.API_BASE_URL + `/auth/login`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // const json = await res.json();

    // if (!res.ok) {
    //   toast.error(json.message);
    //   return;
    // }

    // toast.success(json.message);
    console.log("dfghj");
    console.log(data);
  } catch (err: any) {
    toast.error(err.message);
  }
}
