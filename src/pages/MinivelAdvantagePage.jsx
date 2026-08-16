import { Link } from "react-router-dom";

function MinivelAdvantagePage() {
  return (
    <main className="min-h-screen bg-white text-[#172b4d]">

      {/* ========================================
          DOCUMENT HEADER
      ========================================= */}
      <header className="border-b border-slate-200">
        <div className="page-container">
          <div className="flex h-[72px] items-center justify-between">
            <Link
              to="/experience"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[14px]
                font-semibold
                text-[#172b4d]
                transition-colors
                duration-300
                hover:text-[#5fbe3e]
              "
            >
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              >
                ←
              </span>

              Back to experience
            </Link>

            <p
              className="
                hidden
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-400
                sm:block
              "
            >
              Minivel Talent Intelligence
            </p>
          </div>
        </div>
      </header>


      {/* ========================================
          HERO
      ========================================= */}
      <section className="bg-white">
        <div className="page-container">
          <div className="py-[96px] md:py-[112px]">
            <div className="max-w-[920px]">
              <p className="section-label">
                The Minivel Advantage
              </p>

              <h1
                className="
                  mt-7
                  max-w-[900px]
                  text-[42px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.04em]
                  text-[#172b4d]
                  sm:text-[50px]
                  md:text-[58px]
                "
              >
                Technology gives us scale.

                <span className="mt-3 block text-[#5fbe3e]">
                  Experience gives it direction.
                </span>
              </h1>

              <p
                className="
                  mt-10
                  max-w-[750px]
                  text-[17px]
                  leading-[1.9]
                  text-slate-600
                  sm:text-[18px]
                "
              >
                Recruitment works best when technology supports people who
                understand the realities behind a hiring requirement. Minivel
                brings together recruitment experience, industry understanding
                and modern hiring tools to make that process more focused.
              </p>

              <p
                className="
                  mt-6
                  max-w-[720px]
                  text-[15px]
                  leading-[1.9]
                  text-slate-500
                  sm:text-[16px]
                "
              >
                The advantage is not technology on its own. It is knowing how
                to use better information, stronger recruiter judgement and
                meaningful candidate conversations together.
              </p>

              <div
                className="
                  mt-12
                  h-[3px]
                  w-[88px]
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-[#5fbe3e]
                "
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default MinivelAdvantagePage;