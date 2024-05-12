import { useEffect, useState } from "react";
import getAllServices from "../../services/get-all-services";
import ServiceCard from "../../components/single-category/service-card";
import { MdNotAccessible } from "react-icons/md";
// import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import searchService from "../../services/search-service";

export default function AllServicesSection() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      if (searchValue) {
        const data = await searchService(searchValue);
        setServices(data);
      } else {
        const data = await getAllServices();
        setServices(data);
      }
    };
    fetchServices();
  }, [searchValue]);

  return (
    <div className="layout py-16 space-y-16 w-full">
      <div className="flex relative items-center justify-center">
        <h3 className="text-3xl font-semibold"> All Services</h3>
        <img src="/storke.png" className="absolute top-6 left-[43%]" />
      </div>
      <div className="flex flex-wrap justify-between">
        {Array.isArray(services) && services.length !== 0 ? (
          services.map((service) => (
            <ServiceCard
              serviceImage={
                service.category.allServices[0].serviceImage || "/bg.png"
              }
              rate={service.perHourRate}
              key={service.description}
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
              No services at the moment matching &quot;{searchValue}&quot;
            </p>
            <MdNotAccessible color="red" size={40} />
          </div>
        )}
      </div>
    </div>
  );
}
