// import { BarChart, PieChart } from "@mantine/charts";
import { BarChart, LineChart } from "@mui/x-charts";
import { IoBagOutline } from "react-icons/io5";

export default function Dashboard() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

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
      <div className="flex gap-5 shadow-lg">
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={450}
          height={300}
        />
        <LineChart
          width={450}
          height={300}
          series={[
            { data: pData, label: "pv" },
            { data: uData, label: "uv" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </div>
  );
}
