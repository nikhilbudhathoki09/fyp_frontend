import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { cn } from "../../utils/utils";

export default function Input({ label, type, icon, placeholder, className }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInputEmpty, setIsPasswordInputEmpty] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative rounded-lg shadow-sm border">
        <div className="absolute inset-y-0 left-0 pl-3  text-primary flex items-center pointer-events-none">
          {icon && icon}
        </div>
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className={cn(
            "block w-full py-5 pl-14 border  sm:text-sm border-gray-300 focus:outline-primary rounded-md text-text-color-secondary text-xl",
            className
          )}
          onChange={() => setIsPasswordInputEmpty(false)}
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
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};
