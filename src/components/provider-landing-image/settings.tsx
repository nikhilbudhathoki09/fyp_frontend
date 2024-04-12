import React from "react";
import Button from "../ui/button";

export default function Settings() {
  return (
    <div className="space-y-3">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">
          Edit your profile details here.
        </h1>
      </div>
      <hr />

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            value={"Provider Name"}
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            value={"Provider Name"}
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="description">Phone Number</label>
          <input
            id="description"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            value={"Provider Name"}
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Address</label>
          <input
            id="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            value={"Provider Name"}
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Years of Experience</label>
          <input
            id="number"
            type="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
            value={"Provider Name"}
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="number">Min Service Price</label>
          <input
            id="number"
            type="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Max Service Price</label>
          <input
            id="number"
            type="number"
            className="flex w-full rounded-md border p-4"
            placeholder="Edit Name"
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Category</label>
          <select
            id="number"
            className="flex w-full rounded-md border p-4"
            value={"Provider Name"}
          >
            <option value="1">Service 1</option>
            <option value="2">Service 2</option>
            <option value="3">Service 3</option>
          </select>
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="number">Location</label>
          <select
            id="number"
            className="flex w-full rounded-md border p-4"
            value={"Provider Name"}
          >
            <option value="1">Service 1</option>
            <option value="2">Service 2</option>
            <option value="3">Service 3</option>
          </select>
        </div>
      </div>
      <Button
        text="Save Changes"
        className="bg-primary items-center flex justify-center  px-10 w-[50%] py-4 text-white rounded-md"
      />
    </div>
  );
}
