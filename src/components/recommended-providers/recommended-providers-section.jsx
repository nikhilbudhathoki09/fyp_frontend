import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
import getSuggestedProviders from "../../services/service-provider/get-suggested-providers";

export default function RecommendedProviderSection({ providerId }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getSuggestedProviders(providerId);
      setProviders(res);
    };
    fetchDetails();
  }, [providerId]);

  return (
    <div className="layout  py-6 relative space-y-10 w-full">
      <div className="flex justify-center items-center w-full">
        <h3 className="text-3xl font-semibold">Recommened Providers for you</h3>
        <img src="/storke.png" className="absolute top-12" />
      </div>
      <div className="grid w-full items-center justify-between gap-16 grid-cols-3">
        {providers && Array.isArray(providers) && providers.length > 0 ? (
          providers.map((provider) => (
            <>
              <div className="group rounded-lg relative shadow-lg flex flex-col gap-3 items-center bg-white-bg p-4">
                <div className="flex w-full justify-center">
                  <img
                    src={
                      provider.providerImage ||
                      "https://people.com/thmb/j5ho56D-ErGY4uumLXPZJm_lCxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(677x461:679x463)/John-Cena-Contemplating-Ending-Wresting-Career-tout-2-011624-faefd3ab52f740859751a0168503b53c.jpg"
                    }
                    className="w-32 h-32 rounded-full object-contain bg-black"
                  />
                </div>
                <h1 className="text-xl font-bold">
                  {provider.providerName || "N/A"}
                </h1>
                <div className="flex whitespace-nowrap flex-col gap-2 items-center">
                  <div className="flex flex-row gap-2 items-center">
                    <FaPhoneAlt />
                    <p>{provider.phoneNumber || 9876665555}</p>
                  </div>
                </div>
                <div className="text-[#ffa800] flex  items-center gap-1 text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <p className="text-base text-justify line-clamp-4">
                  {provider.description || "N/A"}
                </p>
                {/* <Button
                  text="Book Now"
                  className="px-8 py-3 w-full bg-button rounded-full text-white"
                  icon={<FaArrowRight />}
                /> */}

                <a
                  href="/providers/1"
                  className="text-primary absolute right-4 hover:scale-110 transition-all hover:cursor-pointer"
                >
                  <TbExternalLink size={30} />
                </a>
              </div>
            </>
          ))
        ) : (
          <div className="text-center">No recommended providers</div>
        )}
      </div>
    </div>
  );
}

RecommendedProviderSection.propTypes = {
  providerId: PropTypes.number,
};
