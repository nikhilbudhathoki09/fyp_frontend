export default function StatisticsSection() {
  return (
    <div
      className="h-96 py-14 space-y-28 text-white bg-primary"
      style={{
        backgroundImage: "url(/bottombg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        mixBlendMode:"hard-light"
      }}
    >
      <p className="text-center text-3xl font-semibold "> Our Statistics</p>
      <div className="flex items-center justify-center gap-20">
        <div className="flex items-center justify-center flex-col">
          <p className="text-4xl font-bold">250+</p>

          <span className="text-2xl text-secondary">Customers</span>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-4xl font-bold">200+</p>

          <span className="text-2xl text-secondary">Happy Clients</span>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-4xl font-bold">20+</p>

          <span className="text-2xl text-secondary">Projects Completed</span>
        </div>
      </div>
    </div>
  );
}
