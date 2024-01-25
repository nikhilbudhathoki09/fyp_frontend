import { useState } from "react";
import Select from "../ui/select";
import Button from "../ui/button";
import { cn } from "../../utils/utils";
import { FaCheck } from "react-icons/fa";

const SubCategoryLists = ["Tap Repair", "Toilet Repair", "Bathroom Cleaning"];

export default function SubCategoryCard() {
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const onSelectClick = (subCategory) => {
    if (selectedSubCategories.includes(subCategory)) {
      setSelectedSubCategories(
        selectedSubCategories.filter((sc) => sc !== subCategory)
      );
    } else {
      setSelectedSubCategories([...selectedSubCategories, subCategory]);
    }
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <Select
        options={[
          { label: "Select a location", value: null },
          { value: "Pokhara", label: "Pokhara" },
          { value: "Female", label: "Female" },
        ]}
        className={"p-2"}
        placeholder="Select Locations"
      />
      <h4 className="text-base font-extrabold">Sub Category</h4>
      {SubCategoryLists.map((subCategory, i) => (
        <div className="flex items-center justify-start gap-5" key={i}>
          <div
            className={cn(
              "w-8 h-8 text-button cursor-pointer justify-center items-center flex rounded-md bg-[#f0f1f3]"
            )}
            onClick={() => onSelectClick(subCategory)}
          >
            {selectedSubCategories.includes(subCategory) && <FaCheck />}
          </div>
          <p className="text-base font-medium">{subCategory}</p>
        </div>
      ))}
      <Button
        text="Apply Now"
        className="bg-button flex w-full items-center justify-center rounded-full px-8 py-3 text-white"
      />
    </div>
  );
}
