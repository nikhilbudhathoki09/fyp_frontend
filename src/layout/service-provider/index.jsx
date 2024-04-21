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

  console.log(data);

  return (
    <div>
      <div className="bg-white-bg pt-10 space-y-10">
        <div className="layout">
          <div className="w-full  flex flex-row items-center gap-5">
            <img
              src={
                data?.categories?.allProviders?.[0]?.providerImage ||
                "/nopfp.png"
              }
              alt="provider"
              className="rounded-md w-40 h-40 object-contain bg-black "
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
          <ProviderServices
            services={data?.allServices || []}
            provider={data}
          />
        )}
        {selectedTab === "overview" && (
          <Overview
            description={data.description}
            experience={data.yearOfExperience}
            servicesCount={data.minServicePrice}
          />
        )}
        {selectedTab === "review" && (
          <ReviewSection providerId={Number(providerId)} />
        )}
      </div>
    </div>
  );
}
