import HomePage from "./components/HomePage.jsx";
import DriftPage from "./components/DriftPage.jsx";
import TimeAttackPage from "./components/TimeAttackPage.jsx";
import ForzaPage from "./components/ForzaPage.jsx";

import {
  NavLink,
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__item" activeclassname="menu__item active">Главная</NavLink>
      <NavLink to="/drift" className="menu__item" activeclassname={"menu__item active"}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className="menu__item" activeclassname={"menu__item active"}>Time Attack</NavLink>
      <NavLink to="/forza" className="menu__item" activeclassname={"menu__item active"}>Forza Karting</NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
