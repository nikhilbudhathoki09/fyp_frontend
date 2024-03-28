import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/button";
import appointProvider from "../../services/appointment/appoint-provider";
import { FaSpinner } from "react-icons/fa";
import { cn } from "../../utils/utils";

export default function BookForm({
  isOpen,
  closeModal,
  userId,
  serviceId,
  providerId,
  serviceName,
  providerName,
  close,
}) {
  const [loading, setLoading] = useState(false);
  const handleBook = async () => {
    setLoading(true);
    await appointProvider({
      userId,
      serviceId,
      providerId,
    });
    close();
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

                  <div className="w-full flex items-center p-3 rounded-md border">
                    <p>
                      Service : <b>{serviceName || "N/A"}</b>{" "}
                    </p>
                  </div>
                  <div className="w-full flex items-center p-3 rounded-md border">
                    <p>
                      Provider Name : <b> {providerName || "N/A"} </b>
                    </p>
                  </div>

                  <Button
                    text="Request Now"
                    onClick={handleBook}
                    icon={
                      <FaSpinner
                        className={cn(
                          loading && "block animate-spin",
                          "hidden"
                        )}
                      />
                    }
                    className="flex w-full justify-center bg-black rounded-lg p-3 text-white"
                  />
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
  userId: PropTypes.number,
  serviceId: PropTypes.number,
  serviceName: PropTypes.string,
  providerName: PropTypes.string,
  providerId: PropTypes.number,
  close: PropTypes.func,
};
