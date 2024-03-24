import { MdNotAccessible } from "react-icons/md";
import Select from "../ui/select";
import ServiceCard from "./service-card";
import PropTypes from "prop-types";

export default function ServicesSection(services) {
  console.log(services);
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Services</h1>
        <div className="font-bold text-base  flex items-center gap-4 justify-center">
          <span className="mt-2">Filter by:</span>
          <Select
            options={[
              { label: "Ratings", value: null },
              { value: "Price", label: "Price" },
              { value: "Location", label: "Location" },
            ]}
            className={"p-2 w-44 text-base font-light"}
            placeholder="Select Locations"
          />
        </div>
      </div>
      {/* Services sections  */}
      <div className="flex flex-wrap justify-between gap-6">
        {Array.isArray(services.services) && services.services.length !== 0 ? (
          services.services.map((service) => (
            <ServiceCard
              serviceImage={service.serviceImage}
              key={service.id}
              id={service.id}
              serviceDescription={service.description}
              serviceTitle={service.serviceName}
              isProviderProfile={false}
              provider={service.provider}
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

ServicesSection.propTypes = {
  services: PropTypes.array, // Correctly defining propTypes
};
