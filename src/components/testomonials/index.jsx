export default function TestomonialsSection() {
  const testomonials = [
    {
      name: "John Doe",
      id: 1,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas. hahaha ahahaha hahaha ahahah ahaha ahahahaha ahahaha ahahaha aha  amet consectetur adipisicing elit. Quisquam, voluptas. hahaha ahahaha hahaha ahahah ahaha ahahahaha ahahaha ahahaha aha  ahaha    amet consectetur adipisicing elit. Quisquam, voluptas. hahaha ahahaha hahaha ahahah ahaha ahahahaha ahahaha ahahaha aha  ahaha ",
    },
    {
      name: "John Doe",
      id: 2,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "John Doe",
      id: 3,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "John Doe",
      id: 4,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "John Doe",
      id: 5,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "John Doe",
      id: 6,
      image: "",
      testimonial: "Lorem ipsum dolor sit amet ",
    },
  ];
  return (
    <div className="bg-secondary py-10 pop">
      <div className="layout flex flex-col gap-6 text-primary">
        <h3 className="text-2xl font-semibold text-center">Testomonials</h3>
        <div className="grid grid-cols-3 items-center gap-6">
          {testomonials.map((data, i) => (
            <div key={i} className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg max-w-sm  h-52 overflow-hidden p-5 ">
                <p className="line-clamp-[7]">
                  {data.testimonial}
                </p>
              </div>
              <div className="flex items-start pl-4 space-x-3">
                {/* overlay */}
                <div className=" rounded-full p-1 border-2 border-[#7950F2] w-fit">
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
          ))}
        </div>
      </div>
    </div>
  );
}
