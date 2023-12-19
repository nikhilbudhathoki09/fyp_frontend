import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Button({
  className,
  text,
  loading,
  disabled,
  type,
  onClick,
}) {
  return (
    <div>
      <button
        type={type}
        className={className + " flex items-center space-x-2 text-sm"}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {text && <span className={loading ? "animate-pulse" : ""}>{text}</span>}
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  onClick: PropTypes.func,
};
