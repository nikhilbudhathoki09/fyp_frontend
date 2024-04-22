// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Button from "../../components/ui/button";
import { cn } from "../../utils/utils";
import editProviderStatus from "../../services/admin/change-provider-status";

export default function EditProvider({
  isOpen,
  closeModal,
  providerId,
  verified,
}) {
  const [loading, setLoading] = useState(false);

  const handleEditClick = async () => {
    setLoading(true);
    await editProviderStatus(providerId, "approved");
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
                <h1 className="text-2xl font-semibold">Edit Provider status</h1>
                <hr />

                {verified ? (
                  <div className="flex px-2 py-1 rounded-full items-center justify-center text-white bg-blue-600">
                    verified
                  </div>
                ) : (
                  <div className="flex px-2 py-1 rounded-full items-center justify-center text-white bg-red-600">
                    Unverified
                  </div>
                )}

                <Button
                  text={
                    verified ? "Change as Unverified" : "Change as Verified"
                  }
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

EditProvider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  providerId: PropTypes.number,
  verified: PropTypes.bool,
};
