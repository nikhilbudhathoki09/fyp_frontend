import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../ui/button";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import loginProvider from "../../services/auth/login-provider";
import { cn } from "../../utils/utils";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8)
    .required("Password is required and should be 8 characters long"),
});

export default function ProviderLoginForm() {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    setLoading(true);
    await loginProvider(data);

    setLoading(false);
  };

  return (
    <div className="px-12 py-8 rounded-lg shadow-xl bg-white">
      <h3 className="text-text-color text-4xl font-semibold">
        Login as Provider
      </h3>
      <p className="text-base mt-3 text-text-color-secondary ">
        I don&apos;t have an account?
        <a
          className="text-primary underline ml-2 font-semibold"
          href="/register"
        >
          Register Now
        </a>
      </p>
      <form
        className={cn("space-y-5 mt-4 mb-2", loading && "blur-sm")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="email"
          icon={<MdEmail className="text-2xl text-primary" />}
          placeholder={"Email"}
          id={"email"}
          register={register}
          error={errors.email?.message}
        />
        <Input
          type="password"
          icon={<FaLock className="text-2xl text-primary" />}
          placeholder={"Password"}
          id={"password"}
          register={register}
          error={errors.password?.message}
        />
        <p className="text-primary text-sm  font-semibold">Forgot password ?</p>
        <Button
          type="submit"
          text="Login Now"
          loading={loading}
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </form>
    </div>
  );
}
