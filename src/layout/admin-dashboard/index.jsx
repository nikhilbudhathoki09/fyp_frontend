import { useState } from "react";
import AdminContentArea from "./admin-content-area";
import AdminSidebar from "./admin-sidebar";

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className="layout py-16 w-full ">
      <div className="flex flex-row relative min-h-[100vh] w-full gap-5 ">
        <div className="w-[25%] ">
          <AdminSidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div className="w-[75%] border rounded-md">
          <AdminContentArea selectedTab={selectedTab} providerId={1} />
        </div>
      </div>
    </div>
  );
}
