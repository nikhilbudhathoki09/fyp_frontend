import Button from "../../components/ui/button";

export default function Navbar() {
  return (
    <div className=" bg-primary  text-white  py-6 z-40">
      <div className="layout flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-20">
          <img src="/logo.png" alt="logo" className="w-20" />
          <Button
            text="Become a Professional"
            className="bg-tertiary rounded-full  px-5 py-3 text-sm"
          />
          <Button
            text="For Businesses"
            className=" hover:bg-tertiary   px-5 py-3 rounded-full"
          />
        </div>
        <div className="flex flex-row gap-3">
          <a
            href="/login"
            className=" hover:bg-button shadow-lg   px-7 py-3 rounded-full"
          >
            Login
          </a>
          <a
            href="/register"
            className=" bg-button hover:bg-primary/20 shadow-lg px-7 py-3 rounded-full"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
