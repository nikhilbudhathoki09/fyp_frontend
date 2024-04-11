import { Table } from "@mantine/core";
import "@mantine/core/styles.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import EditServiceForm from "./edit-service-form";

export default function ServicesTable({ allServices }) {
  console.log(allServices);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  function closeModal() {
    setModalOpen(false);
  }

  const handleEditClick = (service) => {
    setModalOpen(true);
    setSelectedService(service);
  };
  const rows = allServices?.map((element) => (
    <Table.Tr key={element.id} className="text-base">
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.serviceName}</Table.Td>
      <Table.Td>Rs {element.perHourRate}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>
        {element.serviceImage !== null ? (
          <img
            src={element.serviceImage}
            className="w-32 h-28 object-contain bg-black"
          />
        ) : (
          <p>No image</p>
        )}
      </Table.Td>

      <Table.Td>
        <div className="flex flex-row gap-3 items-center">
          <FaRegEdit
            className="text-primary cursor-pointer hover:scale-110 transition-all duration-300"
            size={25}
            onClick={() => handleEditClick(element)}
          />
          <LuTrash
            className="text-red-500 cursor-pointer hover:scale-110 transition-all duration-300"
            size={25}
          />
        </div>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <h1 className="text-2xl font-bold">Your Services</h1>
      <hr />
      <br />
      <Table withTableBorder withColumnBorders border={8} cellPadding={10}>
        <Table.Thead>
          <Table.Tr className=" text-lg  bg-gray-300">
            <Table.Th>I.D.</Table.Th>
            <Table.Th>Service name</Table.Th>
            <Table.Th>Price / hr</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Service Image</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <EditServiceForm
        closeModal={closeModal}
        isOpen={modalOpen}
        serviceId={selectedService.id}
        serviceName={selectedService.serviceName}
      />
    </div>
  );
}

ServicesTable.propTypes = {
  allServices: PropTypes.array,
};
