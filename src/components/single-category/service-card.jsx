import { FaArrowRight, FaPhoneAlt, FaStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaStarHalfStroke } from "react-icons/fa6";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { CgCalendarNext } from "react-icons/cg";

import Button from "../ui/button";
import BookForm from "./book-form";
import { cn } from "../../utils/utils";
import { useSelector } from "react-redux";

export default function ServiceCard({
  serviceImage,
  serviceTitle,
  isProviderProfile = false,
  serviceDescription,
  provider,
  id,
  rate,
}) {
  const user = useSelector((state) => state.user);
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
      <div className="flex flex-row items-center w-full  justify-between">
        {!isProviderProfile && (
          <div className="flex  items-center gap-4">
            <img
              src={provider?.providerImage || "/nopfp.png"}
              className="w-16  h-16 border border-green-500 rounded-full object-cover"
            />
            {provider && (
              <div className="flex flex-col">
                <h1 className="text-base font-semibold">
                  {provider?.providerName || "N/A"}
                </h1>
                <p className="text-sm flex items-center gap-1 font-light">
                  <MdOutlineLocationOn color="#7950f2" size={20} />
                  {provider?.address || "N/A"}
                </p>
              </div>
            )}
          </div>
        )}
        <div className="border border-green-500 rounded-md p-2">Rs{rate}/hr</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <FaPhoneAlt />
        <p>{provider.phoneNumber || "N/A"}</p>| <CgCalendarNext />
        <p>{provider.yearOfExperience || "N/A"}+ years of experience</p>
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
      <div
        className={cn(
          "flex w-full",
          isProviderProfile ? "justify-center items-center" : "justify-between"
        )}
      >
        {!isProviderProfile && (
          <Button
            asLink
            link={`/providers/${provider.providerId}`}
            text="View Profile"
            className="px-8 w-full py-3 bg-button rounded-full text-white"
            icon={<FiExternalLink />}
          />
        )}

        {user !== null && user.user !== null && user.user.userId !== null && (
          <Button
            text="Book Now"
            className="px-8 py-3  bg-button rounded-full text-white"
            icon={<FaArrowRight />}
            onClick={openModal}
          />
        )}
      </div>

      {user !== null &&
        user.user !== null &&
        user.user.userId === provider.providerId && (
          <BookForm
            isOpen={isOpen}
            closeModal={closeModal}
            providerId={provider.providerId}
            userId={user.user.userId}
            serviceId={id}
            close={closeModal}
          />
        )}
    </div>
  );
}

ServiceCard.propTypes = {
  serviceImage: PropTypes.string,
  serviceTitle: PropTypes.string,
  serviceDescription: PropTypes.string,
  isProviderProfile: PropTypes.bool,
  id: PropTypes.number,
  provider: PropTypes.object,
  rate: PropTypes.number,
};
