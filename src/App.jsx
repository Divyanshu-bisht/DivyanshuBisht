import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Year1 from "../pages/Year1";
import Year2 from "../pages/Year2";
import Year3 from "../pages/Year3";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop /> {/* 👈 important */}
        <Routes>
          <Route path="/" element={<Navigate to="/year1" replace />} />
          <Route path="/year1" element={<Year1 />} />
          <Route path="/year2" element={<Year2 />} />
          <Route path="/year3" element={<Year3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
