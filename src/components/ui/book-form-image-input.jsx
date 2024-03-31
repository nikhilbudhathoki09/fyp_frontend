import { cn } from "../../utils/utils";
import PropTypes from "prop-types";
import { FiUpload } from "react-icons/fi";

export default function BookFormImageInput({ register, image }) {
  return (
    <div
      className={cn(
        "relative py-2 px-2 border border-tertiary bg-secondary rounded-md gap-4 w-full flex flex-col"
      )}
    >
      <input
        className="absolute inset-0 cursor-pointer opacity-0"
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/gif, image/svg+xml, image/webp"
        {...(register && {
          ...register("userImage"),
        })}
        required={false}
      />

      {image ? (
        <div className="flex justify-center items-center text-sm text-text-color-secondary">
          <p>Image selected Click to change</p>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-3">
          <FiUpload size={30} />
          Select an image to upload. <br />
        </div>
      )}
      {image && image.length > 0 && (
        <div className="flex items-center gap-4 w-full">
          <img
            src={URL.createObjectURL(image[0])}
            alt="Profile picture"
            width={500}
            height={300}
            className="w-full h-32 aspect-auto object-contain bg-black "
          />
        </div>
      )}
    </div>
  );
}

BookFormImageInput.propTypes = {
  multiple: PropTypes.bool,
  register: PropTypes.func,
  image: PropTypes.arrayOf(PropTypes.object),
};
