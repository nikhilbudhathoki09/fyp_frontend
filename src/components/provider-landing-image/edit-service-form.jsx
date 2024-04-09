// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { cn } from "../../utils/utils";
import Button from "../ui/button";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import addService from "../../services/service-provider/add-service";
import PropTypes from "prop-types";

const schema = yup.object().shape({
  serviceName: yup.string().required("Service name is required"),
  perHourRate: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  serviceImage: yup.mixed(),
  categoryName: yup.string().required("Category is required"),
});

export default function EditServiceForm({ isOpen, closeModal, providerId }) {
  const [loading, setLoading] = useState(false);
  console.log(providerId);
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
    await addService(data);
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
        <div className="">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel>
              <form
                className="flex flex-col gap-3"
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
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

EditServiceForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  providerId: PropTypes.number,
};
