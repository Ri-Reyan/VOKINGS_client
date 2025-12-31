import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer.jsx";

const Navbar = lazy(() => import("./pages/nav/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Error = lazy(() => import("./pages/Error"));
const Slider = lazy(() => import("./components/Slider.jsx"));
const Services = lazy(() => import("./pages/services/Services.jsx"));
const Admin = lazy(() => import("./pages/admin/Admin.jsx"));
const AdminAuth = lazy(() => import("./pages/admin/auth/AdminAuth.jsx"));
const Protected = lazy(() => import("./pages/Protected.jsx"));
const ClientRequest = lazy(() =>
  import("./components/clientCompo/ClientRequest.jsx")
);
const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
        <Slider />
      </nav>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/adminpanel"
              element={
                <Protected>
                  <Admin />
                </Protected>
              }
            />
            <Route path="/request" element={<ClientRequest />} />
            <Route path="/signin" element={<AdminAuth />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </div>
      <footer className="mt-[20vh]">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
