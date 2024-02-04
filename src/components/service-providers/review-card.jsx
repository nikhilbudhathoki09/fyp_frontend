import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

export default function ReviewCard() {
  return (
    <div className="bg-slate-200 rounded-lg py-8 px-5 space-y-3">
      {/* ratings  */}
      <div className="text-[#ffa800] flex  items-center gap-1 text-xl">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>
      <p>Ram Bahadhur Thapa, 03/12/2022</p>
      <p>
        Excellent experience with Binod Bahadur Thapa from the set up of an
        appointment with Andrea, she was very prompt to respond and set up an
        appt time frame immediately .
      </p>
    </div>
  );
}
