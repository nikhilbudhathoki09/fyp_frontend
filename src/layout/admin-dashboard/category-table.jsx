import { Table } from "@mantine/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Button from "../../components/ui/button";
import AddCategory from "./add-category";
import EditCategoryForm from "./edit-category";

export default function CategoryTable({ categories }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});

  function closeModal() {
    setModalOpen(false);
  }

  console.log(selectedCategory);

  const rows = categories?.map((element) => (
    <Table.Tr key={element.userId} className="text-base">
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>
        {element.categoryImage !== null ? (
          <img
            src={element.categoryImage}
            className="w-32 h-28 object-contain bg-black"
          />
        ) : (
          <p>No image</p>
        )}
      </Table.Td>
      <Table.Td>{element.title}</Table.Td>

      <Table.Td>{element.description}</Table.Td>
      <Table.Td>
        <Button
          text="Edit"
          onClick={() => {
            setSelectedCategory(element);

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
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          text="Add Category +"
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
            <Table.Th>Image</Table.Th>
            <Table.Th> Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Edit</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <AddCategory isOpen={modalOpen} closeModal={closeModal} />
      <EditCategoryForm
        isOpen={editModalOpen}
        closeModal={() => setEditModalOpen(false)}
        category={selectedCategory}
      />
    </div>
  );
}

CategoryTable.propTypes = {
  categories: PropTypes.array,
};
