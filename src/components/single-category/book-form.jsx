import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import appointProvider from "../../services/appointment/appoint-provider";
import { generateTimeOptions } from "../../utils/get-time-options";
import { cn } from "../../utils/utils";
import BookFormImageInput from "../ui/book-form-image-input";
import Button from "../ui/button";
import Input from "../ui/input";
import Select from "../ui/select";

const schema = yup.object().shape({
  description: yup.string().required("Description is required"),
  detailedLocation: yup.string().required("Location is required"),
  arrivalDate: yup.date().required("Date is required"),
  arrivalTime: yup.string().required("Time is required"),
  appointmentImage: yup.mixed(),
});

export default function BookForm({
  isOpen,
  closeModal,
  userId,
  serviceId,
  providerId,
  close,
}) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (formData) => {
    setLoading(true);

    const formattedDate = new Date(formData.arrivalDate)
      .toISOString()
      .split("T")[0];

    await appointProvider({
      data: { ...formData, arrivalDate: formattedDate },
      userId: userId,
      providerId: providerId,
      serviceId: serviceId,
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
                  <h1>Appionments informations</h1>

                  <Select
                    options={generateTimeOptions()}
                    className={"px-2 py-3  text-base font-light"}
                    id={"arrivalTime"}
                    register={register}
                    error={errors.arrivalTime?.message}
                  />
                  <Input
                    type="text"
                    className={"px-4 py-3"}
                    placeholder={"Description"}
                    id={"description"}
                    register={register}
                    error={errors.description?.message}
                  />
                  <Input
                    type="text"
                    className={"px-4 py-3"}
                    id={"detailedLocation"}
                    register={register}
                    error={errors.detailedLocation?.message}
                    placeholder={"Location"}
                  />

                  <Input
                    min={new Date().toISOString().split("T")[0]}
                    type="date"
                    className={"px-4 py-3"}
                    placeholder={"Name"}
                    id={"arrivalDate"}
                    register={register}
                    error={errors.arrivalDate?.message}
                  />
                  <BookFormImageInput register={register} image={watch("")} />

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
