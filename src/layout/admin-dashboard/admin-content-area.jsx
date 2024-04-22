import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Dashboard from "../../components/provider-landing-image/dashboard";
import getAllProviders from "../../services/service-provider/get-all-providers";
import LocationTable from "./location-table";
import ProvidersTable from "./providers-table";
import UsersTable from "./users-table";
import getAllUsers from "../../services/admin/get-all-users";
import getAllLocations from "../../services/locations/get-all-locations";

export default function AdminContentArea({ selectedTab = "Dashboard" }) {
  const [providers, setProviders] = useState([]);
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchProvider = async () => {
      const data = await getAllProviders();
      setProviders(data);
    };
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    const fetchAllLocations = async () => {
      const data = await getAllLocations();
      setLocations(data);
    };
    fetchProvider();
    fetchUsers();
    fetchAllLocations();
  }, []);

  return (
    <div className="p-3">
      {selectedTab === "Dashboard" && <Dashboard />}
      {selectedTab === "Providers" && <ProvidersTable providers={providers} />}
      {selectedTab === "Users" && <UsersTable users={users} />}
      {selectedTab === "Location" && <LocationTable locations={locations} />}
      {selectedTab === "Category" && <div>Category</div>}
      {/* {selectedTab === "services" && (
        <ServicesTable allServices={data.allServices} />
      )}
      {selectedTab === "Add Service" && <AddService />}
      {selectedTab === "Appooitments" && (
        <AppointmentsTable appointments={appooitments} />
      )}
      {selectedTab === "settings" && <Settings />} */}
    </div>
  );
}

AdminContentArea.propTypes = {
  selectedTab: PropTypes.string,
  providerId: PropTypes.number,
};
