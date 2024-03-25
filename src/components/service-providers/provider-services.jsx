import { MdNotAccessible } from "react-icons/md";
import ServiceCard from "../single-category/service-card";
import PropTypes from "prop-types";

export default function ProviderServices(services) {
  return (
    <div>
      <div className="grid grid-cols-3 justify-center items-center gap-3">
        {Array.isArray(services.services) && services.services.length !== 0 ? (
          services.services.map((service) => (
            <ServiceCard
              serviceImage={service.serviceImage}
              key={service.id}
              serviceDescription={service.description}
              serviceTitle={service.serviceName}
            />
          ))
        ) : (
          <div className="border border-red-500 flex flex-col gap-3 items-center rounded-md justify-center w-full h-[45vh]">
            <p className="text-xl font-semibold text-red-400">
              No services in this category
            </p>
            <MdNotAccessible color="red" size={40} />
          </div>
        )}
      </div>
    </div>
  );
}

ProviderServices.propTypes = {
  services: PropTypes.array, // Correctly defining propTypes
};
