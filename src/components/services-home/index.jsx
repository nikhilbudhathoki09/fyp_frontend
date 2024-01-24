import { MdPlumbing } from "react-icons/md";
export default function CategoriesSectionHome() {
  return (
    <div className="flex w-full flex-col gap-6 relative  text-black   items-center justify-center py-6 layout ">
      <h3 className="text-3xl font-semibold">Services</h3>
      <img src="/storke.png" className="absolute top-12" />

      <div className="grid w-full items-center justify-center grid-cols-4 gap-4 p-10 bg-white-bg rounded-md">
        {Array.from({ length: 8 }).map((_, i) => (
          <a href={`/category/service${i + 1}`} key={i} className="group">
            <div className="p-2 flex gap-2 font-semibold items-center justify-center flex-col">
              <div className="p-7 rounded-full  bg-white">
                <MdPlumbing
                  className="text-primary group-hover:scale-105"
                  size={35}
                />
              </div>
              <p key={i} className="text-sm">
                Service {i + 1}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
