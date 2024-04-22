import PropTypes from "prop-types";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import cancelAppointment from "../../services/appointment/cancel-appointment";
import Button from "../ui/button";

export default function RejectedAppointments({ rejectedAppointments }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (appointmentId) => {
    setLoading(true);
    await cancelAppointment(appointmentId);
    setLoading(false);
  };
  return (
    <div className="flex flex-col w-full border-2 border-red-500 rounded-md p-4">
      <p className="uppercase font-bold text-red-500">Rejected</p>
      <br />

      <div className="grid grid-cols-2 items-center gap-5 ">
        {rejectedAppointments.length !== 0 ? (
          rejectedAppointments?.map((data, index) => (
            <div
              className="flex flex-col gap-4 shadow-md bg-white p-8 border-transparent border hover:border-red-500 transition-all duration-300 rounded-md"
              key={index}
            >
              <p className="text-xl font-semibold pb-2 border-b border-b-red-500">
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
              <p className="text-sm">Time: {data.arrivalTime} </p>
              <p>{data.description}</p>

              <Button
                onClick={() => handleClick(data.appointmentId)}
                className="bg-red-500 p-2 pl-5 text-white hover:bg-red-800 transition-all duration-300 flex items-center rounded-md"
                text="Cancel Appointment"
                icon={loading && <FaSpinner className="animate-spin" />}
              />
            </div>
          ))
        ) : (
          <p>There are no appointments in this list at the moment</p>
        )}
      </div>
    </div>
  );
}

RejectedAppointments.propTypes = {
  rejectedAppointments: PropTypes.array.isRequired,
};
