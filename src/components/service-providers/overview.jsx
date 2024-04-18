import PropType from "prop-types";

export default function Overview({
  description,
  ratingsCount,
  servicesCount,
  experience,
}) {
  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="text-justify pr-20 border-r-2 w-[80%] border-gray-300">
        <p>{description || "N/A"}</p>
      </div>
      <div className="space-y-3 whitespace-nowrap pr-20">
        <p>
          <strong>Overview</strong>
        </p>
        <p>{experience || 1}+ years experience</p>
        <p>{servicesCount || 1} + services</p>
        <p>Starting from ${ratingsCount || 1} </p>
      </div>
    </div>
  );
}

Overview.propTypes = {
  description: PropType.string.isRequired,
  servicesCount: PropType.number,
  ratingsCount: PropType.number,
  experience: PropType.number,
};
