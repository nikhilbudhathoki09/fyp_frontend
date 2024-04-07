import { BarChart, PieChart } from "@mantine/charts";
import "@mantine/charts/styles.css";
import { IoBagOutline } from "react-icons/io5";

export const data = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
];

export const pie_data = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 300, color: "teal.6" },
  { name: "Other", value: 200, color: "gray.6" },
];

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
      <div className="flex  pt-10 flex-row items-center gap-10">
        <BarChart
          h={300}
          className=" shadow-xl p-3"
          data={data}
          w={500}
          dataKey="month"
          series={[
            { name: "Smartphones", color: "violet.6" },
            { name: "Laptops", color: "blue.6" },
            { name: "Tablets", color: "teal.6" },
          ]}
          tickLine="y"
        />
        <div className="p-3 shadow-xl ">
          <PieChart
            data={pie_data}
            size={250}
            withLabelsLine
            labelsPosition="inside"
            labelsType="value"
          />
        </div>
      </div>
    </div>
  );
}
