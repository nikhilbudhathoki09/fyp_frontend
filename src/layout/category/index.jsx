// import React from "react";

import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import SubCategoryCard from "../../components/single-category/sub-category-card";
import ServicesSection from "../../components/single-category/services-section";

export default function CategoryPage() {
  const { categoryId } = useParams();
  return (
    <div className="layout space-y-8 py-8 w-full">
      <div className="flex items-start justify-start w-full">
        <a href="/">
          <IoArrowBack className="p-1 rounded-full hover:scale-105 transition-all text-3xl text-white bg-primary " />
        </a>
      </div>
      <div className="flex flex-row w-full gap-10">
        <div className="space-y-7 gap w-[40%]">
          <h1 className="text-black text-[40px] font-semibold">{categoryId}</h1>
          <SubCategoryCard />
        </div>
        <div className="w-full">
          <ServicesSection />
        </div>
      </div>
    </div>
  );
}
