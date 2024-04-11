// import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as yup from "yup";
import getAllCategory from "../../services/category/get-all-category";
import addService from "../../services/service-provider/add-service";
import { cn } from "../../utils/utils";
import Button from "../ui/button";
import Input from "../ui/input";

const schema = yup.object().shape({
  serviceName: yup.string().required("Service name is required"),
  perHourRate: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  serviceImage: yup.mixed(),
  categoryName: yup.string().required("Category is required"),
});

export default function AddService() {
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getAllCategory();
      setCategories(data);
    };
    fetchServices();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    await addService(data, user.user.providerId);
    setLoading(false);
  };

  return (
    <div>
      <div className="">
        <form
          className={cn("flex flex-col gap-3", loading && "blur-sm")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-semibold">Add service</h1>
          <hr />
          <Input
            type="text"
            className={"px-4 py-3"}
            placeholder={"Service Name"}
            id={"serviceName"}
            register={register}
            error={errors.categoryName?.message}
          />
          <Input
            type="text"
            className={"px-4 py-3"}
            placeholder={"Per Hour Price   Rs/hr"}
            id={"perHourRate"}
            register={register}
            error={errors.perHourRate?.message}
          />

          <select
            className="px-4 py-3 border  sm:text-sm border-gray-300 focus:outline-primary rounded-md text-text-color-secondary text-xl"
            {...(register && {
              ...register("categoryName"),
            })}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>

          <Input
            type="text"
            className={"px-4 py-3"}
            id={"description"}
            register={register}
            error={errors.detailedLocation?.message}
            placeholder={"Description"}
          />
          <span>Service Image</span>
          <Input
            type="file"
            id="serviceImage"
            register={register}
            placeholder={"Service Image"}
            error={errors.serviceImage?.message}
          />
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
