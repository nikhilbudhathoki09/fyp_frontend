// import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Button from "../../components/ui/button";
import { cn } from "../../utils/utils";
import editLocation from "../../services/admin/edit-location";

export default function EditLocation({ isOpen, closeModal, location }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleEditClick = async () => {
    setLoading(true);
    const data = {
      name: name,
      description: description,
    };
    await editLocation(data, location.id);
    setLoading(false);
  };
  console.log(location);

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
                <h1 className="text-2xl font-semibold">Edit Location</h1>
                <hr />

                <input
                  className="w-full p-2 border-2 border-gray-300 rounded-lg mt-2"
                  type="text"
                  placeholder="Name"
                  defaultValue={location.name}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  type="text"
                  defaultValue={location.description}
                  className="w-full p-2 h-36 border-2 border-gray-300 rounded-lg mt-2"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Button
                  text={"Edit Location"}
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

EditLocation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  location: PropTypes.object,
};
