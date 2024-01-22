import { MdEmail } from "react-icons/md";
import Input from "../ui/input";
import { FaLock } from "react-icons/fa";
import Button from "../ui/button";

export default function LoginForm() {
  return (
    <div className="px-12 py-8 rounded-lg shadow-xl bg-white">
      <h3 className="text-text-color text-4xl font-semibold">Login</h3>
      <p className="text-base mt-3 text-text-color-secondary ">
        I don&apos;t have an account?
        <a
          className="text-primary underline ml-2 font-semibold"
          href="/register"
        >
          Register Now
        </a>
      </p>
      <form className="space-y-5 mt-4 mb-2">
        <Input
          type="email"
          icon={<MdEmail className="text-2xl text-primary" />}
          className={""}
          placeholder={"Email"}
        />
        <Input
          type="password"
          icon={<FaLock className="text-2xl text-primary" />}
          className={""}
          placeholder={"Password"}
        />
        <p className="text-primary text-sm  font-semibold">Forgot password ?</p>
        <Button
          type="submit"
          text="Login Now"
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </form>
    </div>
  );
}
