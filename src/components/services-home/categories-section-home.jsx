import { useEffect, useState } from "react";
import { MdPlumbing } from "react-icons/md";
import getAllCategory from "../../services/category/get-all-category";

export default function CategoriesSectionHome() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getAllCategory();
      setServices(data);
    };
    fetchServices();
  }, []);
  console.log(services);

  return (
    <div className="flex w-full flex-col gap-6 relative  text-black   items-center justify-center py-6 layout ">
      <h3 className="text-3xl font-semibold">Services</h3>
      <img src="/storke.png" className="absolute top-12" />

      <div className="grid w-full items-center justify-center grid-cols-4 gap-4 p-10 bg-white-bg rounded-md">
        {services &&
          services.length !== 0 &&
          services?.map((data, i) => (
            <a href={`/category/${data.id}`} key={i} className="group">
              <div className="p-2 flex gap-2  font-semibold items-center justify-center flex-col">
                <div className="p-7 rounded-full  bg-white">
                  {data.categoryImage ? (
                    <img
                      src={data.categoryImage}
                      className="w-9 h-9"
                      alt="category"
                    />
                  ) : (
                    <MdPlumbing
                      className="text-primary group-hover:scale-110"
                      size={35}
                    />
                  )}
                </div>
                <p key={i} className="text-sm group-hover:underline">
                  {data?.title || "N/A"}
                </p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
