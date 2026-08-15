function BottomNavigation({
  sections,
  activeId,
  onChange,
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="page-container">
        <div className="border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {sections.map((section, index) => {
              const isActive = section.id === activeId;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onChange(section.id)}
                  className="
                    group
                    relative
                    min-h-[104px]
                    px-0
                    py-5
                    text-left
                    sm:px-6
                    first:sm:pl-0
                    last:sm:pr-0
                  "
                >
                  {/* Active top line */}
                  {isActive && (
                    <div
                      className="absolute left-0 right-0 top-[-1px] h-[2px]"
                      style={{
                        backgroundColor: section.theme.accent,
                      }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className={`
                        mt-[2px]
                        text-[11px]
                        font-semibold
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-slate-600 group-hover:text-slate-400"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Label */}
                    <div>
                      <p
                        className={`
                          text-[14px]
                          font-semibold
                          leading-5
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-slate-400 group-hover:text-slate-200"
                          }
                        `}
                      >
                        {section.navLabel}
                      </p>

                      <p
                        className={`
                          mt-2
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-slate-300"
                              : "text-slate-600 group-hover:text-slate-500"
                          }
                        `}
                      >
                        {isActive ? "Currently viewing" : "Explore"}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;