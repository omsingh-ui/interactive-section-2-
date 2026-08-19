import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function MinivelAdvantagePage() {
  return (
    <main className="min-h-screen bg-white text-[#172b4d]">

      {/* ========================================
          HEADER
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
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
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
                brings together recruitment experience, business understanding
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
                to use better information, recruiter judgement and meaningful
                candidate conversations together.
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
            </ScrollReveal>
          </div>
      
        </div>
      </section>


     {/* ========================================
    SECTION 01 — WHAT MINIVEL BRINGS
========================================= */}
<section className="document-section bg-[#F1F5F9]">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[840px]">

        <p className="section-label">
          What Minivel Brings to the Process
        </p>

        <h2 className="document-heading">
          Better tools help us move faster.

          <span className="mt-2 block text-slate-500">
            Experience helps us move in the right direction.
          </span>
        </h2>

        <p className="document-text">
          Minivel&apos;s strength comes from combining recruitment
          experience with a practical understanding of business
          requirements, candidate expectations and the realities behind
          each hiring decision.
        </p>

      </div>
    </ScrollReveal>


    {/* Cards */}
    <div className="mt-14 grid items-stretch gap-7 md:grid-cols-3">

      {/* Card 1 */}
      <ScrollReveal delay={0} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            Recruitment Experience
          </p>

          <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Understanding what a requirement really means.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
            Experience across different roles and hiring needs helps
            recruiters look beyond the job title and understand what the
            business actually needs.
          </p>
        </article>
      </ScrollReveal>


      {/* Card 2 */}
      <ScrollReveal delay={0.12} className="h-full">
        <article className="premium-card min-w-0 h-full">
          <p className="premium-card-label">
            Candidate Understanding
          </p>

          <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Looking beyond skills and experience.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
            Recruiter conversations help Minivel understand motivation,
            expectations and whether the opportunity fits the person behind
            the profile.
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
            Technology Support
          </p>

          <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#172b4d]">
            Making information easier to work with.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">
            Modern hiring tools can help organise candidate information,
            support search and make the early stages of recruitment more
            efficient.
          </p>
        </article>
      </ScrollReveal>

    </div>


    {/* Closing statement */}
    <ScrollReveal delay={0.1}>
      <div className="mt-12 max-w-[800px]">
        <p className="text-[17px] font-medium leading-[1.85] text-[#172b4d]">
          The Minivel advantage comes from using all three together —
          experience to understand the requirement, conversations to
          understand the person and technology to support the process.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 02 — WHY BUSINESSES WORK WITH MINIVEL
========================================= */}
<section
  style={{
    background: "#ffffff",
  }}
>
  <div
    className="page-container"
    style={{
      paddingTop: "100px",
      paddingBottom: "100px",
    }}
  >

    <div
      className="minivel-business-grid"
      style={{
        display: "grid",
        gridTemplateColumns:
          "minmax(0, 0.9fr) minmax(0, 1.1fr)",
        gap: "72px",
        alignItems: "center",
      }}
    >

      {/* LEFT */}
      <ScrollReveal>
        <div
          style={{
            minWidth: 0,
            maxWidth: "600px",
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
              color: "#3478f6",
            }}
          >
            Why Businesses Work With Minivel
          </p>


          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              marginTop: "18px",
            }}
          >
            <span
              style={{
                width: "36px",
                height: "3px",
                borderRadius: "999px",
                background: "#5fbe3e",
              }}
            />

            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#5fbe3e",
              }}
            />
          </div>


          <h2
            style={{
              margin: "32px 0 0",
              maxWidth: "600px",
              fontSize: "46px",
              lineHeight: "1.17",
              letterSpacing: "-0.04em",
              fontWeight: 650,
              color: "#172b4d",
            }}
          >
            Hiring support should make the process clearer.

            <span
              style={{
                display: "block",
                marginTop: "10px",
                color: "#64748b",
              }}
            >
              Not more complicated.
            </span>
          </h2>


          <p
            style={{
              margin: "30px 0 0",
              maxWidth: "560px",
              fontSize: "16px",
              lineHeight: "1.9",
              color: "#64748b",
            }}
          >
            Businesses come to recruitment partners because finding the
            right person takes time, context and consistent attention.
            Minivel helps bring structure to that process while keeping the
            actual hiring need at the centre.
          </p>


          {/* Callout */}
          <div
            style={{
              marginTop: "36px",
              maxWidth: "580px",
              padding: "28px",
              borderRadius: "20px",
              border: "1px solid #e0f0dc",
              background:
                "linear-gradient(135deg,#f3faf2 0%,#fbfdfb 100%)",
              boxShadow:
                "0 10px 30px rgba(23,43,77,0.05)",
            }}
          >
            <div
              style={{
                borderLeft: "3px solid #5fbe3e",
                paddingLeft: "22px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.8",
                  fontWeight: 600,
                  color: "#172b4d",
                }}
              >
                The aim is simple: understand the requirement properly,
                find relevant people and help both sides make a
                better-informed decision.
              </p>
            </div>
          </div>

        </div>
      </ScrollReveal>


      {/* RIGHT */}
      <div
        style={{
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >

        <ScrollReveal delay={0}>
          <ReasonCard
            number="01"
            title="Requirements understood before search begins."
            text="Understanding responsibilities, priorities and expectations gives recruiters a clearer picture of who the business actually needs."
            type="blue"
          />
        </ScrollReveal>


        <ScrollReveal delay={0.1}>
          <ReasonCard
            number="02"
            title="More focus on relevant candidates."
            text="Search tools and recruiter experience work together to reduce unnecessary noise and keep attention on profiles worth exploring."
            type="blue"
          />
        </ScrollReveal>


        <ScrollReveal delay={0.2}>
          <ReasonCard
            number="03"
            title="Candidate conversations stay part of the process."
            text="A profile can show experience. Conversation helps reveal motivation, expectations and whether the opportunity makes sense for the candidate."
            type="green"
          />
        </ScrollReveal>


        <ScrollReveal delay={0.3}>
          <ReasonCard
            number="04"
            title="Better context before the hiring decision."
            text="Minivel helps bring the business requirement and candidate perspective together so decisions are made with more than a CV in front of them."
            type="green"
          />
        </ScrollReveal>

      </div>

    </div>
  </div>


  {/* Responsive */}
  <style>{`
    @media (max-width: 950px) {
      .minivel-business-grid {
        grid-template-columns: 1fr !important;
        gap: 60px !important;
      }
    }

    @media (max-width: 600px) {
      .minivel-business-grid h2 {
        font-size: 36px !important;
      }
    }
  `}</style>
</section>

{/* ========================================
    SECTION 03 — HOW MINIVEL WORKS
========================================= */}
<section className="document-section bg-[#EEF4FA]">
  <div className="page-container">

    {/* Intro */}
    <ScrollReveal>
      <div className="max-w-[860px]">
        <p className="section-label">
          How Minivel Works
        </p>

        <h2 className="document-heading">
          A stronger process starts with understanding.
          <span className="mt-2 block text-slate-500">
            Then technology and recruiter judgement do their part.
          </span>
        </h2>

        <p className="document-text">
          Minivel&apos;s approach is built around clarity at every stage —
          understanding the requirement, identifying relevant talent, speaking
          with candidates and keeping both sides informed before a decision is
          made.
        </p>
      </div>
    </ScrollReveal>


    {/* ========================================
        PREMIUM PROCESS TIMELINE
    ========================================= */}
    <div
      style={{
        marginTop: "64px",
        position: "relative",
        maxWidth: "980px",
      }}
    >

      {/* Vertical line — keep static */}
      <div
        style={{
          position: "absolute",
          left: "31px",
          top: "42px",
          bottom: "42px",
          width: "2px",
          background:
            "linear-gradient(to bottom, #3b82f6 0%, #27b5e8 50%, #5fbe3e 100%)",
          opacity: 0.35,
        }}
      />


      {/* STEP 01 */}
      <ScrollReveal delay={0}>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "64px minmax(0, 1fr)",
            gap: "26px",
            paddingBottom: "34px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#eff6ff",
              border: "1px solid #dbeafe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#3b82f6",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(59,130,246,0.10)",
            }}
          >
            01
          </div>

          <div
            style={{
              minWidth: 0,
              padding: "6px 0 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#3b82f6",
              }}
            >
              Understand the Requirement
            </p>

            <h3
              style={{
                margin: "10px 0 0",
                fontSize: "22px",
                lineHeight: "1.4",
                fontWeight: 650,
                color: "#172b4d",
              }}
            >
              Start with what the business actually needs.
            </h3>

            <p
              style={{
                margin: "12px 0 0",
                maxWidth: "720px",
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#64748b",
              }}
            >
              Before search begins, recruiters work to understand the role,
              priorities and expectations behind the requirement.
            </p>
          </div>
        </div>
      </ScrollReveal>


      {/* STEP 02 */}
      <ScrollReveal delay={0.1}>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "64px minmax(0, 1fr)",
            gap: "26px",
            paddingBottom: "34px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#effaff",
              border: "1px solid #cffafe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#0891b2",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(6,182,212,0.10)",
            }}
          >
            02
          </div>

          <div
            style={{
              minWidth: 0,
              padding: "6px 0 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#0891b2",
              }}
            >
              Bring Relevant Talent Into Focus
            </p>

            <h3
              style={{
                margin: "10px 0 0",
                fontSize: "22px",
                lineHeight: "1.4",
                fontWeight: 650,
                color: "#172b4d",
              }}
            >
              Reduce noise and focus on profiles worth exploring.
            </h3>

            <p
              style={{
                margin: "12px 0 0",
                maxWidth: "720px",
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#64748b",
              }}
            >
              Technology supports search and organisation, while recruiter
              experience helps narrow attention to the candidates that make sense.
            </p>
          </div>
        </div>
      </ScrollReveal>


      {/* STEP 03 */}
      <ScrollReveal delay={0.2}>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "64px minmax(0, 1fr)",
            gap: "26px",
            paddingBottom: "34px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#f0fdf4",
              border: "1px solid #dcfce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#5fbe3e",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(95,190,62,0.10)",
            }}
          >
            03
          </div>

          <div
            style={{
              minWidth: 0,
              padding: "6px 0 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#5fbe3e",
              }}
            >
              Understand the Candidate
            </p>

            <h3
              style={{
                margin: "10px 0 0",
                fontSize: "22px",
                lineHeight: "1.4",
                fontWeight: 650,
                color: "#172b4d",
              }}
            >
              Look beyond the profile and understand the person.
            </h3>

            <p
              style={{
                margin: "12px 0 0",
                maxWidth: "720px",
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#64748b",
              }}
            >
              Conversations help reveal motivation, expectations and whether the
              opportunity fits what the candidate is looking for next.
            </p>
          </div>
        </div>
      </ScrollReveal>


      {/* STEP 04 */}
      <ScrollReveal delay={0.3}>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "64px minmax(0, 1fr)",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#f0fdf4",
              border: "1px solid #dcfce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#4ca83d",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 8px 20px rgba(95,190,62,0.10)",
            }}
          >
            04
          </div>

          <div
            style={{
              minWidth: 0,
              padding: "6px 0 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#4ca83d",
              }}
            >
              Move Forward With Better Context
            </p>

            <h3
              style={{
                margin: "10px 0 0",
                fontSize: "22px",
                lineHeight: "1.4",
                fontWeight: 650,
                color: "#172b4d",
              }}
            >
              Make the decision with both sides understood.
            </h3>

            <p
              style={{
                margin: "12px 0 0",
                maxWidth: "720px",
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#64748b",
              }}
            >
              With the requirement and candidate perspective both clear, the hiring
              decision can move forward with better context.
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>


    {/* Closing */}
    <ScrollReveal delay={0.1}>
      <div className="mt-12 max-w-[800px]">
        <p className="text-[17px] font-medium leading-[1.85] text-[#172b4d]">
          The Minivel advantage is not one tool or one step. It is the way the
          whole process stays connected from requirement to conversation to
          decision.
        </p>
      </div>
    </ScrollReveal>

  </div>
</section>

{/* ========================================
    SECTION 04 — THE MINIVEL DIFFERENCE
========================================= */}
<section
  style={{
    background: "#132743",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Soft background glow */}
  <div
    style={{
      position: "absolute",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(95,190,62,0.08)",
      filter: "blur(90px)",
      right: "-120px",
      top: "-150px",
      pointerEvents: "none",
    }}
  />

  <div
    className="page-container"
    style={{
      position: "relative",
      zIndex: 2,
      paddingTop: "100px",
      paddingBottom: "100px",
    }}
  >
    {/* ==============================
        INTRO
    ============================== */}
<ScrollReveal>
  <div style={{ maxWidth: "850px" }}>
      <p
        style={{
          margin: 0,
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "1.5",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#78d65b",
        }}
      >
        The Minivel Difference
      </p>

      <h2
        style={{
          margin: "24px 0 0",
          maxWidth: "820px",
          fontSize: "44px",
          lineHeight: "1.18",
          letterSpacing: "-0.035em",
          fontWeight: 650,
          color: "#ffffff",
        }}
      >
        Technology supports the process.

        <span
          style={{
            display: "block",
            marginTop: "9px",
            color: "#9fb0c7",
          }}
        >
          People give it meaning.
        </span>
      </h2>

      <p
        style={{
          margin: "28px 0 0",
          maxWidth: "720px",
          fontSize: "16px",
          lineHeight: "1.9",
          color: "#b9c5d5",
        }}
      >
        Minivel brings technology, recruiter experience and human
        conversations into one connected hiring process. Each plays a
        different role, but the value comes from how they work together.
      </p>
    </div>
    </ScrollReveal>

    {/* ==============================
        THREE PILLARS
    ============================== */}
    <div
      className="minivel-difference-grid"
      style={{
        marginTop: "64px",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "22px",
      }}
    >
     {/* 01 */}
<ScrollReveal delay={0} className="h-full">
  <article
    className="minivel-dark-card"
        style={{
          minWidth: 0,
          padding: "32px",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.045)",
          transition:
            "transform .3s ease, background .3s ease, border-color .3s ease, box-shadow .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.background = "rgba(255,255,255,0.075)";
          e.currentTarget.style.borderColor = "rgba(96,165,250,0.35)";
          e.currentTarget.style.boxShadow =
            "0 20px 45px rgba(0,0,0,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.045)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(59,130,246,0.13)",
            color: "#7db3ff",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          01
        </div>

        <p
          style={{
            margin: "28px 0 0",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#78aef7",
          }}
        >
          Technology
        </p>

        <h3
          style={{
            margin: "12px 0 0",
            fontSize: "21px",
            lineHeight: "1.4",
            fontWeight: 650,
            color: "#ffffff",
          }}
        >
          Make information easier to work with.
        </h3>

        <p
          style={{
            margin: "15px 0 0",
            fontSize: "14px",
            lineHeight: "1.8",
            color: "#aebdce",
          }}
        >
          Better tools support search, organisation and the early work needed
          to bring relevant talent into focus.
        </p>
      </article>
      </ScrollReveal>

      {/* 02 */}
<ScrollReveal delay={0.12} className="h-full">
  <article
    className="minivel-dark-card"
        style={{
          minWidth: 0,
          padding: "32px",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.045)",
          transition:
            "transform .3s ease, background .3s ease, border-color .3s ease, box-shadow .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.background = "rgba(255,255,255,0.075)";
          e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)";
          e.currentTarget.style.boxShadow =
            "0 20px 45px rgba(0,0,0,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.045)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(34,211,238,0.11)",
            color: "#67d7e8",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          02
        </div>

        <p
          style={{
            margin: "28px 0 0",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#67d7e8",
          }}
        >
          Experience
        </p>

        <h3
          style={{
            margin: "12px 0 0",
            fontSize: "21px",
            lineHeight: "1.4",
            fontWeight: 650,
            color: "#ffffff",
          }}
        >
          Know what deserves closer attention.
        </h3>

        <p
          style={{
            margin: "15px 0 0",
            fontSize: "14px",
            lineHeight: "1.8",
            color: "#aebdce",
          }}
        >
          Recruiter judgement adds the context needed to understand
          requirements, profiles and the realities behind a hiring decision.
        </p>
      </article>
      </ScrollReveal>

     {/* 03 */}
<ScrollReveal delay={0.24} className="h-full">
  <article
    className="minivel-dark-card"
        style={{
          minWidth: 0,
          padding: "32px",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.045)",
          transition:
            "transform .3s ease, background .3s ease, border-color .3s ease, box-shadow .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.background = "rgba(255,255,255,0.075)";
          e.currentTarget.style.borderColor = "rgba(95,190,62,0.40)";
          e.currentTarget.style.boxShadow =
            "0 20px 45px rgba(0,0,0,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.045)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(95,190,62,0.13)",
            color: "#78d65b",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          03
        </div>

        <p
          style={{
            margin: "28px 0 0",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#78d65b",
          }}
        >
          Human Understanding
        </p>

        <h3
          style={{
            margin: "12px 0 0",
            fontSize: "21px",
            lineHeight: "1.4",
            fontWeight: 650,
            color: "#ffffff",
          }}
        >
          Understand the person behind the profile.
        </h3>

        <p
          style={{
            margin: "15px 0 0",
            fontSize: "14px",
            lineHeight: "1.8",
            color: "#aebdce",
          }}
        >
          Real conversations bring motivation, expectations and individual
          context into a process that cannot rely on data alone.
        </p>
      </article>
      </ScrollReveal>
    </div>
    
    {/* ==============================
    FINAL BRAND STATEMENT
============================== */}
<ScrollReveal delay={0.1}>
  <div
    style={{
      marginTop: "58px",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        maxWidth: "900px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "18px",
          lineHeight: "1.8",
          fontWeight: 500,
          color: "#ffffff",
        }}
      >
        The Minivel difference is not choosing between technology and people.
        It is using both where they add the most value.
      </p>
    </div>
      </ScrollReveal>
  </div>

  {/* Responsive */}
  <style>{`
    @media (max-width: 850px) {
      .minivel-difference-grid {
        grid-template-columns: 1fr !important;
      }
    }

    @media (max-width: 600px) {
      .minivel-dark-card {
        padding: 26px !important;
      }
    }
  `}</style>
</section>

{/* ========================================
    SECTION 05 — BUILT AROUND BETTER CONNECTIONS
========================================= */}
<section
  style={{
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f8fbff 48%, #f3f8fc 100%)",
  }}
>
  {/* Background glows */}
  <div
    style={{
      position: "absolute",
      top: "-120px",
      right: "-80px",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(59,130,246,0.08)",
      filter: "blur(100px)",
      pointerEvents: "none",
    }}
  />

  <div
    style={{
      position: "absolute",
      left: "-90px",
      bottom: "-130px",
      width: "340px",
      height: "340px",
      borderRadius: "50%",
      background: "rgba(95,190,62,0.07)",
      filter: "blur(100px)",
      pointerEvents: "none",
    }}
  />

  <div
    className="page-container"
    style={{
      position: "relative",
      zIndex: 2,
      paddingTop: "110px",
      paddingBottom: "110px",
    }}
  >
    
    {/* ========================================
    INTRO
========================================= */}
<ScrollReveal>
  <div style={{ maxWidth: "900px" }}>
      <p
        style={{
          margin: 0,
          fontSize: "12px",
          lineHeight: "1.5",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#3478f6",
        }}
      >
        Built Around Better Connections
      </p>

      <div
        style={{
          width: "72px",
          height: "3px",
          marginTop: "18px",
          borderRadius: "999px",
          background:
            "linear-gradient(90deg,#3478f6,#27b5e8,#5fbe3e)",
        }}
      />

      <h2
        style={{
          margin: "28px 0 0",
          maxWidth: "860px",
          fontSize: "48px",
          lineHeight: "1.17",
          letterSpacing: "-0.04em",
          fontWeight: 650,
          color: "#172b4d",
        }}
      >
        The process matters.

        <span
          style={{
            display: "block",
            marginTop: "10px",
            color: "#64748b",
          }}
        >
          The connection matters more.
        </span>
      </h2>

      <p
        style={{
          margin: "30px 0 0",
          maxWidth: "760px",
          fontSize: "16px",
          lineHeight: "1.9",
          color: "#64748b",
        }}
      >
        Minivel&apos;s role goes beyond moving profiles through a hiring
        process. The real value comes from understanding the business need,
        understanding the person and knowing when those two sides genuinely
        make sense together.
      </p>
    </div>
    </ScrollReveal>

    {/* ========================================
        PREMIUM FEATURE AREA
    ========================================= */}
    <div
      className="minivel-premium-connection-grid"
      style={{
        marginTop: "72px",
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
        gap: "44px",
        alignItems: "stretch",
      }}
    >
      {/* ========================================
          LEFT — MINIVEL VIEWPOINT
      ========================================= */}
      <ScrollReveal className="h-full">
  <div
    style={{
          position: "relative",
          overflow: "hidden",
          minWidth: 0,
          padding: "42px",
          borderRadius: "28px",
          background:
            "linear-gradient(145deg,#172b4d 0%,#1d385f 58%,#19344f 100%)",
          boxShadow: "0 24px 60px rgba(23,43,77,0.16)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: "230px",
            height: "230px",
            borderRadius: "50%",
            background: "rgba(95,190,62,0.12)",
            filter: "blur(70px)",
            top: "-70px",
            right: "-70px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#78d65b",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              M
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "11px",
                lineHeight: "1.5",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#78d65b",
              }}
            >
              The Minivel View
            </p>
          </div>

          <h3
            style={{
              margin: "30px 0 0",
              maxWidth: "470px",
              fontSize: "34px",
              lineHeight: "1.22",
              letterSpacing: "-0.03em",
              fontWeight: 650,
              color: "#ffffff",
            }}
          >
            Better hiring starts when both sides are understood.
          </h3>

          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "500px",
              fontSize: "15px",
              lineHeight: "1.85",
              color: "#c3cfdd",
            }}
          >
            A business needs clarity around the role. A candidate needs clarity
            around the opportunity. Minivel helps bring those two perspectives
            together before the hiring decision moves forward.
          </p>

          <div
            style={{
              marginTop: "34px",
              paddingTop: "26px",
              borderTop: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.8",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Information creates visibility.
              <span style={{ color: "#78d65b" }}>
                {" "}
                Understanding creates confidence.
              </span>
            </p>
          </div>
        </div>
      </div>
      </ScrollReveal>
      

     {/* ========================================
    RIGHT — ADVANCED VALUE CARDS
========================================= */}
<div
  style={{
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  }}
>
  {/* BUSINESS */}
  <ScrollReveal delay={0}>
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        minWidth: 0,
        padding: "30px 32px",
        borderRadius: "22px",
        border: "1px solid #dfe7f0",
        background: "rgba(255,255,255,0.92)",
        boxShadow: "0 10px 28px rgba(23,43,77,0.055)",
        transition:
          "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = "#bad5ff";
        e.currentTarget.style.boxShadow =
          "0 20px 46px rgba(23,43,77,0.11)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#dfe7f0";
        e.currentTarget.style.boxShadow =
          "0 10px 28px rgba(23,43,77,0.055)";
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background: "#3478f6",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "54px minmax(0,1fr)",
          gap: "22px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "54px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            background: "#eef5ff",
            color: "#3478f6",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          01
        </div>

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#3478f6",
            }}
          >
            For Businesses
          </p>

          <h3
            style={{
              margin: "10px 0 0",
              fontSize: "21px",
              lineHeight: "1.4",
              fontWeight: 650,
              color: "#172b4d",
            }}
          >
            Understand who the role actually needs.
          </h3>

          <p
            style={{
              margin: "12px 0 0",
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#64748b",
            }}
          >
            Clearer requirements help recruiters focus the search and
            reduce time spent exploring candidates who do not match the
            real need behind the role.
          </p>
        </div>
      </div>
    </article>
  </ScrollReveal>


  {/* CANDIDATES */}
  <ScrollReveal delay={0.12}>
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        minWidth: 0,
        padding: "30px 32px",
        borderRadius: "22px",
        border: "1px solid #dfe7f0",
        background: "rgba(255,255,255,0.92)",
        boxShadow: "0 10px 28px rgba(23,43,77,0.055)",
        transition:
          "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = "#c5eabc";
        e.currentTarget.style.boxShadow =
          "0 20px 46px rgba(23,43,77,0.11)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#dfe7f0";
        e.currentTarget.style.boxShadow =
          "0 10px 28px rgba(23,43,77,0.055)";
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background: "#5fbe3e",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "54px minmax(0,1fr)",
          gap: "22px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "54px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            background: "#eff9ed",
            color: "#4ca83d",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          02
        </div>

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#5fbe3e",
            }}
          >
            For Candidates
          </p>

          <h3
            style={{
              margin: "10px 0 0",
              fontSize: "21px",
              lineHeight: "1.4",
              fontWeight: 650,
              color: "#172b4d",
            }}
          >
            Understand what the opportunity really offers.
          </h3>

          <p
            style={{
              margin: "12px 0 0",
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#64748b",
            }}
          >
            Responsibilities, expectations and career direction matter.
            Candidates need enough context to decide whether the
            opportunity is actually right for them.
          </p>
        </div>
      </div>
    </article>
  </ScrollReveal>


  {/* MINIVEL */}
  <ScrollReveal delay={0.24}>
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        minWidth: 0,
        padding: "30px 32px",
        borderRadius: "22px",
        border: "1px solid #dfe7f0",
        background: "rgba(255,255,255,0.92)",
        boxShadow: "0 10px 28px rgba(23,43,77,0.055)",
        transition:
          "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = "#b9e7dc";
        e.currentTarget.style.boxShadow =
          "0 20px 46px rgba(23,43,77,0.11)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#dfe7f0";
        e.currentTarget.style.boxShadow =
          "0 10px 28px rgba(23,43,77,0.055)";
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background: "#18a9a8",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "54px minmax(0,1fr)",
          gap: "22px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "54px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            background: "#edfafa",
            color: "#0f9a99",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          03
        </div>

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#0f9a99",
            }}
          >
            For Minivel
          </p>

          <h3
            style={{
              margin: "10px 0 0",
              fontSize: "21px",
              lineHeight: "1.4",
              fontWeight: 650,
              color: "#172b4d",
            }}
          >
            Connect both sides with better context.
          </h3>

          <p
            style={{
              margin: "12px 0 0",
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#64748b",
            }}
          >
            Recruitment experience, conversations and technology work
            together to support decisions that make sense for both the
            business and the person.
          </p>
        </div>
      </div>
    </article>
  </ScrollReveal>

</div>
</div>


{/* ========================================
    FINAL BRAND BANNER
========================================= */}
<ScrollReveal delay={0.1}>
  <div
    style={{
      marginTop: "68px",
      padding: "34px 36px",
      borderRadius: "24px",
      background:
        "linear-gradient(135deg,#172b4d 0%,#1e3b63 72%,#18374c 100%)",
      boxShadow: "0 22px 50px rgba(23,43,77,0.15)",
    }}
  >
    <p
      style={{
        margin: 0,
        maxWidth: "1000px",
        fontSize: "19px",
        lineHeight: "1.8",
        fontWeight: 500,
        color: "#ffffff",
      }}
    >
      The Minivel advantage is not simply finding talent faster.

      <span
        style={{
          color: "#7bd95d",
          fontWeight: 650,
        }}
      >
        {" "}
        It is creating enough understanding on both sides for a better
        hiring decision to happen.
      </span>
    </p>
  </div>
</ScrollReveal>

</div>


<style>{`
  @media (max-width: 900px) {
    .minivel-premium-connection-grid {
      grid-template-columns: 1fr !important;
      gap: 34px !important;
    }
  }

  @media (max-width: 600px) {
    .minivel-premium-connection-grid > div:first-child {
      padding: 30px !important;
    }
  }
`}</style>
</section>

{/* ========================================
    SECTION 06 — FINAL NAVIGATION
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "28px",
      }}
    >
      {/* BACK TO PREVIOUS PAGE */}
      <Link
        to="/human-intelligence"
        style={{
          display: "block",
          padding: "28px 30px",
          borderRadius: "20px",
          border: "1px solid #e2e8f0",
          background: "#f8fafc",
          textDecoration: "none",
          boxShadow: "0 8px 24px rgba(23,43,77,0.05)",
          transition:
            "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.borderColor = "#bfdbfe";
          e.currentTarget.style.boxShadow =
            "0 18px 40px rgba(23,43,77,0.10)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "#e2e8f0";
          e.currentTarget.style.boxShadow =
            "0 8px 24px rgba(23,43,77,0.05)";
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#3b82f6",
          }}
        >
          Previous
        </p>

        <h3
          style={{
            margin: "12px 0 0",
            fontSize: "22px",
            lineHeight: "1.4",
            fontWeight: 650,
            color: "#172b4d",
          }}
        >
          AI × Human Intelligence
        </h3>

        <p
          style={{
            margin: "12px 0 0",
            fontSize: "14px",
            lineHeight: "1.75",
            color: "#64748b",
          }}
        >
          Return to the previous part of the Talent Intelligence experience.
        </p>
      </Link>

      {/* BACK TO EXPERIENCE */}
      <Link
        to="/experience"
        style={{
          display: "block",
          padding: "28px 30px",
          borderRadius: "20px",
          background: "#172b4d",
          color: "#ffffff",
          textDecoration: "none",
          boxShadow: "0 12px 30px rgba(23,43,77,0.14)",
          transition:
            "transform .3s ease, box-shadow .3s ease, background .3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.background = "#1f3a61";
          e.currentTarget.style.boxShadow =
            "0 20px 46px rgba(23,43,77,0.20)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "#172b4d";
          e.currentTarget.style.boxShadow =
            "0 12px 30px rgba(23,43,77,0.14)";
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#78d65b",
          }}
        >
          Return
        </p>

        <h3
          style={{
            margin: "12px 0 0",
            fontSize: "22px",
            lineHeight: "1.4",
            fontWeight: 650,
            color: "#ffffff",
          }}
        >
          Talent Intelligence
        </h3>

        <p
          style={{
            margin: "12px 0 0",
            fontSize: "14px",
            lineHeight: "1.75",
            color: "#cbd5e1",
          }}
        >
          Go back to the main Minivel Talent Intelligence experience.
        </p>
      </Link>
    </div>
  </div>
</section>

    </main>
  );
}


/* ========================================
   REASON CARD
========================================= */
function ReasonCard({
  number,
  title,
  text,
  type,
}) {
  const blue = type === "blue";

  return (
    <article
      style={{
        minWidth: 0,
        padding: "26px 28px",
        borderRadius: "20px",
        border: "1px solid #e1e7ef",
        background: "#ffffff",
        boxShadow:
          "0 8px 24px rgba(23,43,77,0.055)",
        transition:
          "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-5px)";

        e.currentTarget.style.borderColor = blue
          ? "#bfd7ff"
          : "#c8e9c2";

        e.currentTarget.style.boxShadow =
          "0 18px 42px rgba(23,43,77,0.11)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.borderColor =
          "#e1e7ef";

        e.currentTarget.style.boxShadow =
          "0 8px 24px rgba(23,43,77,0.055)";
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "64px minmax(0,1fr)",
          gap: "24px",
          alignItems: "center",
        }}
      >

        {/* Number */}
        <div
          style={{
            width: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",

            background: blue
              ? "linear-gradient(135deg,#eaf2ff,#f7f9ff)"
              : "linear-gradient(135deg,#e9f7e6,#f8fcf7)",

            color: blue
              ? "#3478f6"
              : "#4ca83d",

            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          {number}
        </div>


        {/* Content */}
        <div
          style={{
            minWidth: 0,
            paddingLeft: "22px",
            borderLeft: "1px solid #dce4ef",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: "1.4",
              fontWeight: 650,
              color: "#172b4d",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              margin: "9px 0 0",
              fontSize: "14px",
              lineHeight: "1.75",
              color: "#64748b",
            }}
          >
            {text}
          </p>
        </div>

      </div>
    </article>
  );
}

export default MinivelAdvantagePage;