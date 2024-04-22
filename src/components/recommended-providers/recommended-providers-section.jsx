import { FaArrowRight, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
import { CgCalendarNext } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../ui/button";

export default function RecommendedProviderSection() {
  return (
    <div className="layout  py-6 relative space-y-10 w-full">
      <div className="flex justify-center items-center w-full">
        <h3 className="text-3xl font-semibold">Recommened Providers for you</h3>
        <img src="/storke.png" className="absolute top-12" />
      </div>
      <div className="grid w-full items-center justify-between gap-16 grid-cols-3">
        {/* card */}
        <div className="group rounded-lg relative shadow-lg flex flex-col gap-3 items-center bg-white-bg p-4">
          <div className="flex w-full justify-center">
            <img
              src="https://people.com/thmb/j5ho56D-ErGY4uumLXPZJm_lCxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(677x461:679x463)/John-Cena-Contemplating-Ending-Wresting-Career-tout-2-011624-faefd3ab52f740859751a0168503b53c.jpg"
              className="w-32 h-32 rounded-full object-contain bg-black"
            />
          </div>
          <h1 className="text-xl font-bold">Janak aka Plumber</h1>
          <div className="flex whitespace-nowrap flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt />
              <p>{982888282}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CgCalendarNext />
              <p>{9}+ years of experience</p>
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
            Lorem ipsum dolor sit consectetur adipisicing elit. Dolorem suscipit
            quasi aspernatur possimus nesciunt inventore vero iusto cupiditate
            labore ut consectetur, tempora quam temporibus architecto quaerat
            qui ipsum iste voluptatum. Delectus autem ex
          </p>
          <Button
            text="Book Now"
            className="px-8 py-3 w-full bg-button rounded-full text-white"
            icon={<FaArrowRight />}
            //   onClick={openModal}
          />
          {/* <hr className="w-full h-[2px]  bg-black border-none" /> */}
          {/* <div className="flex w-full items-center flex-row justify-between">
              <p>20+ Services</p>
              <div className="w-[1px] h-6 bg-black" />
              <p>20+ Reviews</p>
            </div> */}
          <a
            href="/providers/1"
            className="text-primary absolute right-4 hover:scale-110 transition-all hover:cursor-pointer"
          >
            <TbExternalLink size={30} />
          </a>
        </div>
        {/* card */}

        <div className="group rounded-lg relative shadow-lg flex flex-col gap-3 items-center bg-white-bg p-4">
          <div className="flex w-full justify-center">
            <img
              src="https://people.com/thmb/j5ho56D-ErGY4uumLXPZJm_lCxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(677x461:679x463)/John-Cena-Contemplating-Ending-Wresting-Career-tout-2-011624-faefd3ab52f740859751a0168503b53c.jpg"
              className="w-32 h-32 rounded-full object-contain bg-black"
            />
          </div>
          <h1 className="text-xl font-bold"></h1>
          <div className="flex whitespace-nowrap flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt />
              <p>{982888282}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CgCalendarNext />
              <p>{9}+ years of experience</p>
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
            Lorem ipsum dolor sit consectetur adipisicing elit. Dolorem suscipit
            quasi aspernatur possimus nesciunt inventore vero iusto cupiditate
            labore ut consectetur, tempora quam temporibus architecto quaerat
            qui ipsum iste voluptatum. Delectus autem ex
          </p>
          <Button
            text="Book Now"
            className="px-8 py-3 w-full bg-button rounded-full text-white"
            icon={<FaArrowRight />}
            //   onClick={openModal}
          />
          {/* <hr className="w-full h-[2px]  bg-black border-none" /> */}
          {/* <div className="flex w-full items-center flex-row justify-between">
              <p>20+ Services</p>
              <div className="w-[1px] h-6 bg-black" />
              <p>20+ Reviews</p>
            </div> */}
          <a
            href="/providers/1"
            className="text-primary absolute right-4 hover:scale-110 transition-all hover:cursor-pointer"
          >
            <TbExternalLink size={30} />
          </a>
        </div>
        {/* card */}

        <div className="group rounded-lg relative shadow-lg flex flex-col gap-3 items-center bg-white-bg p-4">
          <div className="flex w-full justify-center">
            <img
              src="https://people.com/thmb/j5ho56D-ErGY4uumLXPZJm_lCxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(677x461:679x463)/John-Cena-Contemplating-Ending-Wresting-Career-tout-2-011624-faefd3ab52f740859751a0168503b53c.jpg"
              className="w-32 h-32 rounded-full object-contain bg-black"
            />
          </div>
          <h1 className="text-xl font-bold">Janak aka Plumber</h1>
          <div className="flex whitespace-nowrap flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt />
              <p>{982888282}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CgCalendarNext />
              <p>{9}+ years of experience</p>
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
            Lorem ipsum dolor sit consectetur adipisicing elit. Dolorem suscipit
            quasi aspernatur possimus nesciunt inventore vero iusto cupiditate
            labore ut consectetur, tempora quam temporibus architecto quaerat
            qui ipsum iste voluptatum. Delectus autem ex
          </p>
          <Button
            text="Book Now"
            className="px-8 py-3 w-full bg-button rounded-full text-white"
            icon={<FaArrowRight />}
            //   onClick={openModal}
          />
          {/* <hr className="w-full h-[2px]  bg-black border-none" /> */}
          {/* <div className="flex w-full items-center flex-row justify-between">
              <p>20+ Services</p>
              <div className="w-[1px] h-6 bg-black" />
              <p>20+ Reviews</p>
            </div> */}
          <a
            href="/providers/1"
            className="text-primary absolute right-4 hover:scale-110 transition-all hover:cursor-pointer"
          >
            <TbExternalLink size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
