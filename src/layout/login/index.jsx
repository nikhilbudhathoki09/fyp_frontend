import LoginForm from "../../components/forms/login-form";

export default function Login() {
  return (
    <div className="relative">
      <div
        className="z-30 w-full h-[80vh] mb-72 bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/login-rectangle.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="layout flex  justify-center">
        <div className="w-[38%] absolute top-56  z-[99999]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
