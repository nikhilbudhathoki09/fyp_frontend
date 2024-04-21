import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import PropTypes from "prop-types";
import { Select } from "@mantine/core";
import Input from "../ui/input";
import Button from "../ui/button";
import { cn } from "../../utils/utils";

const schema = yup.object().shape({
  description: yup.string().required("Description is required"),
  rating: yup.number().required("Rating is required"),
});

export default function GiveFeedbackform({
  isOpen,
  closeModal,
  providerId,
  userId,
}) {
  const [loading, setLoading] = React.useState(false);
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
            <form className="flex min-h-full items-center justify-center p-4 text-center">
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
                  <h1>Appionments informations</h1>

                  <Select
                    data={["1", "2", "3", "4", "5"]}
                    className={"px-2 py-3  text-base font-light"}
                    id={"arrivalTime"}
                  />
                  <Input
                    type="text"
                    className={"px-4 py-3"}
                    placeholder={"Description"}
                    id={"description"}
                  />

                  <Button
                    text="Request Now"
                    type="submit"
                    icon={
                      <FaSpinner
                        className={cn(
                          loading && "block animate-spin",
                          "hidden"
                        )}
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
    </div>
  );
}

GiveFeedbackform.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  userId: PropTypes.number,

  providerId: PropTypes.number,
};
