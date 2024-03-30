import Banner from "./banner";
import TestomonialsSection from "../../components/testomonials";
import StatisticsSection from "../../components/statistics";
import CategoriesSectionHome from "../../components/services-home/categories-section-home";
import RecommendedProviderSection from "../../components/recommended-providers/recommended-providers-section";

export default function HomePageSection() {
  return (
    <div className="space-y-14">
      <Banner />
      <CategoriesSectionHome />
      <RecommendedProviderSection />
      <TestomonialsSection />
      <StatisticsSection />
    </div>
  );
}
