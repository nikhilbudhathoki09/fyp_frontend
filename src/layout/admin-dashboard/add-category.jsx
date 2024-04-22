// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Button from "../../components/ui/button";
import { cn } from "../../utils/utils";
import Input from "../../components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import addCategory from "../../services/category/add-category";

const schema = yup.object().shape({
  title: yup.string().required("Service name is required"),
  description: yup.string().required("Description is required"),
  categoryImage: yup.mixed(),
});

export default function AddCategory({ isOpen, closeModal }) {
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
    console.log(data);
    setLoading(true);
    await addCategory(data);
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
                <h1 className="text-2xl font-semibold">Add Location</h1>
                <hr />
                <Input
                  type="text"
                  className={"px-4 py-3"}
                  placeholder={"Service Name"}
                  id={"title"}
                  register={register}
                  error={errors.title?.message}
                />
                <Input
                  type="text"
                  className={"px-4 py-3"}
                  id={"description"}
                  register={register}
                  error={errors.description?.message}
                  placeholder={"Description"}
                />
                <span>Service Image</span>
                <Input
                  type="file"
                  id="categoryImage"
                  register={register}
                  placeholder={"Category Image"}
                  error={errors.categoryImage?.message}
                />

                <Button
                  type={"submit"}
                  text={"Add Category"}
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

AddCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
