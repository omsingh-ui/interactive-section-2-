import { AnimatePresence, motion } from "framer-motion";

function ExperienceBackground({ section }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          {/* Base */}
          <div
            className="absolute inset-0"
            style={{
              background: section.theme.background,
            }}
          />

          {/* State 1 */}
          {section.id === "ai-hiring" && (
            <>
              <motion.div
                animate={{
                  x: [0, 32, 0],
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[-12%] top-[10%] h-[420px] w-[70%] rotate-[-12deg] rounded-full bg-blue-600/25 blur-[90px]"
              />

              <motion.div
                animate={{
                  x: [0, -24, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[6%] right-[-8%] h-[280px] w-[72%] rotate-[-13deg] rounded-full bg-cyan-400/15 blur-[90px]"
              />

              <div className="absolute right-[-8%] top-[32%] h-[2px] w-[72%] rotate-[-15deg] bg-gradient-to-r from-transparent via-blue-400/45 to-transparent" />

              <div className="absolute right-[-12%] top-[47%] h-[2px] w-[82%] rotate-[-15deg] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

              <div className="absolute right-[-5%] top-[60%] h-[2px] w-[66%] rotate-[-15deg] bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
            </>
          )}

          {/* State 2 */}
          {section.id === "human-intelligence" && (
            <>
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[4%] top-[15%] h-[430px] w-[430px] rounded-full bg-green-500/20 blur-[100px]"
              />

              <motion.div
                animate={{
                  x: [0, 18, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[10%] right-[25%] h-[260px] w-[260px] rounded-full bg-teal-400/15 blur-[90px]"
              />

              <div className="absolute right-[8%] top-[21%] h-[360px] w-[360px] rounded-full border border-green-400/10" />

              <div className="absolute right-[13%] top-[26%] h-[280px] w-[280px] rounded-full border border-teal-300/10" />

              <div className="absolute right-[20%] top-[36%] h-3 w-3 rounded-full bg-green-400/70 shadow-[0_0_26px_rgba(74,222,128,0.45)]" />

              <div className="absolute right-[31%] top-[50%] h-2 w-2 rounded-full bg-teal-300/60 shadow-[0_0_22px_rgba(94,234,212,0.4)]" />

              <div className="absolute right-[16%] top-[61%] h-2.5 w-2.5 rounded-full bg-green-300/55 shadow-[0_0_22px_rgba(134,239,172,0.35)]" />
            </>
          )}

          {/* State 3 */}
          {section.id === "minivel-advantage" && (
            <>
              <motion.div
                animate={{
                  x: [0, 28, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[-8%] top-[18%] h-[330px] w-[66%] rotate-[-12deg] rounded-full bg-green-500/18 blur-[100px]"
              />

              <motion.div
                animate={{
                  x: [0, -22, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[8%] right-[-2%] h-[300px] w-[62%] rotate-[-12deg] rounded-full bg-blue-500/20 blur-[100px]"
              />

              <div className="absolute right-[-5%] top-[34%] h-[120px] w-[72%] rotate-[-13deg] bg-gradient-to-r from-transparent via-green-400/12 to-transparent blur-xl" />

              <div className="absolute right-[-10%] top-[49%] h-[130px] w-[80%] rotate-[-13deg] bg-gradient-to-r from-transparent via-blue-400/12 to-transparent blur-xl" />

              <div className="absolute right-[9%] top-[31%] h-[290px] w-[290px] rounded-full border border-green-400/8" />

              <div className="absolute right-[17%] top-[39%] h-[155px] w-[155px] rounded-full border border-blue-400/8" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Shared grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.84)_0%,rgba(2,8,23,0.64)_42%,rgba(2,8,23,0.16)_72%,rgba(2,8,23,0.08)_100%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}

export default ExperienceBackground;