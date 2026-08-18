import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function HumanIntelligencePage() {
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

      <ScrollReveal>
        <div className="max-w-[920px]">

          {/* Label */}
          <p className="section-label">
            AI × Human Intelligence
          </p>


          {/* Heading */}
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
            Technology can recognise patterns.

            <span className="mt-3 block text-[#5fbe3e]">
              People understand what they mean.
            </span>
          </h1>


          {/* Main description */}
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
            Recruitment involves information — skills, experience,
            qualifications and career history. Technology can help teams
            work through that information faster. But a hiring decision
            rarely comes from information alone.
          </p>


          {/* Secondary description */}
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
            At Minivel, we see the strongest opportunity where technology
            and recruiter experience work together: one helping bring the
            right signals into focus, the other understanding the people
            and circumstances behind them.
          </p>


          {/* Accent */}
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
      </ScrollReveal>

    </div>
  </div>
</section>


{/* ========================================
    SECTION 01 — TWO DIFFERENT STRENGTHS
========================================= */}
<section className="document-section document-section--soft">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[840px]">
        <p className="section-label">
          Two Different Strengths
        </p>

        <h2 className="document-heading">
          Technology brings speed and structure.
          <span className="mt-2 block text-slate-500">
            Recruiters bring context and judgement.
          </span>
        </h2>

        <p className="document-text">
          AI can help recruitment teams work through more candidate information,
          compare relevant details and bring stronger matches into focus sooner.
          Recruiters add the understanding that data alone cannot provide —
          motivation, communication, expectations and fit.
        </p>
      </div>
    </ScrollReveal>


    {/* Cards */}
    <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-2">

      {/* AI CARD */}
      <ScrollReveal delay={0} className="h-full">
        <article
          className="
            premium-card
            min-w-0
            h-full
            border-blue-100
          "
        >
          <p className="premium-card-label">
            AI Brings
          </p>

          <h3
            className="
              mt-5
              text-[22px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            Speed, structure and clearer signals.
          </h3>

          <p
            className="
              mt-4
              text-[15px]
              leading-[1.8]
              text-slate-600
            "
          >
            Technology can help organise candidate information, compare skills
            against role requirements and make larger talent pools easier to
            review.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-[13px] font-semibold leading-[1.6] text-blue-600">
              Useful for discovery, comparison and prioritisation.
            </p>
          </div>
        </article>
      </ScrollReveal>


      {/* HUMAN CARD */}
      <ScrollReveal delay={0.12} className="h-full">
        <article
          className="
            premium-card
            min-w-0
            h-full
            border-green-100
          "
        >
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            Recruiters Bring
          </p>

          <h3
            className="
              mt-5
              text-[22px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            Context, conversation and judgement.
          </h3>

          <p
            className="
              mt-4
              text-[15px]
              leading-[1.8]
              text-slate-600
            "
          >
            Recruiters understand why someone is considering a move, what they
            are looking for next and whether the opportunity makes sense beyond
            the information written on a profile.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-[13px] font-semibold leading-[1.6] text-green-600">
              Essential for motivation, fit and final decision-making.
            </p>
          </div>
        </article>
      </ScrollReveal>

    </div>


    {/* Closing thought */}
    <ScrollReveal delay={0.1}>
      <div className="mt-12 max-w-[780px]">
        <p
          className="
            text-[17px]
            font-medium
            leading-[1.85]
            text-[#172b4d]
          "
        >
          The real advantage comes from combining both — using technology to
          make information clearer and recruiter experience to decide what that
          information actually means.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 02 — WHERE HUMAN JUDGEMENT MATTERS
========================================= */}
<section className="document-section">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[840px]">
        <p className="section-label">
          Where Human Judgement Matters Most
        </p>

        <h2 className="document-heading">
          Good hiring needs more than a strong match.
          <span className="mt-2 block text-slate-500">
            It needs understanding.
          </span>
        </h2>

        <p className="document-text">
          AI can help identify relevant profiles and organise information, but
          the final decision still depends on what happens after that shortlist.
          Recruiters need to understand the person, the opportunity and whether
          the two genuinely fit together.
        </p>
      </div>
    </ScrollReveal>


    {/* Cards */}
    <div className="mt-14 grid items-stretch gap-7 md:grid-cols-3">

      {/* Card 1 */}
      <ScrollReveal delay={0} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            Motivation
          </p>

          <h3
            className="
              mt-5
              text-[21px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            Why does the candidate want to move?
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.8]
              text-slate-600
            "
          >
            Understanding what someone wants from their next opportunity helps
            recruiters judge whether the role really fits their direction.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 2 */}
      <ScrollReveal delay={0.12} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            Expectations
          </p>

          <h3
            className="
              mt-5
              text-[21px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            What does the person expect from the role?
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.8]
              text-slate-600
            "
          >
            Salary, responsibilities, growth and working environment all matter
            when deciding whether an opportunity makes sense for both sides.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 3 */}
      <ScrollReveal delay={0.24} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            Fit
          </p>

          <h3
            className="
              mt-5
              text-[21px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            Does the opportunity actually make sense?
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.8]
              text-slate-600
            "
          >
            Recruiters bring together the business requirement and the
            candidate&apos;s situation before deciding whether the connection is
            worth taking forward.
          </p>
        </article>
      </ScrollReveal>

    </div>


    {/* Closing */}
    <ScrollReveal delay={0.1}>
      <div className="mt-12 max-w-[780px]">
        <p
          className="
            text-[17px]
            font-medium
            leading-[1.85]
            text-[#172b4d]
          "
        >
          A profile may suggest that someone can do the job. Human judgement
          helps decide whether this is the right opportunity for that person.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 03 — THE CONVERSATION
========================================= */}
<section className="document-section document-section--soft">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[840px]">
        <p className="section-label">
          The Conversation Changes the Picture
        </p>

        <h2 className="document-heading">
          A profile starts the conversation.
          <span className="mt-2 block text-slate-500">
            It should not finish it.
          </span>
        </h2>

        <p className="document-text">
          A CV gives us a useful starting point. The conversation helps us
          understand what sits behind that experience — what the candidate wants
          next, what matters to them and whether the opportunity genuinely makes
          sense.
        </p>
      </div>
    </ScrollReveal>


    {/* Cards */}
    <div className="mt-14 grid items-stretch gap-7 md:grid-cols-3">

      {/* Profile */}
      <ScrollReveal delay={0} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            The Profile
          </p>

          <h3
            className="
              mt-5
              text-[21px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            We see the experience.
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.8]
              text-slate-600
            "
          >
            Skills, previous roles and career history help us understand whether
            someone may be relevant for an opportunity.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-[13px] font-semibold text-blue-600">
              The profile gives us the starting point.
            </p>
          </div>
        </article>
      </ScrollReveal>


      {/* Conversation */}
      <ScrollReveal delay={0.12} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            The Conversation
          </p>

          <h3
            className="
              mt-5
              text-[21px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            We understand the person.
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.8]
              text-slate-600
            "
          >
            Speaking with the candidate brings out their motivation,
            expectations and what they actually want from their next move.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-[13px] font-semibold text-cyan-600">
              Conversation adds the missing context.
            </p>
          </div>
        </article>
      </ScrollReveal>


      {/* Decision */}
      <ScrollReveal delay={0.24} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            The Decision
          </p>

          <h3
            className="
              mt-5
              text-[21px]
              font-semibold
              leading-[1.35]
              tracking-[-0.02em]
              text-[#172b4d]
            "
          >
            We understand the fit.
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.8]
              text-slate-600
            "
          >
            With both the profile and the conversation in view, recruiters can
            make a more informed judgement about whether to take the match
            forward.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-[13px] font-semibold text-green-600">
              Human judgement gives the information direction.
            </p>
          </div>
        </article>
      </ScrollReveal>

    </div>


    {/* Closing */}
    <ScrollReveal delay={0.1}>
      <div className="mt-12 max-w-[780px]">
        <p
          className="
            text-[17px]
            font-medium
            leading-[1.85]
            text-[#172b4d]
          "
        >
          At Minivel, technology can make the starting point smarter.
          The conversation helps us understand whether the opportunity actually
          makes sense for the person behind the profile.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 04 — BETTER DECISIONS
========================================= */}
<section
  style={{
    position: "relative",
    overflow: "hidden",
    background: "#07152d",
  }}
>
  {/* Background glow */}
  <div
    style={{
      position: "absolute",
      top: "-80px",
      right: "-100px",
      width: "520px",
      height: "520px",
      borderRadius: "50%",
      background: "rgba(59, 130, 246, 0.10)",
      filter: "blur(110px)",
      pointerEvents: "none",
    }}
  />

  <div
    style={{
      position: "absolute",
      right: "80px",
      bottom: "-150px",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(95, 190, 62, 0.08)",
      filter: "blur(110px)",
      pointerEvents: "none",
    }}
  />

  <div
    className="page-container"
    style={{
      position: "relative",
      zIndex: 1,
      paddingTop: "96px",
      paddingBottom: "96px",
    }}
  >
    {/* =====================
    INTRO
====================== */}
<ScrollReveal>
  <div
    style={{
      maxWidth: "850px",
    }}
  >
      <p
        style={{
          margin: 0,
          fontSize: "12px",
          lineHeight: "1.5",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#4ade80",
        }}
      >
        Better Decisions, Not Automated Decisions
      </p>

      <div
        style={{
          width: "64px",
          height: "2px",
          marginTop: "18px",
          background: "#4ade80",
        }}
      />

      <h2
        style={{
          margin: "28px 0 0",
          maxWidth: "830px",
          fontSize: "48px",
          lineHeight: "1.18",
          letterSpacing: "-0.035em",
          fontWeight: 650,
          color: "#ffffff",
        }}
      >
        Technology can support the decision.

        <span
          style={{
            display: "block",
            marginTop: "12px",
            color: "#00dc82",
          }}
        >
          People still need to make it.
        </span>
      </h2>

      <p
        style={{
          margin: "32px 0 0",
          maxWidth: "760px",
          fontSize: "17px",
          lineHeight: "1.85",
          color: "#cbd5e1",
        }}
      >
        AI can help recruiters work with more information and bring relevant
        profiles into focus sooner. But hiring still needs context — what the
        role really requires, what the candidate expects and whether the
        opportunity makes sense for both sides.
      </p>
    </div>
    </ScrollReveal>


    {/* =====================
        CARDS
    ====================== */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
        gap: "28px",
        marginTop: "64px",
      }}
    >

      {/* TECHNOLOGY CARD */}
      {/* TECHNOLOGY CARD */}
<ScrollReveal delay={0} className="h-full">
  <article
    className="group"
        style={{
          position: "relative",
          minWidth: 0,
          overflow: "hidden",
          borderRadius: "24px",
          border: "1px solid rgba(96, 165, 250, 0.22)",
          background: "rgba(255,255,255,0.045)",
          padding: "38px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
          transition:
            "transform .3s ease, border-color .3s ease, box-shadow .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.borderColor = "rgba(96,165,250,.45)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(0,0,0,.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor =
            "rgba(96,165,250,.22)";
          e.currentTarget.style.boxShadow =
            "0 18px 45px rgba(0,0,0,.15)";
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            lineHeight: "1.5",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#7dd3fc",
          }}
        >
          Technology Helps
        </p>

        <h3
          style={{
            margin: "20px 0 0",
            maxWidth: "470px",
            fontSize: "26px",
            lineHeight: "1.32",
            letterSpacing: "-0.025em",
            fontWeight: 650,
            color: "#ffffff",
          }}
        >
          Bring the right information into view.
        </h3>

        <div
          style={{
            width: "100%",
            height: "1px",
            marginTop: "26px",
            background: "rgba(255,255,255,.10)",
          }}
        />

        <p
          style={{
            margin: "24px 0 0",
            maxWidth: "520px",
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          AI can help organise candidate information, compare relevant
          experience and reduce the time recruiters spend working through
          large volumes of profiles.
        </p>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gap: "14px",
          }}
        >
          {[
            "Faster profile review",
            "Clearer skill comparison",
            "Better recruiter focus",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                ✓
              </span>

              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </article>
      </ScrollReveal>


      {/* RECRUITER CARD */}
      {/* RECRUITER CARD */}
<ScrollReveal delay={0.12} className="h-full">
  <article
    style={{
          position: "relative",
          minWidth: 0,
          overflow: "hidden",
          borderRadius: "24px",
          border: "1px solid rgba(74, 222, 128, 0.22)",
          background: "rgba(255,255,255,0.045)",
          padding: "38px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
          transition:
            "transform .3s ease, border-color .3s ease, box-shadow .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.borderColor = "rgba(74,222,128,.45)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(0,0,0,.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor =
            "rgba(74,222,128,.22)";
          e.currentTarget.style.boxShadow =
            "0 18px 45px rgba(0,0,0,.15)";
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            lineHeight: "1.5",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#86efac",
          }}
        >
          Recruiters Decide
        </p>

        <h3
          style={{
            margin: "20px 0 0",
            maxWidth: "470px",
            fontSize: "26px",
            lineHeight: "1.32",
            letterSpacing: "-0.025em",
            fontWeight: 650,
            color: "#ffffff",
          }}
        >
          Understand whether the opportunity really fits.
        </h3>

        <div
          style={{
            width: "100%",
            height: "1px",
            marginTop: "26px",
            background: "rgba(255,255,255,.10)",
          }}
        />

        <p
          style={{
            margin: "24px 0 0",
            maxWidth: "520px",
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          Recruiters bring together the business requirement and the
          candidate&apos;s situation before deciding whether a match should
          move forward.
        </p>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gap: "14px",
          }}
        >
          {[
            "Candidate motivation",
            "Role expectations",
            "Human judgement",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "#5fbe3e",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                ✓
              </span>

              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </article>
      </ScrollReveal>

    </div>


    {/* =====================
        MINIVEL STATEMENT
    ====================== */}
   {/* =====================
    MINIVEL STATEMENT
====================== */}
<ScrollReveal delay={0.1}>
  <div
    style={{
      marginTop: "40px",
        padding: "26px 30px",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,.10)",
        background: "rgba(255,255,255,.035)",
      }}
    >
      <p
        style={{
          margin: 0,
          maxWidth: "980px",
          fontSize: "16px",
          lineHeight: "1.8",
          fontWeight: 600,
          color: "#ffffff",
        }}
      >
        For Minivel, the goal is not to automate judgement. It is to give
        recruiters better information so they can make better-informed
        decisions.
      </p>
    </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 05 — HOW MINIVEL USES INTELLIGENCE
========================================= */}
<section className="document-section">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[860px]">
        <p className="section-label">
          How Minivel Uses Intelligence
        </p>

        <h2 className="document-heading">
          Better information helps us work faster.
          <span className="mt-2 block text-slate-500">
            Better understanding helps us hire smarter.
          </span>
        </h2>

        <p className="document-text">
          At Minivel, technology supports the recruitment process by helping
          teams work through information more efficiently. Recruiters then bring
          the context needed to understand the role, the candidate and whether
          the two genuinely fit together.
        </p>
      </div>
    </ScrollReveal>


    {/* Main cards */}
    <div className="mt-14 grid items-stretch gap-7 md:grid-cols-2">

      {/* Card 1 */}
      <ScrollReveal delay={0} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            Understand the Requirement
          </p>

          <h3 className="mt-5 text-[22px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Start with what the business actually needs.
          </h3>

          <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
            Recruiters look beyond the job title to understand responsibilities,
            priorities, expected skills and what success should look like in the
            role.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 2 */}
      <ScrollReveal delay={0.1} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            Find Relevant Talent
          </p>

          <h3 className="mt-5 text-[22px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Bring stronger profiles into focus sooner.
          </h3>

          <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
            Technology can support search and comparison, helping recruiters
            spend less time sorting through noise and more time reviewing
            relevant candidates.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 3 */}
      <ScrollReveal delay={0.2} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            Look Beyond Keywords
          </p>

          <h3 className="mt-5 text-[22px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Understand the person behind the profile.
          </h3>

          <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
            Experience, motivation, communication and expectations all matter.
            That is why recruiter conversations remain an important part of the
            Minivel process.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 4 */}
      <ScrollReveal delay={0.3} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            Connect the Right Fit
          </p>

          <h3 className="mt-5 text-[22px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Bring the opportunity and the candidate together.
          </h3>

          <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
            The final value comes from understanding whether the opportunity
            makes sense for the organisation and for the person considering the
            move.
          </p>
        </article>
      </ScrollReveal>

    </div>


    {/* Closing */}
    <ScrollReveal delay={0.1}>
      <div className="mt-12 max-w-[800px]">
        <p className="text-[17px] font-medium leading-[1.85] text-[#172b4d]">
          For Minivel, intelligence is not only about technology. It is the
          combination of better information, recruiter experience and meaningful
          conversations that helps create stronger hiring decisions.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 06 — THE MINIVEL HIRING PERSPECTIVE
========================================= */}
<section className="document-section document-section--soft">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[860px]">
        <p className="section-label">
          The Minivel Hiring Perspective
        </p>

        <h2 className="document-heading">
          Good recruitment is not just about finding people.
          <span className="mt-2 block text-slate-500">
            It is about understanding the right fit.
          </span>
        </h2>

        <p className="document-text">
          Minivel combines recruitment experience with technology-enabled
          processes to help businesses work through hiring requirements more
          efficiently while keeping the candidate experience and human judgement
          at the centre of the process.
        </p>
      </div>
    </ScrollReveal>


    {/* Perspective points */}
    <div className="mt-16 grid items-stretch gap-7 md:grid-cols-3">

      {/* Card 1 */}
      <ScrollReveal delay={0} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            For Businesses
          </p>

          <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Understand the requirement clearly.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
            Better hiring starts with understanding the role, the business need
            and the expectations behind the requirement.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 2 */}
      <ScrollReveal delay={0.12} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            For Candidates
          </p>

          <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Understand the opportunity honestly.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
            Candidates need more than a matching job title. They need context,
            expectations and a clear view of whether the opportunity suits them.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 3 */}
      <ScrollReveal delay={0.24} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            For Better Hiring
          </p>

          <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Bring both sides together with context.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
            The strongest hiring decisions happen when business requirements and
            candidate expectations are understood before the connection moves
            forward.
          </p>
        </article>
      </ScrollReveal>

    </div>


    {/* Final statement */}
    <ScrollReveal delay={0.1}>
      <div className="mt-14 max-w-[820px]">
        <p className="text-[18px] font-medium leading-[1.85] text-[#172b4d]">
          Technology can make recruitment smarter and faster. Minivel&apos;s role
          is to make sure the process still feels informed, relevant and human.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>
{/* ========================================
    FINAL PAGE NAVIGATION
========================================= */}
<section
  style={{
    background: "#ffffff",
    borderTop: "1px solid #e2e8f0",
  }}
>
  <div
    className="page-container"
    style={{
      paddingTop: "72px",
      paddingBottom: "72px",
    }}
  >
    {/* Label */}
    <p
      style={{
        margin: 0,
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "#3b82f6",
      }}
    >
      Continue Exploring
    </p>

    {/* Main content */}
    <div
      style={{
        marginTop: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "40px",
        alignItems: "end",
      }}
    >
      {/* Left */}
      <div style={{ maxWidth: "720px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "42px",
            lineHeight: "1.2",
            letterSpacing: "-0.035em",
            fontWeight: 650,
            color: "#172b4d",
          }}
        >
          Intelligence helps us understand.

          <span
            style={{
              display: "block",
              marginTop: "10px",
              color: "#5fbe3e",
            }}
          >
            The Minivel advantage is how we use it.
          </span>
        </h2>

        <p
          style={{
            margin: "24px 0 0",
            maxWidth: "650px",
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#64748b",
          }}
        >
          Continue to the next part of the Minivel experience and explore how
          recruitment expertise, technology and human understanding come
          together across the hiring journey.
        </p>
      </div>


      {/* Next page button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link
          to="/minivel-advantage"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "360px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "24px 26px",
            borderRadius: "18px",
            background: "#172b4d",
            color: "#ffffff",
            textDecoration: "none",
            boxShadow: "0 14px 35px rgba(23,43,77,0.14)",
            transition:
              "transform .3s ease, box-shadow .3s ease, background .3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.background = "#213a63";
            e.currentTarget.style.boxShadow =
              "0 20px 45px rgba(23,43,77,0.20)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "#172b4d";
            e.currentTarget.style.boxShadow =
              "0 14px 35px rgba(23,43,77,0.14)";
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#94a3b8",
              }}
            >
              Next
            </p>

            <p
              style={{
                margin: "7px 0 0",
                fontSize: "17px",
                lineHeight: "1.4",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              The Minivel Advantage
            </p>
          </div>

          <span
            style={{
              flexShrink: 0,
              fontSize: "22px",
              color: "#5fbe3e",
            }}
          >
            →
          </span>
        </Link>
      </div>
    </div>


    {/* Bottom divider + back */}
    <div
      style={{
        marginTop: "48px",
        paddingTop: "22px",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <Link
        to="/experience"
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#64748b",
          textDecoration: "none",
        }}
      >
        ← Back to Talent Intelligence
      </Link>
    </div>

  </div>
</section>
    </main>
  );
}

export default HumanIntelligencePage;