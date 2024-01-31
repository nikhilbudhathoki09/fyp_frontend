import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "../../utils/utils";

export default function Button({
  className,
  text,
  loading,
  icon,
  disabled,
  type,
  onClick,
}) {
  return (
    <div>
      <button
        type={type}
        className={cn(
          "flex items-center space-x-2 text-sm relative",
          className
        )}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {text && (
          <span className="flex items-center gap-3">
            {text}
            {icon}
          </span>
        )}
        {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        {/* <span className="absolute inset-y-0 right-0 pl-3  text-primary flex items-center pointer-events-none">
          {icon && icon}
        </span> */}
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  icon: PropTypes.element,
};
