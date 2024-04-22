import { Table } from "@mantine/core";
import PropTypes from "prop-types";
import Button from "../../components/ui/button";
import { FaEdit, FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import AddLocation from "./add-location";
import EditLocation from "./edit-location";

export default function LocationTable({ locations }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});

  function closeModal() {
    setModalOpen(false);
  }
  const rows = locations?.map((element) => (
    <Table.Tr key={element.userId} className="text-base">
      <Table.Td>{element.id}</Table.Td>

      <Table.Td>{element.name}</Table.Td>

      <Table.Td>{element.description}</Table.Td>
      <Table.Td>
        <Button
          text="Edit"
          onClick={() => {
            setSelectedLocation(element);

            setEditModalOpen(true);
          }}
          icon={<FaEdit />}
          className="bg-button flex justify-center items-center text-white font-semibold rounded-lg px-4 py-2"
        />
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Locations</h1>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          text="Add location"
          icon={<FaLocationArrow />}
          className="px-4 py-2 bg-button rounded-lg text-white font-semibold text-sm"
        />
      </div>
      <br />
      <hr />
      <br />
      <Table withTableBorder withColumnBorders border={8} cellPadding={10}>
        <Table.Thead>
          <Table.Tr className=" text-lg  bg-gray-300">
            <Table.Th>I.D.</Table.Th>

            <Table.Th> Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Edit</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <AddLocation isOpen={modalOpen} closeModal={closeModal} />
      <EditLocation
        isOpen={editModalOpen}
        closeModal={() => setEditModalOpen(false)}
        location={selectedLocation}
      />
    </div>
  );
}

LocationTable.propTypes = {
  locations: PropTypes.array,
};
