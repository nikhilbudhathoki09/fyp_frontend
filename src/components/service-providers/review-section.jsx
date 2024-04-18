import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import ReviewCard from "./review-card";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getRatings from "../../services/service-provider/get-ratings";

export default function ReviewSection({ providerId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getRatings(providerId);
      setReviews(res);
    };
    fetchReviews();
  }, [providerId]);

  console.log(reviews);
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
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              date={review.reviewDate}
              rating={review.rating}
              review={review.comment}
            />
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
}

ReviewSection.propTypes = {
  providerId: PropTypes.number,
};
