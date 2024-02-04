import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import ReviewCard from "./review-card";

export default function ReviewSection() {
  return (
    <div className="px-36">
      <div className="flex gap-20 py-6">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-6xl">
            3{" "}
            <span className="font-semibold text-lg text-text-color/60">/5</span>
          </p>
          <p className="text-text-color/60">3 Ratings</p>
        </div>
        <div className="flex ">
          <div className="text-[#ffa800] flex p-2 items-center gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
          <div className="text-[#ffa800] flex p-2 items-center gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
          <div className="text-[#ffa800] flex p-2 items-center gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
          <div className="text-[#ffa800] flex p-2 items-center gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
          <div className="text-[#ffa800] flex p-2 items-center gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
        </div>
      </div>
      <p className="font-semibold">Reviews</p>
      <br />
      <div className="space-y-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
