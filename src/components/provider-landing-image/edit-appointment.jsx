// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa";
import editAppointment from "../../services/service-provider/edit-appointment";
import { cn } from "../../utils/utils";
import Button from "../ui/button";

export default function EditAppointment({ isOpen, closeModal, appointmentId }) {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleEditClick = async () => {
    setLoading(true);
    await editAppointment(appointmentId, selectedOption.toLocaleLowerCase());
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                  Edit Appointment status
                </h1>
                <hr />

                <div className="flex flex-row gap-4 items-center">
                  <div
                    className={cn(
                      "px-4 py-2 relative bg-green-500 uppercase border-2 cursor-pointer border-transparent text-white rounded-md",
                      selectedOption === "ACCEPTED" && " border-black"
                    )}
                    onClick={() => setSelectedOption("ACCEPTED")}
                  >
                    Accept
                    {selectedOption === "ACCEPTED" && (
                      <FaCheck className="flex p-1 text-xl absolute -top-3 -right-2 rounded-full border bg-green-500 " />
                    )}
                  </div>
                  <div
                    className={cn(
                      "px-4 py-2 relative bg-red-500 uppercase border-2 cursor-pointer border-transparent text-white rounded-md",
                      selectedOption === "CANCELLED" && " border-black"
                    )}
                    //   onClick={() => setSelectedOption("ACCEPTED")}
                    onClick={() => setSelectedOption("CANCELLED")}
                  >
                    Cancel
                    {selectedOption === "CANCELLED" && (
                      <FaCheck className="flex p-1 text-xl absolute -top-3 -right-2 rounded-full border bg-green-500 " />
                    )}
                  </div>
                </div>

                <Button
                  text="Edit Appiontment status"
                  onClick={handleEditClick}
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
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

EditAppointment.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  appointmentId: PropTypes.number,
};
