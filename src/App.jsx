import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experience from "./pages/Experience";
import AIRecruitmentPage from "./pages/AIRecruitmentPage";
import HumanIntelligencePage from "./pages/HumanIntelligencePage";
import MinivelAdvantagePage from "./pages/MinivelAdvantagePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        {/* Main landing experience */}
        <Route path="/" element={<Experience />} />
        <Route path="/experience" element={<Experience />} />

        {/* Detail pages */}
        <Route
          path="/ai-recruitment"
          element={<AIRecruitmentPage />}
        />

        <Route
          path="/human-intelligence"
          element={<HumanIntelligencePage />}
        />

        <Route
          path="/minivel-advantage"
          element={<MinivelAdvantagePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;