import { useEffect, useState } from "react";
import Button from "../ui/button";
import getAllLocations from "../../services/locations/get-all-locations";
import getAllCategory from "../../services/category/get-all-category";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import editDetails from "../../services/service-provider/edit-details";
import { cn } from "../../utils/utils";
import { useSelector } from "react-redux";
import getSingleProvider from "../../services/service-provider/get-single-provider";

const schema = yup.object().shape({
  providerName: yup.string(),
  phoneNumber: yup.string(),
  description: yup.string(),

  address: yup.string(),
  yearOfExperience: yup.number().positive(),
  minServicePrice: yup.number().positive(),
  maxServicePrice: yup.number().positive(),
  categoryId: yup.number(),
  locationId: yup.number(),
});

export default function Settings() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const [category, setCategories] = useState([]);
  const [provider, setProvider] = useState({});

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getAllLocations();
      setLocations(data);
    };
    const fetchCategory = async () => {
      const data = await getAllCategory();
      setCategories(data);
    };
    const fetchProvider = async () => {
      const data = await getSingleProvider(user.user.providerId);
      setProvider(data);
    };
    fetchProvider();
    fetchLocations();
    fetchCategory();
  }, [user.user.providerId]);

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
    await editDetails(user.user.providerId, data);
    setLoading(false);
  };


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
            defaultValue={provider.providerName}
          />
          {errors.providerName && (
            <span className="text-xs text-start text-red-400">
              {errors.providerName.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            {...(register && {
              ...register("description"),
            })}
            defaultValue={provider.description}
          />
          {errors.description && (
            <span className="text-xs text-start text-red-400">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="description">Phone Number</label>
          <input
            id="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            {...(register && {
              ...register("phoneNumber"),
            })}
            defaultValue={provider.phoneNumber}
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
            placeholder="Edit Name"
            {...(register && {
              ...register("address"),
            })}
            defaultValue={provider.address}
          />
          {errors.address && (
            <span className="text-xs text-start text-red-400">
              {errors.address.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Years of Experience</label>
          <input
            id="experience"
            type="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            {...(register && {
              ...register("yearOfExperience"),
            })}
            defaultValue={provider.yearOfExperience}
          />
          {errors.yearOfExperience && (
            <span className="text-xs text-start text-red-400">
              {errors.yearOfExperience.message}
            </span>
          )}
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="number">Min Service Price</label>
          <input
            id="min"
            type="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            {...(register && {
              ...register("minServicePrice"),
            })}
            defaultValue={provider.minServicePrice}
          />
          {errors.minServicePrice && (
            <span className="text-xs text-start text-red-400">
              {errors.minServicePrice.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Max Service Price</label>
          <input
            id="max"
            type="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            {...(register && {
              ...register("maxServicePrice"),
            })}
            defaultValue={provider.maxServicePrice}
          />
          {errors.maxServicePrice && (
            <span className="text-xs text-start text-red-400">
              {errors.maxServicePrice.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="flex w-full rounded-md border p-4"
            defaultValue={provider.categoryId}
          >
            {category?.map((data, i) => (
              <option
                key={i}
                value={data.id}
                {...(register && {
                  ...register("categoryId"),
                })}
              >
                {data.title}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <span className="text-xs text-start text-red-400">
              {errors.categoryId.message}
            </span>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Location</label>

          <select
            id="number"
            className="flex w-full rounded-md border p-4"
            defaultValue={provider.locationId}
          >
            {locations?.map((data, i) => (
              <option
                key={i}
                value={data.id}
                {...(register && {
                  ...register("locationId"),
                })}
              >
                {data.name}
              </option>
            ))}
          </select>
          {errors.locationId && (
            <span className="text-xs text-start text-red-400">
              {errors.locationId.message}
            </span>
          )}
        </div>
      </div>
      <Button
        type={"submit"}
        text="Save Changes"
        className="bg-primary items-center flex justify-center  px-10 w-[50%] py-4 text-white rounded-md"
      />
    </form>
  );
}
