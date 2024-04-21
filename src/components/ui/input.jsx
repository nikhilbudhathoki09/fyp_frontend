import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { cn } from "../../utils/utils";

export default function Input({
  id,
  type,
  icon,
  placeholder,
  className,
  register,
  error,
  defaultValue,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInputEmpty, setIsPasswordInputEmpty] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="mt-1 relative rounded-lg shadow-sm border">
        <div className="absolute inset-y-0 left-0 pl-3  text-primary flex items-center pointer-events-none">
          {icon && <span>{icon}</span>}
        </div>

        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {error && (
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M10.0001 18.3333C14.6028 18.3333 18.3334 14.6027 18.3334 10C18.3334 5.39733 14.6028 1.66666 10.0001 1.66666C5.39743 1.66666 1.66675 5.39733 1.66675 10C1.66675 14.6027 5.39743 18.3333 10.0001 18.3333ZM10.0001 16.6667C13.6818 16.6667 16.6667 13.6818 16.6667 10C16.6667 6.31835 13.6818 3.33333 10.0001 3.33333C6.31843 3.33333 3.33341 6.31835 3.33341 10C3.33341 13.6818 6.31843 16.6667 10.0001 16.6667ZM10.8334 5.83333H9.16675V10.8333H10.8334V5.83333ZM10.8334 12.5H9.16675V14.1667H10.8334V12.5Z"
              />
            </svg>
          )}
        </span>
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={cn(
            "block w-full py-5 pl-14 border  sm:text-sm border-gray-300 focus:outline-primary rounded-md text-text-color-secondary text-xl",
            className,
            error && "border-red-500"
          )}
          onChange={() => setIsPasswordInputEmpty(false)}
          {...(register && {
            ...register(id),
          })}
          required={required || false}
        />

        {type === "password" && !isPasswordInputEmpty && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              className="text-gray-500 focus:outline-none focus:text-primary"
              onClick={togglePasswordVisibility}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        )}
      </div>
      <span className="text-sm font-light text-red-600">{error}</span>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.func,
  id: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};
