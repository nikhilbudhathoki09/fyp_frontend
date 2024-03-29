import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaStarHalfStroke } from "react-icons/fa6";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

import Button from "../ui/button";
import BookForm from "./book-form";

export default function ServiceCard({
  serviceImage,
  serviceTitle,
  serviceDescription,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="border p-4 rounded-md bg-white shadow-md space-y-3">
      <img
        src={
          serviceImage ||
          "https://upload.wikimedia.org/wikipedia/commons/7/73/Wasserhahn.jpg"
        }
        className="w-[370px] h-52 object-cover rounded-md"
      />
      <h1 className="text-xl font-bold text-start">{serviceTitle || "N/A"}</h1>
      <div className="flex items-center gap-4">
        <img
          src="/nopfp.png"
          className="w-16  h-16 border border-green-500 rounded-full object-cover"
        />
        <div className="flex flex-col ">
          <h1 className="text-base font-semibold">John Doe</h1>
          <p className="text-sm flex items-center gap-1 font-light">
            <MdOutlineLocationOn color="#7950f2" size={20} />
            Pokhara-32, Satmuhane
          </p>
        </div>
      </div>
      <div className="text-[#ffa800] flex p-2 items-center gap-1 text-xl">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>
      <p className=" text-text-color-secondary w-[370px] text-sm line-clamp-5">
        {serviceDescription || "N/A"}
      </p>
      <div className="flex justify-between">
        <Button
          asLink
          link={"/providers/1"}
          text="View Profile"
          className="px-8 py-3 bg-button rounded-full text-white"
          icon={<FiExternalLink />}
        />
        <Button
          text="Book Now"
          className="px-8 py-3 bg-button rounded-full text-white"
          icon={<FaArrowRight />}
          onClick={openModal}
        />
      </div>

      <BookForm isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

ServiceCard.propTypes = {
  serviceImage: PropTypes.string,
  serviceTitle: PropTypes.string,
  serviceDescription: PropTypes.string,
};
