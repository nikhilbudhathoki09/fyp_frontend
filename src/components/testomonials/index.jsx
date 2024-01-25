import TestominalCard from "./testominal-card";

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
      name: "Ashish Khatri",
      id: 2,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "Nikhil Jung",
      id: 3,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "Ram Bahadur",
      id: 4,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "Azu Bhazzu",
      id: 5,
      image: "",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    },
    {
      name: "Kshitij Rana",
      id: 6,
      image: "",
      testimonial: "Lorem ipsum dolor sit amet ",
    },
  ];
  return (
    <div className="bg-white-bg py-10 ">
      <div className="layout flex flex-col gap-6 text-primary">
        <h3 className="text-2xl font-semibold text-center">Testomonials</h3>
        <div className="grid grid-cols-3 items-center gap-6">
          {testomonials.map((data, i) => (
            <TestominalCard key={i} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
