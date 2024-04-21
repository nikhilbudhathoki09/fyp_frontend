import { Dialog, Transition } from "@headlessui/react";
import { Select } from "@mantine/core";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { FaSpinner } from "react-icons/fa";
import { cn } from "../../utils/utils";
import Button from "../ui/button";
import Input from "../ui/input";
import giveFeedBack from "../../services/user/give-feedback";

export default function GiveFeedbackform({
  isOpen,
  closeModal,
  providerId,
  userId,
}) {
  const [loading, setLoading] = React.useState(false);
  const [selectedRating, setSelectedRating] = React.useState(0);
  const [description, setDescription] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      rating: selectedRating,
      comment: description,
    };
    await giveFeedBack(data, userId, providerId);
    setLoading(false);
  };

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

                  <select
                    name="rating"
                    id="rating"
                    className="px-4 py-3 w-full bg-gray-100 rounded-lg mt-2"
                    onChange={(e) => setSelectedRating(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Description"
                    className="px-4 py-3 w-full bg-gray-100 rounded-lg mt-2"
                    onChange={(e) => setDescription(e.target.value)}
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
                    onClick={handleSubmit}
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
