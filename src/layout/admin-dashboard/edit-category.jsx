// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { cn } from "../../utils/utils";
import editCategory from "../../services/category/edit-category";

const schema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  categoryImage: yup.mixed(),
});
export default function EditCategoryForm({
  isOpen,
  closeModal,

  category,
}) {
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
    await editCategory(data, category.id);
    setLoading(false);
  };

  console.log(category);

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
                <h1 className="text-2xl font-semibold">Edit Category</h1>
                <hr />
                <Input
                  type="text"
                  className={"px-4 py-3"}
                  placeholder={"Category Name"}
                  id={"title"}
                  defaultValue={category.title}
                  register={register}
                  error={errors.title?.message}
                />
                <Input
                  type="text"
                  className={"px-4 py-3"}
                  id={"description"}
                  defaultValue={category.description}
                  register={register}
                  error={errors.description?.message}
                  placeholder={"Description"}
                />
                <br />
                <span>Category Image</span>
                <Input
                  type="file"
                  id="categoryImage"
                  register={register}
                  placeholder={"Category Image"}
                  error={errors.categoryImage?.message}
                />

                <Button
                  type={"submit"}
                  text={"Edit Category"}
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

EditCategoryForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  category: PropTypes.object,
};
