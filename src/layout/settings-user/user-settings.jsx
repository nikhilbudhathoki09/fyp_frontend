import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import Button from "../../components/ui/button";
import ProfileImageInput from "../../components/ui/profile-image-input";
import Select from "../../components/ui/select";
import updateUserDetails from "../../services/user/update-details";
import { cn } from "../../utils/utils";

const schema = yup.object().shape({
  name: yup.string(),
  phoneNumber: yup.string(),
  address: yup.string(),
  gender: yup.string().oneOf(["male", "female"]),
  userImage: yup.mixed(),
});

export default function UserSettings() {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

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
    await updateUserDetails(data, user.user.userId);
    setLoading(false);
  };

  console.log(user);

  return (
    <form
      className={cn("space-y-3", loading && "blur-2xl")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">
          Edit your profile details here.
        </h1>
      </div>
      <hr />

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            {...(register && {
              ...register("providerName"),
            })}
            defaultValue={user.user.name}
          />
          {errors.providerName && (
            <span className="text-xs text-start text-red-400">
              {errors.user.message}
            </span>
          )}
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="description">Phone Number</label>
          <input
            id="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Number"
            {...(register && {
              ...register("phoneNumber"),
            })}
            defaultValue={user.user.phoneNumber}
          />
          {errors.phoneNumber && (
            <span className="text-xs text-start text-red-400">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Address</label>
          <input
            id="address"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Address"
            {...(register && {
              ...register("address"),
            })}
            defaultValue={user.user.address}
          />
          {errors.address && (
            <span className="text-xs text-start text-red-400">
              {errors.address.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Gender</label>
          <Select
            options={[
              { value: "0", label: "Select Gender" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            icon={<IoMaleFemaleSharp className="text-xl text-primary" />}
            placeholder="Select Gender"
            register={register}
            id={"gender"}
            type="text"
            className={"w-full"}
            error={errors.gender?.message}
          />
        </div>
        <ProfileImageInput register={register} image={watch("userImage")} />
      </div>

      <Button
        type={"submit"}
        text="Save Changes"
        className="bg-primary items-center flex justify-center  px-10 w-[50%] py-4 text-white rounded-md"
      />
    </form>
  );
}
