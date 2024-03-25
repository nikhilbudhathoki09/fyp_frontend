import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import SubCategoryCard from "../../components/single-category/sub-category-card";
import ServicesSection from "../../components/single-category/services-section";
import getSingleCategory from "../../services/category/get-single-category";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const [serviceData, setServiceData] = useState({
    id: 0,
    title: "",
    description: "",
    allServices: [],
    categoryImage: "",
  });

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getSingleCategory(categoryId);
      setServiceData(data);
    };
    fetchServices();
  }, [categoryId]);

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
            {serviceData.title}
          </h1>
          <SubCategoryCard />
        </div>
        <div className="w-full">
          <ServicesSection services={serviceData.allServices} />
        </div>
      </div>
    </div>
  );
}
