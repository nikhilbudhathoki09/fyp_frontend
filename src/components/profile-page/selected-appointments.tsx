import React from "react";
import Button from "../ui/button";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

export default function SelectedAppointments({ selectedAppointments }) {
  return (
    <div className="flex w-full flex-col border-2 border-green-400 rounded-md p-4">
      <p className="uppercase font-bold text-green-400">APPROVED</p>
      <br />
      <div className="grid grid-cols-2 items-center gap-5 ">
        {selectedAppointments.length !== 0 ? (
          selectedAppointments.map((data, index) => (
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
                className="bg-red-500 p-2 pl-5 text-white hover:bg-red-800 transition-all duration-300 flex items-center rounded-md"
                text="Cancel Appointment"
                icon={<ImCross />}
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

SelectedAppointments.prototype = {
  selectedAppointments: PropTypes.array,
};
