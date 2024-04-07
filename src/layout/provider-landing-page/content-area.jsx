import AddService from "../../components/provider-landing-image/add-service";
import Dashboard from "../../components/provider-landing-image/dashboard";
import ServicesTable from "../../components/provider-landing-image/services-table";
import PropTypes from "prop-types";

export default function ContentArea({ selectedTab }) {
  return (
    <div className="p-3">
      {selectedTab === "Dashboard" ? <Dashboard /> : null}
      {selectedTab === "services" ? <ServicesTable /> : null}
      {selectedTab === "Add Service" ? <AddService /> : null}
      {selectedTab === "Appooitments" ? <ServicesTable /> : null}
      {selectedTab === "settings" ? <div>Settings</div> : null}
    </div>
  );
}

ContentArea.propTypes = {
  selectedTab: PropTypes.string,
};
