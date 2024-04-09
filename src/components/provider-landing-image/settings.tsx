import React from "react";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Button from "../ui/button";

export default function Settings() {
  const [editButtonClicked, setEditButtonClicked] =
    React.useState<boolean>(false);
  return (
    <div className="space-y-3">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">
          Edit your profile details here.
        </h1>

        <div
          className="cursor-pointer"
          onClick={() => setEditButtonClicked((prev) => !prev)}
        >
          {editButtonClicked ? (
            <ImCross className="hover:scale-105 text-red-500 transition-all duration-300 ease-in-out " />
          ) : (
            <FaEdit
              className="hover:scale-105 hover:text-blue-500 transition-all duration-300 ease-in-out "
              size={25}
            />
          )}
        </div>
      </div>
      <hr />

      {!editButtonClicked ? (
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex  rounded-md border p-4">
              asdfghjkl
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <input
              key={index}
              className="flex  rounded-md border p-4"
              placeholder="Edit"
            />
          ))}
          <Button
            text="Save Changes"
            className="bg-primary items-center flex justify-center  px-10 w-[50%] py-4 text-white rounded-md"
          />
        </div>
      )}
    </div>
  );
}
