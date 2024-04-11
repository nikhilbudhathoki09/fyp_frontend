// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { cn } from "../../utils/utils";
import Button from "../ui/button";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import getAllCategory from "../../services/category/get-all-category";
import editService from "../../services/service-provider/edit-service";

const schema = yup.object().shape({
  serviceName: yup.string(),
  perHourRate: yup.number(),
  description: yup.string(),
  serviceImage: yup.mixed(),
  categoryName: yup.string(),
});

export default function EditServiceForm({
  isOpen,
  closeModal,
  serviceId,
  serviceName,
}) {
  console.log(serviceId);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getAllCategory();
      setCategories(data);
    };
    fetchServices();
  }, []);
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    await editService(data, serviceId);
    setLoading(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <form
            className="flex min-h-full items-center justify-center p-4 text-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full space-y-4 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h1 className="text-2xl font-semibold">
                  Edit service {serviceName}
                </h1>
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
                  text="Edit Service"
                  type="submit"
                  icon={
                    <FaSpinner
                      className={cn(loading && "block animate-spin", "hidden")}
                    />
                  }
                  loading={loading}
                  className="flex w-full justify-center bg-black rounded-lg p-3 text-white"
                />
              </Dialog.Panel>
            </Transition.Child>
          </form>
        </div>
      </Dialog>
    </Transition>
  );
}

EditServiceForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  serviceId: PropTypes.number,
  serviceName: PropTypes.string,
};
