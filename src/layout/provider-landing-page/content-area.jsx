import AddService from "../../components/provider-landing-image/add-service";
import Dashboard from "../../components/provider-landing-image/dashboard";
import ServicesTable from "../../components/provider-landing-image/services-table";
import PropTypes from "prop-types";
import Settings from "../../components/provider-landing-image/settings";
import { useEffect, useState } from "react";
import getSingleProvider from "../../services/service-provider/get-single-provider";
import getAppointments from "../../services/service-provider/get-appointments";
import AppointmentsTable from "../../components/provider-landing-image/appointments-table";

export default function ContentArea({ selectedTab = "Dashboard", providerId }) {
  const [data, setData] = useState({});
  const [appooitments, setAppooitments] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getSingleProvider(providerId);
      setData(res);
    };
    const fetchAppooitments = async () => {
      const res = await getAppointments(providerId);
      setAppooitments(res);
    };
    fetchAppooitments();
    fetchDetails();
  }, [providerId]);

  return (
    <div className="p-3">
      {selectedTab === "Dashboard" && <Dashboard />}
      {selectedTab === "services" && (
        <ServicesTable allServices={data.allServices} />
      )}
      {selectedTab === "Add Service" && <AddService />}
      {selectedTab === "Appooitments" && (
        <AppointmentsTable appointments={appooitments} />
      )}
      {selectedTab === "settings" && <Settings />}
    </div>
  );
}

ContentArea.propTypes = {
  selectedTab: PropTypes.string,
  providerId: PropTypes.number,
};
