import PropTypes from "prop-types";
import { BiSolidCategoryAlt, BiSolidDashboard } from "react-icons/bi";
import { FaLocationArrow, FaUserAlt, FaUserAstronaut } from "react-icons/fa";
import { cn } from "../../utils/utils";

const data = [
  {
    key: "Dashboard",
    value: "Dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    key: "Providers",
    value: "Providers",
    icon: <FaUserAstronaut />,
  },
  {
    key: "Users",
    value: "Users",
    icon: <FaUserAlt />,
  },
  {
    key: "Location",
    value: "Location",
    icon: <FaLocationArrow />,
  },
  {
    key: "Category",
    value: "Category",
    icon: <BiSolidCategoryAlt />,
  },
];

export default function AdminSidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="w-full space-y-3 p-3 border-2 border-primary  rounded-md ">
      {data.map((data, i) => (
        <div
          key={i}
          onClick={() => setSelectedTab(data.key)}
          className={cn(
            "w-full flex flex-row gap-2 text-lg hover:bg-primary/80 hover:text-white border items-center p-3 cursor-pointer transition-all rounded-md",
            selectedTab === data.key && "bg-primary/80 text-white"
          )}
        >
          <span>{data.icon}</span>
          {data.value}
        </div>
      ))}
    </div>
  );
}

AdminSidebar.propTypes = {
  selectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func,
};
