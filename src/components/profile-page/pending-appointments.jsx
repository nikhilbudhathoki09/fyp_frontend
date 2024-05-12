import PropTypes from "prop-types";
import Button from "../ui/button";
import cancelAppointment from "../../services/appointment/cancel-appointment";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function PendingAppointments({ pendingAppointments }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (appointmentId) => {
    setLoading(true);
    await cancelAppointment(appointmentId);
    setLoading(false);
  };
  return (
    <div className="flex w-full flex-col border-2 border-yellow-400 rounded-md p-4">
      <p className="uppercase font-bold text-yellow-400">Pending</p>
      <br />
      <div className="grid grid-cols-2 items-stretch gap-5 ">
        {pendingAppointments?.length !== 0 ? (
          pendingAppointments?.map((data, index) => (
            <div
              className="flex flex-col justify-between gap-4 shadow-md bg-white p-6 border-transparent border hover:border-yellow-400 transition-all duration-300 rounded-md"
              key={index}
            >
              <div>
                <p className="text-xl font-semibold pb-2 border-b border-b-yellow-400">
                  Appointment
                </p>
                <p className="text-sm">
                  Date:{" "}
                  {new Date(data.appointmentDate).toLocaleDateString(
                    undefined,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>

                <p className="text-sm">Arrival Time : {data.arrivalTime}</p>
                <p>{data.description}</p>
              </div>
              <Button
                icon={loading && <FaSpinner className="animate-spin" />}
                className="bg-red-500 p-2 pl-5 text-white hover:bg-red-800 transition-all duration-300 flex items-center justify-center rounded-md"
                text="Cancel Appointment"
                onClick={() => handleClick(data.appointmentId)}
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

PendingAppointments.propTypes = {
  pendingAppointments: PropTypes.array,
};
