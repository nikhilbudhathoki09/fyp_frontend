import PropTypes from "prop-types";
import { cn } from "../../utils/utils";

export default function ProvidersProfileNav({ selectedTab, setSelectedTab }) {
  return (
    <div className="flex justify-center gap-10">
      <p
        onClick={() => setSelectedTab("services")}
        className={cn(
          "flex py-2 px-10 text-xl  font-semibold border-b-4 hover:border-button border-transparent transition-all duration-300 cursor-pointer",
          selectedTab === "services" && " border-button"
        )}
      >
        Services
      </p>
      <p
        onClick={() => setSelectedTab("overview")}
        className={cn(
          "flex py-2 px-10 text-xl hover:border-b-4 hover:border-button transition-all duration-300 font-semibold cursor-pointer ",
          selectedTab === "overview" && "border-b-4 border-button"
        )}
      >
        Overview
      </p>
      <p
        onClick={() => setSelectedTab("review")}
        className={cn(
          "flex py-2 px-10 text-xl font-semibold hover:border-b-4 hover:border-button transition-all duration-300 cursor-pointer",
          selectedTab === "review" && "border-b-4 border-button"
        )}
      >
        Reviews
      </p>
    </div>
  );
}

ProvidersProfileNav.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};
