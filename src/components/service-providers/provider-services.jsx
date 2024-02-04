import ServiceCard from "../single-category/service-card";

export default function ProviderServices() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ServiceCard key={i} />
        ))}
      </div>
    </div>
  );
}
