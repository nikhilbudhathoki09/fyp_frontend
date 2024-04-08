import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaPhone, FaUserAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import * as yup from "yup";
import registerProvider from "../../services/auth/register-provider";
import { cn } from "../../utils/utils";
import Button from "../ui/button";
import Input from "../ui/input";
import ProviderImageInput from "../ui/provider-pp-input";

const schema = yup.object().shape({
  providerName: yup.string().required("Provider Name is required"),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  description: yup
    .string()
    .min(10)
    .max(100)
    .required("Description is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]+$/,
      "Password must contain at least one uppercase, one lowercase letter,  one number, and one special character (@ or #)"
    )
    .required("Password is required"),
  registrationDocument: yup
    .mixed()
    .required("Registration Document is required"),
  experienceDocument: yup.mixed().required("Experience Document is required"),
  address: yup.string().required("Address is required"),
  providerImage: yup.mixed().required("Profile picture is required"),
});
export default function ProviderRegisterFrom() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    setLoading(true);
    await registerProvider(data);
    setLoading(false);
  };

  return (
    <div className="px-12 py-8  rounded-lg shadow-xl bg-white w-full">
      <h3 className="text-text-color text-3xl font-semibold">
        Register as a Service Provider
      </h3>
      <p className="text-base mt-3 text-text-color-secondary ">
        I already have an account?
        <a className="text-primary underline ml-2 font-semibold" href="/login">
          Login Now
        </a>
      </p>
      <form
        className={cn("space-y-5 w-full mt-4 mb-2 ", loading && "blur-sm")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          icon={<FaUserAlt className="text-2xl text-primary" />}
          placeholder="Your Name"
          register={register}
          id={"providerName"}
          type="text"
          error={errors.providerName?.message}
          className={"w-full"}
        />
        <Input
          type="email"
          icon={<MdEmail className="text-2xl text-primary" />}
          className={"w-full"}
          placeholder={"Email"}
          register={register}
          id={"email"}
          error={errors.email?.message}
        />

        <div className="grid  w-full grid-cols-2 gap-4">
          <Input
            type="number"
            icon={<FaPhone className="text-2xl text-primary" />}
            placeholder={"Phone Number"}
            register={register}
            id={"phoneNumber"}
            error={errors.phoneNumber?.message}
            className={"flex w-full"}
            required={true}
          />

          <Input
            icon={<FaMapLocationDot className="text-2xl text-primary" />}
            placeholder={"Address"}
            register={register}
            id={"address"}
            type="text"
            error={errors.address?.message}
            className={"flex w-full"}
            required={true}
          />
        </div>

        <Input
          type="text"
          placeholder={"Description"}
          register={register}
          id={"description"}
          error={errors.description?.message}
        />

        <Input
          type="password"
          icon={<FaLock className="text-2xl text-primary" />}
          placeholder={"Password"}
          register={register}
          id={"password"}
          className={"w-full"}
          error={errors.password?.message}
          required={true}
        />
        <ProviderImageInput
          register={register}
          image={watch("providerImage")}
        />
        <div className="flex flex-row gap-4">
          <div>
            <p>Upload Your Registration Document</p>
            <Input
              type="file"
              placeholder={"Registration Document"}
              register={register}
              id={"registrationDocument"}
              error={errors.registrationDocument?.message}
              required={true}
            />
          </div>
          <div>
            <p>Upload Your Registration Document</p>

            <Input
              type="file"
              placeholder={"Experience Document"}
              register={register}
              id={"experienceDocument"}
              error={errors.experienceDocument?.message}
              required={true}
            />
          </div>
        </div>

        <p className="text-primary text-sm  font-semibold">Forgot password?</p>
        <Button
          type="submit"
          text="Register Now"
          loading={loading}
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </form>
    </div>
  );
}
