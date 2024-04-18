import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

export default function ReviewCard({ rating, date, review }) {
  const formattedDate = new Date(date).toISOString().split("T")[0];
  return (
    <div className="bg-slate-200 rounded-lg py-8 px-5 space-y-3">
      {/* ratings  */}
      <div className="text-[#ffa800] flex  items-center gap-1 text-xl">
        {Array.from({ length: Math.floor(rating) }, (_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p>{formattedDate}</p>
      <p>{review}</p>
    </div>
  );
}

ReviewCard.propTypes = {
  rating: PropTypes.number,
  date: PropTypes.string,
  review: PropTypes.string,
};
