import { Table } from "@mantine/core";
import "@mantine/core/styles.css";
import PropTypes from "prop-types";
import { cn } from "../../utils/utils";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import EditAppointment from "./edit-appointment";

export default function AppointmentsTable({ appointments }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState({});

  console.log(appointments);

  function closeModal() {
    setModalOpen(false);
  }

  const handleEditClick = (appointment) => {
    setModalOpen(true);
    setSelectedAppointmentId(appointment);
  };

  const rows = appointments?.map((element) => (
    <Table.Tr key={element.appointmentId} className="text-base">
      <Table.Td>{element.appointmentId}</Table.Td>
      <Table.Td>{element.description || "N/A"}</Table.Td>
      <Table.Td>
        {element.appointmentImage !== null ? (
          <img
            src={element.appointmentImage}
            className="w-32 h-28 object-contain bg-black"
          />
        ) : (
          <p>No image</p>
        )}
      </Table.Td>
      <Table.Td>{element.appointmentDate || "2023-2-2"}</Table.Td>
      <Table.Td>{element.arrivalTime || "10:10 AM"}</Table.Td>
      <Table.Td>{element.detailedLocation}</Table.Td>
      <Table.Td>
        {
          <div
            className={cn(
              "flex p-2  rounded-md text-sm text-white items-center justify-center",
              element.status === "PENDING" && "bg-yellow-600",
              element.status === "ACCEPTED" && "bg-green-600",
              element.status === "CANCELLED" && "bg-red-600"
            )}
          >
            {element.status}
          </div>
        }
      </Table.Td>

      <Table.Td>
        <div className="flex flex-row gap-3 items-center">
          <FaRegEdit
            className="text-primary cursor-pointer hover:scale-110 transition-all duration-300"
            size={25}
            onClick={() => handleEditClick(element)}
          />
        </div>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <h1 className="text-2xl font-bold">Your Appointments</h1>
      <hr />
      <br />
      <Table withTableBorder withColumnBorders border={8} cellPadding={10}>
        <Table.Thead>
          <Table.Tr className=" text-lg  bg-gray-300">
            <Table.Th>I.D.</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>Appointment Date</Table.Th>
            <Table.Th>Arrival Time</Table.Th>
            <Table.Th>Location</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Edit Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <EditAppointment
        closeModal={closeModal}
        isOpen={modalOpen}
        appointmentId={selectedAppointmentId.appointmentId}
      />
    </div>
  );
}

AppointmentsTable.propTypes = {
  appointments: PropTypes.array,
};
