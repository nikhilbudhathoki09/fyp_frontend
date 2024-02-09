import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageSection from "./layout/homepage/index";
import ServiceProviderPage from "./layout/service-provider";
import Login from "./layout/login";
import Register from "./layout/register";
import CategoryPage from "./layout/category";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
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
            path="/providers/:providersId"
            element={<ServiceProviderPage />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
