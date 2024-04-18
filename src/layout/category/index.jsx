import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import SubCategoryCard from "../../components/single-category/sub-category-card";
import ServicesSection from "../../components/single-category/services-section";
import getSingleCategory from "../../services/category/get-single-category";
import { useEffect, useState } from "react";
import getFilteredServices from "../../services/category/get-filtered-services";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(1);

  const [serviceData, setServiceData] = useState({
    id: 0,
    title: "",
    description: "",
    allServices: [],
    allProviders: [],
    categoryImage: "",
  });

  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      if (filterButtonClicked) {
        const data = await getFilteredServices(categoryId, selectedLocationId);
        setFilteredServices(data);
      } else {
        const data = await getSingleCategory(categoryId);
        setServiceData(data);
      }
    };
    fetchServices();
  }, [categoryId, filterButtonClicked, selectedLocationId]);

  return (
    <div className="layout space-y-8 py-8 w-full">
      <div className="flex items-start justify-start w-full">
        <a href="/">
          <IoArrowBack className="p-1 rounded-full hover:scale-105 transition-all text-3xl text-white bg-primary " />
        </a>
      </div>
      <div className="flex flex-row w-full gap-10">
        <div className="space-y-7 gap w-[40%]">
          <h1 className="text-black text-[40px] font-semibold">
            {serviceData?.title || "N/A"}
          </h1>
          <SubCategoryCard
            selectedLocationId={selectedLocationId}
            setFilterButtonClicked={setFilterButtonClicked}
            setSelectedLocationId={setSelectedLocationId}
            filterButtonClicked={filterButtonClicked}
          />
        </div>
        <div className="w-full">
          <ServicesSection
            services={
              filterButtonClicked ? filteredServices : serviceData.allServices
            }
            provider={serviceData.allProviders}
          />
        </div>
      </div>
    </div>
  );
}
