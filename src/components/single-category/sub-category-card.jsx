import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { cn } from "../../utils/utils";
import Button from "../ui/button";

import { FaCheck } from "react-icons/fa";
import getAllLocations from "../../services/locations/get-all-locations";

const SubCategoryLists = ["Tap Repair", "Toilet Repair", "Bathroom Cleaning"];

export default function SubCategoryCard({
  setFilterButtonClicked,

  setSelectedLocationId,
  filterButtonClicked,
}) {
  // console.log(selectedLocationId);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getAllLocations();
      setLocations(data);
    };

    fetchLocations();
  }, []);

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
      <select
        id="number"
        className="flex w-full rounded-md border p-4"
        onChange={(e) => setSelectedLocationId(parseInt(e.target.value))}
      >
        {locations?.map((data, i) => (
          <option key={i} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
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
      {!filterButtonClicked ? (
        <Button
          text="Apply Filter"
          onClick={() => setFilterButtonClicked(true)}
          className="bg-button flex w-full items-center justify-center rounded-full px-8 py-3 text-white"
        />
      ) : (
        <Button
          text="Remove Filter"
          onClick={() => setFilterButtonClicked(false)}
          className="bg-red-600 flex w-full items-center justify-center rounded-full px-8 py-3 text-white"
        />
      )}
    </div>
  );
}

SubCategoryCard.propTypes = {
  setFilterButtonClicked: PropTypes.func,
  filterButtonClicked: PropTypes.bool,
  setSelectedLocationId: PropTypes.func,
  selectedLocationId: PropTypes.number,
};
