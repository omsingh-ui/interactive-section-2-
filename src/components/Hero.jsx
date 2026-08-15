import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi2";
import { FiCpu, FiUsers, FiTarget } from "react-icons/fi";

function Hero() {
  const scrollToNextSection = () => {
    document
      .getElementById("recruitment-evolution")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                Minivel Talent Intelligence
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Recruitment is changing.
              <span className="mt-2 block text-green-400">
                Human intelligence isn't.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              At Minivel, technology supports the recruitment process by
              helping teams discover, understand and match talent more
              efficiently — while experienced recruiters remain at the centre
              of every important hiring decision.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <button
                onClick={scrollToNextSection}
                className="group inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-[0_14px_35px_rgba(34,197,94,0.25)]"
              >
                Explore the evolution

                <HiArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <div className="text-sm text-slate-400">
                People
                <span className="mx-2 text-green-400">×</span>
                Intelligence
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full"
          >
            <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-7">
              
              <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Recruitment Intelligence
                  </p>

                  <h2 className="mt-2 max-w-md text-xl font-semibold leading-7 text-white">
                    Human expertise, intelligently supported.
                  </h2>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-green-400 sm:flex">
                  <FiCpu size={20} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <ProcessCard
                  number="01"
                  icon={<FiUsers />}
                  title="Discover"
                  description="Technology helps organise and surface relevant talent from larger candidate pools."
                />

                <ProcessCard
                  number="02"
                  icon={<FiTarget />}
                  title="Understand"
                  description="Skills, experience and role requirements can be compared in a more structured way."
                />

                <ProcessCard
                  number="03"
                  icon={<FiCpu />}
                  title="Decide"
                  description="Recruiters review the context, communicate with candidates and make the human judgement."
                />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <p className="text-sm leading-6 text-slate-300">
                  Technology helps find the signal.
                  <span className="ml-1 font-semibold text-white">
                    People make the decision.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ number, icon, title, description }) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.06] hover:shadow-[0_14px_35px_rgba(0,0,0,0.20)]">
      
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition-colors duration-300 group-hover:border-green-400/20 group-hover:bg-green-400/10 group-hover:text-green-400">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold tracking-[0.15em] text-slate-500">
            {number}
          </span>

          <h3 className="text-base font-semibold text-white">
            {title}
          </h3>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Hero;