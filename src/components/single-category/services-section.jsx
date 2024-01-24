import Select from "../ui/select";
import ServiceCard from "./service-card";

export default function ServicesSection() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Services</h1>
        <div className="font-bold text-base  flex items-center gap-4 justify-center">
          <span className="mt-2">Filter by:</span>
          <Select
            options={[
              { label: "Ratings", value: null },
              { value: "Price", label: "Price" },
              { value: "Location", label: "Location" },
            ]}
            className={"p-2 w-44 text-base font-light"}
            placeholder="Select Locations"
          />
        </div>
      </div>
      {/* Services sections  */}
      <div className="flex flex-wrap justify-between gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ServiceCard key={i} />
        ))}
      </div>
    </div>
  );
}
