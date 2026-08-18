import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import PageLoader from "./components/PageLoader";

const Experience = lazy(() => import("./pages/Experience"));
const AIRecruitmentPage = lazy(() => import("./pages/AIRecruitmentPage"));
const HumanIntelligencePage = lazy(
  () => import("./pages/HumanIntelligencePage")
);
const MinivelAdvantagePage = lazy(
  () => import("./pages/MinivelAdvantagePage")
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="/experience" element={<Experience />} />

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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;