// import React from "react";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { cn } from "../../utils/utils";
import Button from "../ui/button";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BookFormImageInput from "../ui/book-form-image-input";

// [
//   {
//     key: "serviceName",
//     value: "Tap Repairment",
//     description: "",
//     type: "text",
//     enabled: true,
//   },
//   {
//     key: "perHourRate",
//     value: "250",
//     description: "",
//     type: "text",
//     enabled: true,
//   },
//   {
//     key: "description",
//     value: "installation of tap+repairment",
//     description: "",
//     type: "text",
//     enabled: true,
//   },
//   {
//     key: "serviceImage",
//     description: "",
//     type: "file",
//     enabled: true,
//     value: ["postman-cloud:///1eeeac95-dfe5-4860-bb67-aa2e8fee5be6"],
//   },
//   {
//     key: "categoryName",
//     value: "Plumbing",
//     description: "",
//     type: "text",
//     enabled: true,
//   },
// ];

const schema = yup.object().shape({
  serviceName: yup.string().required("Service name is required"),
  perHourRate: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  serviceImage: yup.mixed(),
  categoryName: yup.string().required("Category is required"),
});

export default function AddService() {
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

  return (
    <div>
      <div className="">
        <form
          className="flex flex-col gap-3"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-semibold">Add service</h1>
          <hr />

          <Input
            type="text"
            className={"px-4 py-3"}
            placeholder={"Service Name"}
            id={"serviceName"}
            register={register}
            error={errors.description?.message}
          />
          <Input
            type="text"
            className={"px-4 py-3"}
            placeholder={"Per Hour Price   Rs/hr"}
            id={"perHourRate"}
            register={register}
            error={errors.perHourRate?.message}
          />
          <Input
            type="text"
            className={"px-4 py-3"}
            placeholder={"Category Name"}
            id={"categoryName"}
            register={register}
            error={errors.categoryName?.message}
          />
          <Input
            type="text"
            className={"px-4 py-3"}
            id={"description"}
            register={register}
            error={errors.detailedLocation?.message}
            placeholder={"Description"}
          />

          <BookFormImageInput register={register} image={watch("")} />

          <Button
            text="Add Service"
            type="submit"
            icon={
              <FaSpinner
                className={cn(loading && "block animate-spin", "hidden")}
              />
            }
            loading={loading}
            className="flex w-full justify-center bg-black rounded-lg p-3 text-white"
          />
        </form>
      </div>
    </div>
  );
}
