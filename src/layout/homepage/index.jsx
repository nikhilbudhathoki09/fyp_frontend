import Banner from "./banner";
import TestomonialsSection from "../../components/testomonials";
import StatisticsSection from "../../components/statistics";
import CategoriesSectionHome from "../../components/services-home/categories-section-home";

export default function HomePageSection() {
  return (
    <div className="space-y-14">
      <Banner />
      <CategoriesSectionHome />
      <TestomonialsSection />
      <StatisticsSection />
    </div>
  );
}
