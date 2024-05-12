import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getAllProviders from "../../services/service-provider/get-all-providers";
import LocationTable from "./location-table";
import ProvidersTable from "./providers-table";
import UsersTable from "./users-table";
import getAllUsers from "../../services/admin/get-all-users";
import getAllLocations from "../../services/locations/get-all-locations";
import CategoryTable from "./category-table";
import getAllCategory from "../../services/category/get-all-category";

export default function AdminContentArea({ selectedTab = "Dashboard" }) {
  const [providers, setProviders] = useState([]);
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
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
    const fetchAllCategories = async () => {
      const data = await getAllCategory();
      setCategories(data);
    };
    fetchProvider();
    fetchAllCategories();
    fetchUsers();
    fetchAllLocations();
  }, []);

  return (
    <div className="p-3">
      {/* {selectedTab === "Dashboard" && <Dashboard />} */}
      {selectedTab === "Providers" && <ProvidersTable providers={providers} />}
      {selectedTab === "Users" && <UsersTable users={users} />}
      {selectedTab === "Location" && <LocationTable locations={locations} />}
      {selectedTab === "Category" && <CategoryTable categories={categories} />}
    </div>
  );
}

AdminContentArea.propTypes = {
  selectedTab: PropTypes.string,
  providerId: PropTypes.number,
};
