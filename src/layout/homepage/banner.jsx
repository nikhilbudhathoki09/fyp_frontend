import { CiSearch } from "react-icons/ci";
import Button from "../../components/ui/button";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className=" bg-primary text-white  py-6 ">
      <div className="layout flex w-full flex-row gap-2 items-center ">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -80,
            },
            show: {
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 1.5,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
              },
            },
          }}
          viewport={{ once: true, amount: 0.3 }} // Set once to true
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="w-[50%]  space-y-3"
        >
          <h1 className="text-4xl font-bold max-w-sm">
            Join 250+ Experts at Homies{" "}
          </h1>
          <p className="max-w-sm text-[#988ccd]">
            Hommies is where you can find the best services for your home and
            office. We have a wide range of services to offer. You can find the
            best services for your home and office.
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
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 80,
            },
            show: {
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 1.5,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
              },
            },
          }}
          viewport={{ once: true, amount: 0.3 }} // Set once to true
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="w-[50%] flex items-center justify-center"
        >
          <img src="/Frame.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
