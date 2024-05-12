import PropTypes from "prop-types";
import { cn } from "../../utils/utils";

export default function Select({
  options,
  icon,
  placeholder,
  className,
  register,
  id,
  error,
  defaultValue,
}) {
  return (
    <div>
      <div className="mt-1 relative rounded-lg shadow-sm border">
        <div className="absolute inset-y-0 left-0 pl-3 text-primary flex items-center pointer-events-none">
          {icon && icon}
        </div>
        <select
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={cn(
            "block w-full py-4 px-14 border focus:outline-primary sm:text-sm border-gray-300 rounded-md text-text-color-secondary text-xl",
            className
          )}
          {...(register && {
            ...register(id),
          })}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value} defaultValue={defaultValue}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span className="text-sm font-light text-red-600">{error}</span>
      )}
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
  register: PropTypes.func,
  id: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
};
