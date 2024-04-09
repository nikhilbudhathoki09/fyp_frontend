// import { useParams } from "react-router-dom";

import { useState } from "react";
import ContentArea from "./content-area";
import Sidebar from "./sidebar";
import { useParams } from "react-router-dom";

export default function ProviderLandingPage() {
  const { providerId } = useParams();
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className="layout py-16 w-full ">
      <div className="flex flex-row relative min-h-[100vh] w-full gap-5 ">
        <div className="w-[25%] ">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <div className="w-[75%] border rounded-md">
          <ContentArea selectedTab={selectedTab} providerId={providerId} />
        </div>
      </div>
    </div>
  );
}
