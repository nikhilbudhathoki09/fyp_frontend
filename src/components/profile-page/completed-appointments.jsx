import { useState } from "react";
import Button from "../ui/button";
import PropTypes from "prop-types";
import GiveFeedbackform from "./give-feedback-form";
import { useSelector } from "react-redux";

export default function CompletedAppointments({ completedAppointments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState({});

  function closeModal() {
    setIsModalOpen(false);
  }
  const user = useSelector((state) => state.user);

  return (
    <div className="flex w-full flex-col border-2 border-green-400 rounded-md p-4">
      <p className="uppercase font-bold text-green-400">Completed</p>
      <br />
      <div className="grid grid-cols-3 items-center gap-5 ">
        {completedAppointments !== null &&
        completedAppointments?.length !== 0 ? (
          completedAppointments?.map((data, index) => (
            <div
              className="flex flex-col gap-4 shadow-md bg-white p-6 border-transparent border hover:border-yellow-400 transition-all duration-300 rounded-md"
              key={index}
            >
              <p className="text-xl font-semibold pb-2 border-b border-b-yellow-400">
                Appointment: {data.appointmentId}
              </p>
              <p className="text-sm">
                Date:{" "}
                {new Date(data.appointmentDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p className="text-sm">Arrival Time : {data.arrivalTime}</p>
              <p>{data.description}</p>
              <Button
                onClick={() => {
                  setSelectedAppointment(data);
                  setIsModalOpen(true);
                }}
                className="bg-green-500 p-2 pl-5 text-white hover:bg-green-800 transition-all duration-300 flex justify-center items-center rounded-md"
                text="Give feedback"
              />
            </div>
          ))
        ) : (
          <p>There are no appointments in this list at the moment</p>
        )}
      </div>
      <GiveFeedbackform
        closeModal={closeModal}
        isOpen={isModalOpen}
        providerId={1}
        userId={user.user.userId}
      />
    </div>
  );
}

CompletedAppointments.propTypes = {
  completedAppointments: PropTypes.arrayOf(PropTypes.object),
};
