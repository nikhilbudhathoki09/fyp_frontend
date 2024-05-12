import { useEffect, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineMail, MdVerified } from "react-icons/md";
import { useParams } from "react-router-dom";
import getSingleProvider from "../../services/service-provider/get-single-provider";

export default function AdminProviderView() {
  const { providerId } = useParams();

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
      <div className="bg-white-bg py-10 space-y-10">
        <div className="layout">
          <div className="w-full  flex flex-row items-center gap-5">
            <img
              src={data?.providerImage || "/nopfp.png"}
              alt="provider"
              className="rounded-md w-40 h-40 object-contain bg-black "
            />
            <div className="space-y-2">
              <h1 className="text-primary text-xl font-semibold">
                {data?.providerName || "N/A"}
              </h1>
              <div className="flex items-center gap-1">
                <FaLocationDot color="#7950f2" /> {data?.address || "N/A"}
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineMail color="#7950f2" /> {data?.email || "N/A"}
              </div>
            </div>
            <div className="pt-10 space-y-2">
              <div className="flex items-center gap-1">
                <FaPhone color="#7950f2" /> {data?.phoneNumber || "N/A"}
              </div>

              {data?.verified && (
                <div className="flex items-center gap-1">
                  <MdVerified color="blue" /> Verified
                </div>
              )}
            </div>
            <div className="pt-10 space-y-2">
              {Array.from(
                { length: Math.round(data?.averageRating) },
                (_, index) => (
                  <span key={index}>⭐️</span>
                )
              )}

              <div className="flex items-center gap-1">
                {data?.yearOfExperience} years of experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout py-20 space-y-6">
        <h1>{data?.description || "N/A"}</h1>
        <hr />
        <h1 className="text-3xl">Documents</h1>
        <h1 className="text-xl"> • Registration Document</h1>
        <img src={data?.registrationDocument || "/bg.png"} alt="doc" />
        <h1 className="text-xl"> • Experience Document</h1>
        <img src={data?.experienceDocument || "/bg.png"} alt="doc" />
      </div>
    </div>
  );
}
