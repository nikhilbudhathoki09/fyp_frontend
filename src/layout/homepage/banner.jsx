import { CiSearch } from "react-icons/ci";
import Button from "../../components/ui/button";

export default function Banner() {
  return (
    <div className=" bg-primary text-white  py-6 ">
      <div className="layout flex w-full flex-row gap-2 items-center ">
        <div className="w-[50%]  space-y-3">
          <h1 className="text-4xl font-bold max-w-sm">
            Join 250+ Experts at Homies{" "}
          </h1>
          <p className="max-w-sm text-[#988ccd]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s,
          </p>
          <div className="relative w-fit ">
            <input
              placeholder="Search for services"
              className="border-none focus:border-none focus:outline-1 focus:outline-tertiary py-4 flex w-[24rem] rounded-full pl-14 pr-2 text-xs text-[#988ccd]"
            />
            <CiSearch
              size={28}
              className="absolute top-2 text-primary left-3"
            />
            <Button
              text="Search Now"
              className="bg-button px-6  py-3 rounded-3xl absolute right-[2px] top-[2px]"
            />
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
      </div>
    </div>
  );
}
