{/* =========================
    SECTION 01 — THE SHIFT
========================== */}
<section className="bg-[#f8fafc]">
  <div
    className="
      mx-auto
      max-w-[1200px]
      px-6
      py-24
      sm:px-8
      md:py-28
      lg:px-10
    "
  >
    {/* Section introduction */}
    <div className="max-w-[820px]">
      <p
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-blue-600
        "
      >
        The Shift
      </p>

      <h2
        className="
          mt-6
          max-w-[780px]
          text-[34px]
          font-semibold
          leading-[1.22]
          tracking-[-0.03em]
          text-[#172b4d]
          sm:text-[40px]
          lg:text-[44px]
        "
      >
        Recruitment has changed.
        <span className="mt-2 block text-slate-500">
          The purpose hasn&apos;t.
        </span>
      </h2>

      <p
        className="
          mt-8
          max-w-[720px]
          text-[16px]
          leading-[1.85]
          text-slate-600
          sm:text-[17px]
        "
      >
        Finding the right person has always started with understanding the
        role. What has changed is how much information recruiters work with
        before reaching that person. Technology has made it easier to search,
        organise and review talent — and AI is helping make that process more
        focused.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
      <ShiftCard
        label="Earlier"
        title="Manual Search"
        text="Recruiters reviewed profiles individually, compared experience and built shortlists through manual evaluation."
      />

      <ShiftCard
        label="The Transition"
        title="Digital Recruitment"
        text="Job portals, searchable databases and applicant systems made candidate discovery faster and easier to organise."
      />

      <ShiftCard
        label="Today"
        title="AI-Assisted Hiring"
        text="AI can help organise candidate information, identify relevant signals and bring stronger matches into focus sooner."
        accent="green"
      />
    </div>

    {/* Closing thought */}
    <div className="mt-12 max-w-[760px]">
      <div className="flex items-start gap-5">
        <span className="mt-[7px] h-10 w-[3px] shrink-0 rounded-full bg-green-500" />

        <p
          className="
            text-[16px]
            font-medium
            leading-[1.8]
            text-[#172b4d]
          "
        >
          The tools have changed, but the responsibility is still the same:
          understand the requirement, understand the candidate and create the
          right connection.
        </p>
      </div>
    </div>
  </div>
</section>