import { useParams } from "react-router-dom";

import { FaLocationDot, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import ProvidersProfileNav from "../../components/service-providers/providers-profile-nav";
import { useEffect, useState } from "react";
import ProviderServices from "../../components/service-providers/provider-services";
import Overview from "../../components/service-providers/overview";
import ReviewSection from "../../components/service-providers/review-section";
import getSingleProvider from "../../services/service-provider/get-single-provider";

export default function ServiceProviderPage() {
  const { providerId } = useParams();

  const [selectedTab, setSelectedTab] = useState("services");

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getSingleProvider(providerId);
      setData(res);
    };
    fetchDetails();
  }, [providerId]);

  return (
    <div>
      <div className="bg-white-bg pt-10 space-y-10">
        <div className="layout">
          <div className="w-full  flex flex-row items-center gap-5">
            <img
              src={data.providerImage || "https://via.placeholder.com/150"}
              alt="provider"
              className="rounded-md"
            />
            <div className="space-y-2">
              <h1 className="text-primary text-xl font-semibold">
                {data.providerName || "N/A"}
              </h1>
              <div className="flex items-center gap-1">
                <FaLocationDot color="#7950f2" /> {data.address || "N/A"}
              </div>
              <div className="text-[#ffa800] flex  items-center gap-1 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </div>
            </div>
          </div>
        </div>
        <ProvidersProfileNav
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>

      <div className="layout py-10">
        {selectedTab === "services" && (
          <ProviderServices services={data.allServices || []} />
        )}
        {selectedTab === "overview" && <Overview />}
        {selectedTab === "review" && <ReviewSection />}
      </div>
    </div>
  );
}
