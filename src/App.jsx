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
        <Route path="/whatever-outdoor/" Component={HomePage} />
        <Route path="/whatever-outdoor/backpack" Component={BackpackPage} />
        <Route path="/whatever-outdoor/gear" Component={GearPage} />
        <Route path="/whatever-outdoor/experience" Component={ExperiencePage} />
        <Route path="/whatever-outdoor/backpack/:slug" element={<Detail />} />
        <Route path="/whatever-outdoor/gear/:slug" element={<DetailGear />} />
        <Route
          path="/whatever-outdoor/authentication"
          element={<Authentication />}
        />

        {/* Private Pages */}
        <Route element={<PrivateRoutesLayout />}>
          <Route
            path="/whatever-outdoor/profile"
            element={<DashboardProfile />}
          />
          <Route path="/whatever-outdoor/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
