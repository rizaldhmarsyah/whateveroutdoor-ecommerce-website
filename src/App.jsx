import { Routes, Route } from "react-router-dom";

import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import BackpackPage from "./pages/BackpackPage";
import GearPage from "./pages/GearPage";
import ExperiencePage from "./pages/ExperiencePage";
import Detail from "./pages/Detail";
import CartTab from "./components/CartTab";
import DetailGear from "./pages/DetailGear";
import Authentication from "./pages/Authentication";
import DashboardProfile from "./pages/DashboardProfile";
import PrivateRoutesLayout from "./layout/PrivateRoutesLayout";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      <NavBarComponent />
      <CartTab />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/backpack" Component={BackpackPage} />
        <Route path="/gear" Component={GearPage} />
        <Route path="/experience" Component={ExperiencePage} />
        <Route path="/backpack/:slug" element={<Detail />} />
        <Route path="/gear/:slug" element={<DetailGear />} />
        <Route path="/authentication" element={<Authentication />} />

        {/* Private Pages */}
        <Route element={<PrivateRoutesLayout />}>
          <Route path="/profile" element={<DashboardProfile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
