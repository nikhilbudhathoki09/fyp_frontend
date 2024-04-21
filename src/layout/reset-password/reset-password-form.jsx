import { FaLock } from "react-icons/fa";
import loginUser from "../../services/auth/login-user";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@mantine/core";
import { useState } from "react";
import * as yup from "yup";
import Button from "../../components/ui/button";
import { cn } from "../../utils/utils";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8)
    .required("Password is required and should be 8 characters long"),
});

export default function ResetPasswordForm() {
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
    await loginUser(data);

    setLoading(false);
  };

  return (
    <div className="px-12 py-8 rounded-lg shadow-xl bg-white">
      <h3 className="text-text-color text-4xl font-semibold">
        Reset your password
      </h3>
      <hr />

      <form
        className={cn("space-y-5 mt-4 mb-2", loading && "blur-sm")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="password"
          size="lg"
          icon={<FaLock className="text-2xl py-5 text-primary" />}
          placeholder={"New Password"}
          id={"password"}
          register={register}
          error={errors.password?.message}
        />
        <Button
          type="submit"
          text="Reset now"
          loading={loading}
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </form>
    </div>
  );
}
