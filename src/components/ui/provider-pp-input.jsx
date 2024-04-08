import PropTypes from "prop-types";
import { FaRegCircleUser } from "react-icons/fa6";
import { cn } from "../../utils/utils";

export default function ProviderImageInput({ register, image }) {
  return (
    <div
      className={cn(
        "relative py-2 px-2 border border-tertiary bg-secondary rounded-md gap-4 w-full flex"
      )}
    >
      <input
        className="absolute inset-0 cursor-pointer opacity-0"
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/gif, image/svg+xml, image/webp"
        {...(register && {
          ...register("providerImage"),
        })}
        required={false}
      />
      {image && image.length > 0 ? (
        <div className="flex items-center gap-4">
          <img
            src={URL.createObjectURL(image[0])}
            alt="Provider Image"
            width={64}
            height={64}
            className="w-16 h-16 aspect-square object-contain bg-black rounded-full"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center p-1 w-12 h-12 aspect-square rounded-full border border-primary bg-white">
          <FaRegCircleUser className="text-4xl text-primary" />
        </div>
      )}
      {image ? (
        <div className=" ml-4 flex justify-center items-center text-sm text-text-color-secondary">
          <p>
            Image selected <br /> Click to change
          </p>
        </div>
      ) : (
        <div>
          Select an image to upload. <br />
          <span className="text-xs text-gray-500 block">
            Recommended dimensions: 128x128
          </span>
          <span className="text-xs text-gray-500 block">
            Recommended formats: PNG, JPG, GIF, SVG, WEBP
          </span>
        </div>
      )}
    </div>
  );
}

ProviderImageInput.propTypes = {
  multiple: PropTypes.bool,
  register: PropTypes.func,
  image: PropTypes.arrayOf(PropTypes.object),
};
