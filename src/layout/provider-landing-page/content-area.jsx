import AddService from "../../components/provider-landing-image/add-service";
import Dashboard from "../../components/provider-landing-image/dashboard";
import ServicesTable from "../../components/provider-landing-image/services-table";
import PropTypes from "prop-types";
import Settings from "../../components/provider-landing-image/settings";

export default function ContentArea({ selectedTab = "Dashboard" }) {
  return (
    <div className="p-3">
      {selectedTab === "Dashboard" && <Dashboard />}
      {selectedTab === "services" && <ServicesTable />}
      {selectedTab === "Add Service" && <AddService />}
      {selectedTab === "Appooitments" && <ServicesTable />}
      {selectedTab === "settings" && <Settings />}
    </div>
  );
}

ContentArea.propTypes = {
  selectedTab: PropTypes.string,
};
