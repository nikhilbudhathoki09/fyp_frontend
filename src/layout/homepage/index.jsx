import Banner from "./banner";
import ServicesSection from "../../components/services";
import TestomonialsSection from "../../components/testomonials";
import StatisticsSection from "../../components/statistics";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function HomePageSection() {
  return (
    <div>
      {" "}
      <Navbar />
      <Banner />
      <br />
      <ServicesSection />
      <TestomonialsSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
