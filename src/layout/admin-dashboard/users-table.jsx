import { Table } from "@mantine/core";
import PropTypes from "prop-types";

export default function UserTable({ users }) {
  const rows = users?.map((element) => (
    <Table.Tr key={element.userId} className="text-base">
      <Table.Td>{element.userId}</Table.Td>
      <Table.Td>
        {element.userImage !== null ? (
          <img
            src={element.userImage}
            className="w-32 h-28 object-contain bg-black"
          />
        ) : (
          <p>No image</p>
        )}
      </Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.phoneNumber}</Table.Td>
      <Table.Td>{element.address}</Table.Td>
      <Table.Td>{element.gender}</Table.Td>
    </Table.Tr>
  ));
  console.log(users);
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
            <Table.Th>Address</Table.Th>
            <Table.Th>Gender</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

UserTable.propTypes = {
  users: PropTypes.array,
};
