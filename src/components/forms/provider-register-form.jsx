import { MdEmail } from "react-icons/md";
import Input from "../ui/input";
import { FaLock, FaPhone, FaUserAlt } from "react-icons/fa";
import registerUser from "../../services/auth/register-user";
import Button from "../ui/button";
import Select from "../ui/select";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProfileImageInput from "../ui/profile-image-input";
import { useState } from "react";
import { cn } from "../../utils/utils";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.number().positive().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  gender: yup
    .string()
    .oneOf(["male", "female"])
    .required("Please select a gender"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]+$/,
      "Password must contain at least one uppercase, one lowercase letter,  one number, and one special character (@ or #)"
    )
    .required("Password is required"),

  userImage: yup.mixed().required("Profile picture is required"),
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
    await registerUser(data);
    setLoading(false);
  };

  return (
    <div className="px-12 py-8 rounded-lg shadow-xl bg-white w-full">
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
          placeholder="Username"
          register={register}
          id={"username"}
          type="text"
          error={errors.username?.message}
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

        {/* <ProfileImageInput register={register} image={watch("userImage")} /> */}
        <div className="flex  w-full flex-row gap-4 justify-between">
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
        <Select
          options={[
            { value: "0", label: "Select Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          icon={<IoMaleFemaleSharp className="text-2xl text-primary" />}
          placeholder="Select Gender"
          register={register}
          id={"gender"}
          type="text"
          className={"w-full"}
          error={errors.gender?.message}
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

        <p className="text-primary text-sm  font-semibold">Forgot password?</p>
        <Button
          type="submit"
          text="Register Now"
          // loading={loading}
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </form>
    </div>
  );
}
