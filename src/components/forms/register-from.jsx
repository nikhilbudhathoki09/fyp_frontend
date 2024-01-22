import { MdEmail } from "react-icons/md";
import Input from "../ui/input";
import { FaLock, FaPhone, FaUserAlt } from "react-icons/fa";
import Button from "../ui/button";
import Select from "../ui/select";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

export default function RegisterFrom() {
  return (
    <div className="px-12 py-8 rounded-lg shadow-xl bg-white">
      <h3 className="text-text-color text-4xl font-semibold">Registser</h3>
      <p className="text-base mt-3 text-text-color-secondary ">
        I already have an account?
        <a className="text-primary underline ml-2 font-semibold" href="/login">
          Login Now
        </a>
      </p>
      <form className="space-y-5 mt-4 mb-2">
        <Input
          type="text"
          icon={<FaUserAlt className="text-2xl text-primary" />}
          placeholder={"Full Name"}
        />
        <Input
          type="email"
          icon={<MdEmail className="text-2xl text-primary" />}
          className={""}
          placeholder={"Email"}
        />
        <div className="flex flex-row gap-4">
          <Input
            type="number"
            icon={<FaPhone className="text-2xl text-primary" />}
            placeholder={"Phone Number"}
          />
          <Input
            type="text"
            icon={<FaMapLocationDot className="text-2xl text-primary" />}
            placeholder={"Address"}
          />
        </div>
        <Select
          options={[
            { value: "male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          icon={<IoMaleFemaleSharp className="text-2xl text-primary" />}
          placeholder="Select Gender"
        />
        <Input
          type="password"
          icon={<FaLock className="text-2xl text-primary" />}
          placeholder={"confirm password"}
        />
        <p className="text-primary text-sm  font-semibold">Forgot password ?</p>
        <Button
          type="submit"
          text="Register Now"
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </form>
    </div>
  );
}
