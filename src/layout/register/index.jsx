import RegisterFrom from "../../components/forms/register-from";

export default function Register() {
  return (
    <div className="relative">
      <div
        className="z-30 w-full h-[80vh] mb-[450px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/login-rectangle.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="layout flex  justify-center">
        <div className=" absolute top-56  z-[99999]">
          <RegisterFrom />
        </div>
      </div>
    </div>
  );
}
