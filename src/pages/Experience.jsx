import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ExperienceBackground from "../components/ExperienceBackground";
import BottomNavigation from "../components/BottomNavigation";
import { experienceSections } from "../data/experienceSections";
import { useNavigate } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(experienceSections[0].id);

  const section =
    experienceSections.find((item) => item.id === activeId) ||
    experienceSections[0];

  return (
    <main className="experience-page relative">
      <ExperienceBackground section={section} />

      <div className="relative z-10">
        <div className="page-container">
          <div className="flex min-h-screen items-center pb-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={section.id}
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[860px] py-24"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-4">
                  <span
                    className="h-[2px] w-10 shrink-0 rounded-full"
                    style={{
                      backgroundColor: section.theme.accent,
                    }}
                  />

                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.24em]"
                    style={{
                      color: section.theme.accent,
                    }}
                  >
                    {section.eyebrow}
                  </p>
                </div>

                {/* Heading */}
                <h1 className="mt-7 max-w-[850px] text-[44px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[66px]">
                  {section.title}

                  <span
                    className="mt-3 block"
                    style={{
                      color: section.theme.accent,
                    }}
                  >
                    {section.highlight}
                  </span>
                </h1>

                {/* Main description */}
                <p className="mt-10 max-w-[720px] text-[17px] leading-[1.9] text-slate-300 sm:text-[18px]">
                  {section.description}
                </p>

                {/* Secondary description */}
                <p className="mt-5 max-w-[700px] text-[15px] leading-[1.9] text-slate-400">
                  {section.secondaryText}
                </p>

                {/* CTA */}
                <div className="mt-10">
                 <button
  type="button"
  className="dark-button"
  onClick={() => navigate(section.detailPath)}
>
  {section.cta}
  <span aria-hidden="true">→</span>
</button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <BottomNavigation
        sections={experienceSections}
        activeId={activeId}
        onChange={setActiveId}
      />
    </main>
  );
}

export default Experience;