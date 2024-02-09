import { AiOutlineLogout } from "react-icons/ai";
import Button from "../../components/ui/button";
import { useSelector } from "react-redux";
import { TOKEN_KEY, USER_KEY } from "../../utils/constants";

export default function Navbar() {
  const user = useSelector((state) => state.user);

  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    window.location.replace("/login");
  };

  return (
    <div className=" bg-primary  text-white  py-6 z-40">
      <div className="layout flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-20">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-20" />
          </a>
          <Button
            asLink
            link={"/become-a-professional"}
            text="Become a Professional"
            className="bg-tertiary rounded-full  px-5 py-3 text-sm"
          />
          <Button
            text="For Businesses"
            className=" hover:bg-tertiary   px-5 py-3 rounded-full"
          />
        </div>
        {user.user !== null ? (
          <div className="group relative cursor-pointer">
            <div className="flex flex-row items-center gap-2">
              <img src={"/nopfp.png"} className="w-12 h-12 rounded-full" />
              <p className="capitalize font-semibold"> {user?.user?.name}</p>
            </div>
            <div className="absolute border opacity-0 group-hover:opacity-100 transition-all duration-300 top-14 p-2 rounded-md right-3">
              <button
                className="py-2 px-4 flex items-center gap-3 border hover:bg-white-bg hover:text-primary rounded-md border-transparent bg-primary"
                onClick={handleLogout}
              >
                <AiOutlineLogout />
                Logout
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
