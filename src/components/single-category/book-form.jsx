import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import Select from "../ui/select";
import Input from "../ui/input";
import Button from "../ui/button";

export default function BookForm({ isOpen, closeModal }) {
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
                  <h1>Appionments informations</h1>
                  <Select
                    options={[
                      { label: "Pick Time", value: null },
                      { value: "Price", label: "Price" },
                      { value: "Location", label: "Location" },
                    ]}
                    className={"px-2 py-3  text-base font-light"}
                  />
                  <Input
                    type="Name"
                    className={"px-4 py-3"}
                    placeholder={"Name"}
                  />
                  <Input
                    type="Name"
                    className={"px-4 py-3"}
                    placeholder={"Name"}
                  />
                  <Input
                    type="Name"
                    className={"px-4 py-3"}
                    placeholder={"Name"}
                  />
                  <Button text="Request Now" className="flex w-full justify-center bg-black rounded-lg p-3 text-white" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

BookForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
