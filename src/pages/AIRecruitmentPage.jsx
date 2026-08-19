import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function AIRecruitmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#172b4d]">

      {/* ========================================
          DOCUMENT HEADER
      ========================================= */}
      <header className="border-b border-slate-200">
        <div className="page-container">
          <div className="flex h-[72px] items-center justify-between">

            <Link
              to="/"
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
          DOCUMENT HERO
      ========================================= */}
      <section className="bg-white">
        <div className="page-container">
          <div className="py-[96px] md:py-[112px]">

            <div className="max-w-[900px]">

              {/* Label */}
              <p className="section-label">
                How AI Is Changing Hiring
              </p>


              {/* Main heading */}
              <h1
                className="
                  mt-7
                  max-w-[880px]
                  text-[42px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.04em]
                  text-[#172b4d]
                  sm:text-[50px]
                  md:text-[58px]
                "
              >
                Recruitment is evolving.

                <span className="mt-2 block text-[#5fbe3e]">
                  The human purpose remains.
                </span>
              </h1>


              {/* Description */}
              <p
                className="
                  mt-10
                  max-w-[740px]
                  text-[17px]
                  leading-[1.9]
                  text-slate-600
                  sm:text-[18px]
                "
              >
                Technology has changed how recruiters discover talent,
                organise candidate information and work through large volumes
                of profiles. AI is taking that progress further — helping
                teams find relevant signals sooner without losing sight of the
                people behind the data.
              </p>


              {/* Secondary statement */}
              <p
                className="
                  mt-6
                  max-w-[700px]
                  text-[15px]
                  leading-[1.9]
                  text-slate-500
                  sm:text-[16px]
                "
              >
                For Minivel, the opportunity is not to remove the recruiter
                from recruitment. It is to give recruiters better tools,
                clearer information and more time for the conversations that
                actually shape a hiring decision.
              </p>


              {/* Brand accent */}
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

      {/* ========================================
    SECTION 01 — THE SHIFT
========================================= */}
<section className="document-section bg-[#F1F5F9]">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
    <div className="max-w-[820px]">
      <p className="section-label">
        The Shift
      </p>

      <h2 className="document-heading">
        Recruitment has changed.
        <span className="mt-2 block text-slate-500">
          The purpose hasn&apos;t.
        </span>
      </h2>

      <p className="document-text">
        Hiring has always started with understanding what a business needs and
        finding people who could be right for the opportunity. What has changed
        is how recruiters search, organise and work through candidate
        information.
      </p>

      <p className="document-text !mt-5">
        Digital platforms made talent easier to discover. AI is the next step —
        helping teams make sense of more information and bring relevant
        candidates into focus sooner.
      </p>
    </div>
    </ScrollReveal>


    {/* Evolution cards */}
<div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">

  {/* Card 1 */}
  <ScrollReveal delay={0} className="h-full">
    <article className="premium-card h-full">
      <p className="premium-card-label">
        Earlier
      </p>

      <h3 className="premium-card-title">
        Manual Search
      </h3>

      <p className="premium-card-text">
        Recruiters reviewed profiles individually, compared experience
        manually and built shortlists through one-by-one evaluation.
      </p>
    </article>
  </ScrollReveal>


  {/* Card 2 */}
  <ScrollReveal delay={0.12} className="h-full">
    <article className="premium-card h-full">
      <p className="premium-card-label">
        The Transition
      </p>

      <h3 className="premium-card-title">
        Digital Recruitment
      </h3>

      <p className="premium-card-text">
        Job portals, searchable databases and applicant systems made
        candidate discovery faster and gave recruiters better ways to
        organise the hiring process.
      </p>
    </article>
  </ScrollReveal>


  {/* Card 3 */}
  <ScrollReveal delay={0.24} className="h-full">
    <article className="premium-card h-full">
      <p
        className="premium-card-label"
        style={{ color: "#5fbe3e" }}
      >
        Today
      </p>

      <h3 className="premium-card-title">
        AI-Assisted Recruitment
      </h3>

      <p className="premium-card-text">
        AI can help teams organise candidate information, identify relevant
        signals and focus recruiter attention on stronger potential matches.
      </p>
    </article>
  </ScrollReveal>

</div>


    {/* Closing statement */}
    <ScrollReveal delay={0.1}>
    <div className="mt-14 max-w-[760px]">
      <p className="text-[17px] font-medium leading-[1.85] text-[#172b4d]">
        The tools have become smarter, but the responsibility remains the same:
        understand the role, understand the person and make the right
        connection.
      </p>
    </div>
    </ScrollReveal>

  </div>
</section>
{/* ========================================
    SECTION 02 — WHERE AI SUPPORTS RECRUITMENT
========================================= */}
<section className="document-section">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
    <div className="max-w-[820px]">
      <p className="section-label">
        Where AI Supports Recruitment
      </p>

      <h2 className="document-heading">
        Better tools should make the process clearer,
        not more complicated.
      </h2>

      <p className="document-text">
        AI is most useful when it helps recruiters work through repetitive
        information more efficiently. That can make candidate discovery,
        comparison and prioritisation more focused — while leaving the human
        parts of hiring where they belong.
      </p>
    </div>
    </ScrollReveal>


    {/* Cards */}
    <div className="mt-16 grid items-stretch gap-6 md:grid-cols-2">

     <ScrollReveal delay={0} className="h-full">
  <article className="premium-card h-full">
        <p className="premium-card-label">
          Candidate Discovery
        </p>

        <h3 className="premium-card-title">
          Finding relevant profiles sooner.
        </h3>

        <p className="premium-card-text">
          When recruiters are working with large candidate pools, AI can help
          surface profiles that appear more closely aligned with the role being
          worked on.
        </p>
      </article>
        
</ScrollReveal>


      <ScrollReveal delay={0.12} className="h-full">
  <article className="premium-card h-full">
        <p className="premium-card-label">
          Role & Skill Matching
        </p>

        <h3 className="premium-card-title">
          Looking at relevance in a more structured way.
        </h3>

        <p className="premium-card-text">
          Skills, experience and role requirements can be compared more
          consistently, giving recruiters a clearer starting point for review.
        </p>
      </article>
        
</ScrollReveal>


      <ScrollReveal delay={0.24} className="h-full">
  <article className="premium-card h-full">
        <p className="premium-card-label">
          Profile Organisation
        </p>

        <h3 className="premium-card-title">
          Bringing the important information into focus.
        </h3>

        <p className="premium-card-text">
          Candidate information can be organised more clearly so recruiters
          spend less time searching through scattered details and more time
          understanding what matters.
        </p>
      </article>
        
</ScrollReveal>


      <ScrollReveal delay={0.36} className="h-full">
  <article className="premium-card h-full">
        <p className="premium-card-label">
          Recruiter Focus
        </p>

        <h3 className="premium-card-title">
          More time for conversations and judgement.
        </h3>

        <p className="premium-card-text">
          Reducing repetitive sorting gives recruiters more room to speak with
          candidates, understand expectations and evaluate the wider context
          around the opportunity.
        </p>
      </article>
        
</ScrollReveal>

    </div>


    {/* Closing line */}
<ScrollReveal delay={0.1}>
  <div className="mt-14 max-w-[760px]">
    <p className="text-[17px] font-medium leading-[1.85] text-[#172b4d]">
      The value of AI is not in replacing the recruiter. It is in helping the
      recruiter reach the right conversations with better information.
    </p>
  </div>
</ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 03 — WHAT AI DOES NOT REPLACE
========================================= */}
<section className="document-section bg-[#EEF4FA]">
  <div className="page-container">

   {/* Top split */}
<ScrollReveal>
  <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
      {/* Left */}
      <div className="min-w-0 max-w-[760px]">
        <p className="section-label">
          What AI Does Not Replace
        </p>

        <h2
          className="
            mt-6
            max-w-[720px]
            text-[34px]
            font-semibold
            leading-[1.28]
            tracking-[-0.03em]
            text-[#172b4d]
            sm:text-[40px]
            lg:text-[44px]
          "
        >
          <span className="block">
            A profile can show experience.
          </span>

          <span className="mt-3 block pb-1 text-slate-500">
            It cannot explain the whole person.
          </span>
        </h2>
      </div>
      

      {/* Right */}
      <div className="min-w-0 max-w-[560px] lg:pt-2">
        <p
          className="
            text-[16px]
            leading-[1.9]
            text-slate-600
          "
        >
          Skills, qualifications and work history matter, but they are only
          part of a hiring decision. A recruiter also needs to understand why
          someone is considering a move, what they expect from the next role
          and whether the opportunity makes sense for them.
        </p>

        <p
          className="
            mt-6
            text-[15px]
            leading-[1.9]
            text-slate-500
          "
        >
          That context usually appears through conversation — not through
          keywords, scores or profile data.
        </p>
      </div>

    </div>
    </ScrollReveal>


    {/* Cards */}
    <div className="mt-16 grid gap-7 md:grid-cols-3">

      {/* Motivation */}
<ScrollReveal delay={0} className="h-full">
  <article className="premium-card min-w-0 h-full">
        <p className="premium-card-label">
          Motivation
        </p>

        <h3
          className="
            mt-6
            text-[20px]
            font-semibold
            leading-[1.4]
            tracking-[-0.02em]
            text-[#172b4d]
          "
        >
          Why is the candidate considering a move?
        </h3>

        <p
          className="
            mt-5
            break-words
            text-[14px]
            leading-[1.8]
            text-slate-600
          "
        >
          Understanding what someone wants next helps recruiters judge whether
          the opportunity genuinely fits their career direction.
        </p>
      </article>
            
</ScrollReveal>


      {/* Communication */}
<ScrollReveal delay={0.12} className="h-full">
  <article className="premium-card min-w-0 h-full">
        <p className="premium-card-label">
          Communication
        </p>

        <h3
          className="
            mt-6
            text-[20px]
            font-semibold
            leading-[1.4]
            tracking-[-0.02em]
            text-[#172b4d]
          "
        >
          How does the person explain their experience?
        </h3>

        <p
          className="
            mt-5
            break-words
            text-[14px]
            leading-[1.8]
            text-slate-600
          "
        >
          Conversations reveal how candidates communicate, think through
          decisions and describe the work they have actually done.
        </p>
      </article>
            
</ScrollReveal>


     {/* Context */}
<ScrollReveal delay={0.24} className="h-full">
  <article className="premium-card min-w-0 h-full">
        <p
          className="premium-card-label"
          style={{ color: "#5fbe3e" }}
        >
          Context
        </p>

        <h3
          className="
            mt-6
            text-[20px]
            font-semibold
            leading-[1.4]
            tracking-[-0.02em]
            text-[#172b4d]
          "
        >
          What is the story behind the profile?
        </h3>

        <p
          className="
            mt-5
            break-words
            text-[14px]
            leading-[1.8]
            text-slate-600
          "
        >
          Recruiters can look beyond a list of skills and understand the
          circumstances, expectations and choices behind a candidate&apos;s
          career.
        </p>
      </article>
</ScrollReveal>
    </div>


    {/* Closing statement */}
    <ScrollReveal delay={0.1}>
    <div className="mt-14 max-w-[780px]">
      <p
        className="
          text-[17px]
          font-medium
          leading-[1.85]
          text-[#172b4d]
        "
      >
        AI can support the search and make information easier to work with.
        The recruiter still brings the conversation that turns information
        into understanding.
      </p>
    </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 04 — THE MINIVEL APPROACH
========================================= */}
<section className="document-section bg-[#F3F8F1]">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[820px]">
        <p className="section-label">
          The Minivel Approach
        </p>

        <h2 className="document-heading">
          Technology can organise information.
          <span className="mt-2 block text-slate-500">
            Experience gives it direction.
          </span>
        </h2>

        <p className="document-text">
          For Minivel, recruitment is not only about finding a profile that
          matches a list of skills. It is about understanding what the business
          actually needs, what the candidate is looking for and whether the
          opportunity makes sense for both sides.
        </p>
      </div>
    </ScrollReveal>


    {/* Approach cards */}
    <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">

      {/* Step 01 */}
      <ScrollReveal delay={0} className="h-full">
        <article className="premium-card h-full">
          <p className="premium-card-label">
            Step 01
          </p>

          <h3 className="premium-card-title">
            Understand the Role
          </h3>

          <p className="premium-card-text">
            Start with the business need, the responsibilities behind the role
            and what success should actually look like.
          </p>
        </article>
      </ScrollReveal>


      {/* Step 02 */}
      <ScrollReveal delay={0.12} className="h-full">
        <article className="premium-card h-full">
          <p className="premium-card-label">
            Step 02
          </p>

          <h3 className="premium-card-title">
            Understand the Person
          </h3>

          <p className="premium-card-text">
            Look beyond experience to understand motivation, expectations and
            what the candidate wants from the next opportunity.
          </p>
        </article>
      </ScrollReveal>


      {/* Step 03 */}
      <ScrollReveal delay={0.24} className="h-full">
        <article className="premium-card h-full">
          <p
            className="premium-card-label"
            style={{ color: "#5fbe3e" }}
          >
            Step 03
          </p>

          <h3 className="premium-card-title">
            Connect the Two
          </h3>

          <p className="premium-card-text">
            Bring the opportunity and the candidate together where the fit is
            meaningful for both the organisation and the person.
          </p>
        </article>
      </ScrollReveal>

    </div>


    {/* Closing statement */}
    <ScrollReveal delay={0.1}>
      <div className="mt-14 max-w-[760px]">
        <p className="text-[17px] font-medium leading-[1.85] text-[#172b4d]">
          AI can support the process with better information. Recruiter
          experience is what turns that information into a decision.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 05 — AI × HUMAN INTELLIGENCE
========================================= */}
<section className="bg-[#172b4d]">
  <div className="page-container py-24 md:py-28">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[820px]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-green-400">
          AI × Human Intelligence
        </p>

        <h2
          className="
            mt-6
            max-w-[780px]
            text-[34px]
            font-semibold
            leading-[1.22]
            tracking-[-0.03em]
            text-white
            sm:text-[40px]
            lg:text-[44px]
          "
        >
          AI can help us see more.

          <span className="mt-3 block text-green-400">
            People help us understand more.
          </span>
        </h2>

        <p
          className="
            mt-9
            max-w-[720px]
            text-[16px]
            leading-[1.9]
            text-slate-300
            sm:text-[17px]
          "
        >
          Technology can make recruitment information easier to work with.
          Recruiters bring the context that turns that information into a
          meaningful hiring decision.
        </p>
      </div>
    </ScrollReveal>


    {/* Comparison area */}
    <div className="mt-16 border-y border-white/10">

      {/* AI row */}
      <ScrollReveal>
        <div
          className="
            grid
            gap-8
            py-10
            md:grid-cols-[0.42fr_1fr]
            md:items-start
            md:gap-16
          "
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              AI Supports
            </p>

            <h3 className="mt-4 text-[24px] font-semibold leading-[1.3] text-white">
              Discovery,
              <span className="block text-slate-300">
                comparison and organisation.
              </span>
            </h3>
          </div>

          <div className="max-w-[650px]">
            <p className="text-[16px] leading-[1.9] text-slate-200">
              AI can help recruitment teams work through larger candidate pools,
              organise profile information and identify patterns that deserve
              closer attention.
            </p>

            <p className="mt-5 text-[15px] leading-[1.85] text-slate-400">
              The value is speed and structure — helping recruiters reach the
              right profiles with less time spent sorting through noise.
            </p>
          </div>
        </div>
      </ScrollReveal>


      {/* Divider */}
      <div className="h-px bg-white/10" />


      {/* Human row */}
      <ScrollReveal delay={0.1}>
        <div
          className="
            grid
            gap-8
            py-10
            md:grid-cols-[0.42fr_1fr]
            md:items-start
            md:gap-16
          "
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-300">
              Recruiters Bring
            </p>

            <h3 className="mt-4 text-[24px] font-semibold leading-[1.3] text-white">
              Conversation,
              <span className="block text-slate-300">
                context and judgement.
              </span>
            </h3>
          </div>

          <div className="max-w-[650px]">
            <p className="text-[16px] leading-[1.9] text-slate-200">
              Recruiters understand why someone is considering a move, what they
              expect from the next opportunity and how the role fits into their
              career.
            </p>

            <p className="mt-5 text-[15px] leading-[1.85] text-slate-400">
              That understanding comes from communication, experience and the
              ability to interpret the person behind the profile.
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>


    {/* Final statement */}
    <ScrollReveal delay={0.1}>
      <div className="mt-14 max-w-[820px]">
        <p className="text-[18px] font-medium leading-[1.85] text-white">
          Better hiring is not about choosing between AI and recruiters.
          It is about using technology where it helps and human judgement where
          it matters.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    CONTINUE EXPLORING
========================================= */}
<section
  style={{
    background: "#F8FAFC",
    padding: "96px 0",
  }}
>
  <div className="page-container">
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "24px",
        background: "#ffffff",
        overflow: "hidden",
        boxShadow: "0 12px 36px rgba(23, 43, 77, 0.06)",
      }}
    >
      {/* Main area */}
      <div
        style={{
          padding: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Content */}
        <div
          style={{
            maxWidth: "700px",
            flex: "1 1 560px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              lineHeight: "1.4",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#3b82f6",
            }}
          >
            Continue Exploring
          </p>

          <h2
            style={{
              margin: "24px 0 0",
              fontSize: "40px",
              lineHeight: "1.2",
              letterSpacing: "-0.03em",
              fontWeight: 650,
              color: "#172b4d",
            }}
          >
            AI can help find the signal.
          </h2>

          <h3
            style={{
              margin: "10px 0 0",
              fontSize: "40px",
              lineHeight: "1.2",
              letterSpacing: "-0.03em",
              fontWeight: 650,
              color: "#5fbe3e",
            }}
          >
            Human intelligence gives it meaning.
          </h3>

          <p
            style={{
              margin: "28px 0 0",
              maxWidth: "650px",
              fontSize: "16px",
              lineHeight: "1.85",
              color: "#64748b",
            }}
          >
            Continue to the next part of the Minivel Talent Intelligence
            experience and see how technology and recruiter judgement work
            together throughout the hiring process.
          </p>
        </div>

        {/* Forward CTA */}
        <Link
          to="/human-intelligence"
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            minWidth: "245px",
            minHeight: "54px",
            padding: "0 22px",
            borderRadius: "8px",
            background: "#172b4d",
            color: "#ffffff",
            fontSize: "14px",
            lineHeight: "1",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 10px 24px rgba(23, 43, 77, 0.14)",
            transition:
              "transform .3s ease, background .3s ease, box-shadow .3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.background = "#1f3a61";
            e.currentTarget.style.boxShadow =
              "0 18px 38px rgba(23, 43, 77, 0.20)";

            const arrow =
              e.currentTarget.querySelector(".continue-arrow");

            if (arrow) {
              arrow.style.transform = "translateX(4px)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "#172b4d";
            e.currentTarget.style.boxShadow =
              "0 10px 24px rgba(23, 43, 77, 0.14)";

            const arrow =
              e.currentTarget.querySelector(".continue-arrow");

            if (arrow) {
              arrow.style.transform = "translateX(0)";
            }
          }}
        >
          <span
            style={{
              color: "#ffffff",
              whiteSpace: "nowrap",
            }}
          >
            AI × Human Intelligence
          </span>

          <span
            className="continue-arrow"
            style={{
              marginLeft: "18px",
              color: "#ffffff",
              fontSize: "20px",
              display: "inline-block",
              transition: "transform .3s ease",
            }}
          >
            →
          </span>
        </Link>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          padding: "22px 56px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* Back link */}
        <Link
          to="/experience"
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[13px]
            font-semibold
            text-slate-500
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

          Back to Talent Intelligence
        </Link>

        <p
          style={{
            margin: 0,
            color: "#94a3b8",
            fontSize: "10px",
            lineHeight: "1.5",
            fontWeight: 700,
            letterSpacing: "0.17em",
            textTransform: "uppercase",
          }}
        >
          Next · AI × Human Intelligence
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default AIRecruitmentPage;