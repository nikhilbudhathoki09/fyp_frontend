import Banner from "./banner";
import ServicesSection from "../../components/services-home";
import TestomonialsSection from "../../components/testomonials";
import StatisticsSection from "../../components/statistics";

export default function HomePageSection() {
  return (
    <div className="space-y-8">
      {" "}
      <Banner />
      <ServicesSection />
      <TestomonialsSection />
      <StatisticsSection />
    </div>
  );
}
