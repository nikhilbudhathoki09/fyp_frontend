import AddService from "../../components/provider-landing-image/add-service";
import Dashboard from "../../components/provider-landing-image/dashboard";
import ServicesTable from "../../components/provider-landing-image/services-table";
import PropTypes from "prop-types";
import Settings from "../../components/provider-landing-image/settings";
import { useEffect, useState } from "react";
import getSingleProvider from "../../services/service-provider/get-single-provider";

export default function ContentArea({ selectedTab = "Dashboard", providerId }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getSingleProvider(providerId);
      setData(res);
    };
    fetchDetails();
  }, [providerId]);

  console.log(data);
  return (
    <div className="p-3">
      {selectedTab === "Dashboard" && <Dashboard />}
      {selectedTab === "services" && (
        <ServicesTable allServices={data.allServices} />
      )}
      {selectedTab === "Add Service" && <AddService />}
      {selectedTab === "Appooitments" && (
        <ServicesTable allServices={data.allServices} />
      )}
      {selectedTab === "settings" && <Settings />}
    </div>
  );
}

ContentArea.propTypes = {
  selectedTab: PropTypes.string,
  providerId: PropTypes.number,
};
