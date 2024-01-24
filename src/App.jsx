import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageSection from "./layout/homepage/index";
import ServiceProviderPage from "./layout/service-provider/service-provider-page";
import Login from "./layout/login";
import Register from "./layout/register";
import CategoryPage from "./layout/category";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className=" h-[100vh] w-full flex flex-col overflow-y-auto custom-scrollbar">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePageSection />} />
          <Route path="/service-page" element={<ServiceProviderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
