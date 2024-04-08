import ProviderRegisterFrom from "../../components/forms/provider-register-form";

export default function ProviderRegister() {
  return (
    <div className="relative">
      <div
        className="z-30 w-full h-[130vh] mb-[450px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/login-rectangle.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="layout flex  justify-center">
        <div className=" absolute top-40  z-[99999]">
          <ProviderRegisterFrom />
        </div>
      </div>
    </div>
  );
}
