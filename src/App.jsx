import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CategoryPage from "./layout/category";
import HomePageSection from "./layout/homepage/index";
import Login from "./layout/login";
import Register from "./layout/register";
import ServiceProviderPage from "./layout/service-provider";
// core styles are required for all packages
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import AllServicesSection from "./layout/all-services/all-services-section";
import ProfilePage from "./layout/profile-page";
import ProviderLandingPage from "./layout/provider-landing-page";
import ProviderRegister from "./layout/provider-register/provider-register";

function App() {
  return (
    <div className="h-[100vh] w-full flex flex-col overflow-y-auto custom-scrollbar">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 999999999999999,
          },
        }}
      />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePageSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/become-a-professional" element={<ProviderRegister />} />

          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route
            path="/providers/:providerId"
            element={<ServiceProviderPage />}
          />
          <Route path="/appointments" element={<ProfilePage />} />
          <Route path="/all-services" element={<AllServicesSection />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/provider-landing/:providerId"
            element={<ProviderLandingPage />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
