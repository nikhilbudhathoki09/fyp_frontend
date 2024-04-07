import PropTypes from "prop-types";
import { BiSolidDashboard } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import { cn } from "../../utils/utils";

const data = [
  {
    key: "Dashboard",
    value: "Dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    key: "services",
    value: "Services",
    icon: <GiAutoRepair />,
  },
  {
    key: "Appooitments",
    value: "Appooitments",
    icon: <RiReservedFill />,
  },
  {
    key: "Add Service",
    value: "Add Service",
    icon: <GrFormAdd />,
  },
  {
    key: "settings",
    value: "Settings",
    icon: <IoSettingsOutline />,
  },
];

export default function Sidebar({ selectedTab, setSelectedTab }) {
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

Sidebar.propTypes = {
  selectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func,
};
