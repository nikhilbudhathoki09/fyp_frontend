import { Table } from "@mantine/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProvider from "./edit-provider";
import { RiExternalLinkLine } from "react-icons/ri";

export default function ProvidersTable({ providers }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({});

  function closeModal() {
    setModalOpen(false);
  }
  console.log(providers);

  const rows = providers?.map((element) => (
    <Table.Tr key={element.providerId} className="text-base">
      <Table.Td>{element.providerId}</Table.Td>
      <Table.Td>
        {element.providerImage !== null ? (
          <img
            src={element.userImage}
            className="w-32 h-28 object-contain bg-black"
          />
        ) : (
          <p>No image</p>
        )}
      </Table.Td>
      <Table.Td>{element.providerName}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.phoneNumber}</Table.Td>

      <Table.Td>
        {/* <div className="flex p-2  rounded-md text-sm text-white items-center justify-center"> */}
        {element.status === "APPROVED" && (
          <div className="flex uppercase px-4 py-1 rounded-full items-center justify-center text-white bg-blue-600">
            APproved
          </div>
        )}
        {element.status === "PENDING" && (
          <div className="flex uppercase px-4 py-1 rounded-full items-center justify-center text-white bg-yellow-600">
            Pending
          </div>
        )}
        {element.status === "REJECTED" && (
          <div className="flex uppercase px-4 py-1 rounded-full items-center justify-center text-white bg-yellow-600">
            Pending
          </div>
        )}

        {/* </div> */}
      </Table.Td>
      <Table.Td>
        <div
          className="flex flex-row gap-3 items-center"
          onClick={() => {
            setModalOpen(true);
            setSelectedProvider(element);
          }}
        >
          <FaRegEdit
            className="text-primary cursor-pointer hover:scale-110 transition-all duration-300"
            size={25}
          />
        </div>
      </Table.Td>
      <Table.Td>
        <a href={`/providers/${element.providerId}`}>
          <RiExternalLinkLine
            size={30}
            className="text-primary cursor-pointer hover:scale-110 transition-all duration-300"
          />
        </a>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <h1 className="text-2xl font-bold">Providers</h1>
      <hr />
      <br />
      <Table withTableBorder withColumnBorders border={8} cellPadding={10}>
        <Table.Thead>
          <Table.Tr className=" text-lg  bg-gray-300">
            <Table.Th>I.D.</Table.Th>
            <Table.Th>Image</Table.Th>

            <Table.Th> Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone Number</Table.Th>
            <Table.Th>Verfication</Table.Th>
            <Table.Th>Edit Verification</Table.Th>
            <Table.Th>Profile</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <EditProvider
        closeModal={closeModal}
        isOpen={modalOpen}
        providerId={selectedProvider.providerId}
        verified={selectedProvider.verified}
      />
    </div>
  );
}

ProvidersTable.propTypes = {
  providers: PropTypes.array,
};
