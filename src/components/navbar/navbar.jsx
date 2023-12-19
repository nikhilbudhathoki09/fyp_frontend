import Button from "../../components/ui/button";

export default function Navbar() {
  return (
    <div className=" bg-primary text-white  py-6">
      <div className="layout flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-20">
          <p>Logo logooo</p>
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
          <Button
            text="Login"
            className=" hover:bg-button shadow-lg   px-7 py-3 rounded-full"
          />
          <Button
            text="Register"
            className=" bg-button shadow-lg px-7 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
