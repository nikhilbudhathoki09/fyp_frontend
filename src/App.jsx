import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageSection from "./layout/homepage/index";
import ServiceProviderPage from "./layout/service-provider/service-provider-page";
import Login from "./layout/login";
import Register from "./layout/register";

function App() {
  return (
    <div className=" h-[100vh] w-full flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<HomePageSection />} />
          <Route path="/service-page" element={<ServiceProviderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
