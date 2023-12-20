export default function TestominalCard(data) {
  return (
    <div>
      <div className="space-y-4">
        <div className="bg-white relative rounded-lg shadow-lg max-w-sm  h-52 p-5 ">
          <p className="line-clamp-[7]">{data.testimonial}</p>
          <div className="bg-white border rotate-45  absolute h-5 w-5 -bottom-[10px] left-16 border-t-0 border-l-0" />
        </div>
        <div className="flex items-start space-x-2 pl-4">
          {/* overlay */}
          <div className=" rounded-full p-1  border-2 border-[#7950F2] w-fit">
            <img
              src={data.image || "/nopfp.png"}
              className="w-14 hp-14 rounded-full"
            />
          </div>
          <div className="pt-2">
            <p className="font-semibold">{data.name}</p>
            <span className="text-xs">@{data.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
