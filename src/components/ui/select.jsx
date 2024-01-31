import PropTypes from "prop-types";
import { cn } from "../../utils/utils";

export default function Select({ options, icon, placeholder, className }) {
  return (
    <div>
      <div className="mt-1 relative rounded-lg shadow-sm border">
        <div className="absolute inset-y-0 left-0 pl-3 text-primary flex items-center pointer-events-none">
          {icon && icon}
        </div>
        <select
          placeholder={placeholder}
          className={cn(
            "block w-full py-5 px-14 border focus:outline-primary sm:text-sm border-gray-300 rounded-md text-text-color-secondary text-xl",
            className
          )}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
