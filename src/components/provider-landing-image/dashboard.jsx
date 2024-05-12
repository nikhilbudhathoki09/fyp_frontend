// import { BarChart, PieChart } from "@mantine/charts";
import { IoBagOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <hr />
      <br />
      <div className="flex flex-row items-stretch justify-between gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="text-lg p-3 flex flex-row gap-4 items-center w-full  bg-slate-200 shadow-xl rounded-md"
          >
            <IoBagOutline
              size={60}
              className="p-3 rounded-full text-white bg-primary/30"
            />
            <div className="flex flex-col gap-0 items-start">
              <h2 className="text-base font-bold ">Card {index + 1}</h2>
              <p className="">Bookings</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
