/* ============================================================
   ORTO-CARE — Components
   ============================================================ */

const CCard = ({ title, eyebrow, children, style }) => (
  <div
    className="oc-reset"
    style={{
      width: "100%",
      height: "100%",
      background: "var(--oc-paper)",
      padding: 48,
      display: "flex",
      flexDirection: "column",
      ...style,
    }}
  >
    {eyebrow && (
      <div
        style={{
          fontFamily: "var(--oc-font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--oc-ink-300)",
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </div>
    )}
    {title && (
      <h2
        style={{
          fontSize: 36,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          marginBottom: 32,
          color: "var(--oc-ink-900)",
        }}
      >
        {title}
      </h2>
    )}
    {children}
  </div>
);

const SectionLabel = ({ children, mt = 0 }) => (
  <div
    style={{
      fontFamily: "var(--oc-font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--oc-ink-300)",
      marginTop: mt,
      marginBottom: 16,
    }}
  >
    {children}
  </div>
);

/* SVG icons (no copyrighted glyphs — simple geometric strokes) */
const Arrow = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M3.5 12.5 L12.5 3.5 M6 3.5 H12.5 V10"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Plus = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M8 3v10 M3 8h10"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
const Check = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8.5 L6.5 12 L13 4.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ──────────────────────────────────────────────────────────
   5. BUTTONS — pill, with optional inline circle-arrow
   ────────────────────────────────────────────────────────── */
function Buttons() {
  const Btn = ({ kind = "primary", size = "md", children, withArrow = false }) => {
    const sizing = {
      sm: { h: 36, px: 16, font: 13, gap: 10, dot: 26, arrow: 12 },
      md: { h: 48, px: 22, font: 15, gap: 12, dot: 36, arrow: 14 },
      lg: { h: 56, px: 28, font: 16, gap: 14, dot: 42, arrow: 16 },
    }[size];
    const styles = {
      primary: { bg: "var(--oc-ink-900)", fg: "#fff", dotBg: "var(--oc-blue-500)", dotFg: "#fff", border: "transparent" },
      blue:    { bg: "var(--oc-blue-500)", fg: "#fff", dotBg: "#fff", dotFg: "var(--oc-blue-500)", border: "transparent" },
      ghost:   { bg: "transparent", fg: "var(--oc-ink-900)", dotBg: "var(--oc-ink-900)", dotFg: "#fff", border: "var(--oc-ink-200)" },
      soft:    { bg: "var(--oc-mist)", fg: "var(--oc-ink-900)", dotBg: "var(--oc-blue-500)", dotFg: "#fff", border: "transparent" },
    }[kind];
    return (
      <button
        style={{
          height: sizing.h,
          background: styles.bg,
          color: styles.fg,
          border: `1px solid ${styles.border}`,
          borderRadius: 999,
          paddingLeft: sizing.px,
          paddingRight: withArrow ? 6 : sizing.px,
          fontSize: sizing.font,
          fontWeight: 500,
          letterSpacing: "-0.005em",
          display: "inline-flex",
          alignItems: "center",
          gap: sizing.gap,
          cursor: "pointer",
          fontFamily: "var(--oc-font-sans)",
          transition: "transform var(--oc-dur) var(--oc-ease)",
        }}
      >
        <span>{children}</span>
        {withArrow && (
          <span
            style={{
              width: sizing.dot,
              height: sizing.dot,
              borderRadius: 999,
              background: styles.dotBg,
              color: styles.dotFg,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Arrow size={sizing.arrow} />
          </span>
        )}
      </button>
    );
  };

  return (
    <CCard title="Buttons" eyebrow="04 · Components">
      <SectionLabel>Primary · Pill · with circle-arrow</SectionLabel>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28, alignItems: "center" }}>
        <Btn kind="primary" size="lg" withArrow>Talk to sales</Btn>
        <Btn kind="primary" size="md" withArrow>Book a consult</Btn>
        <Btn kind="primary" size="sm" withArrow>Learn more</Btn>
      </div>

      <SectionLabel>Variants</SectionLabel>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28, alignItems: "center" }}>
        <Btn kind="blue" size="md" withArrow>Get started</Btn>
        <Btn kind="soft" size="md" withArrow>See plans</Btn>
        <Btn kind="ghost" size="md">Sign in</Btn>
        <Btn kind="primary" size="md">Register now</Btn>
      </div>

      <SectionLabel>States</SectionLabel>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28, alignItems: "center" }}>
        <button style={btnPill({ bg: "var(--oc-ink-900)", fg: "#fff" })}>Default</button>
        <button style={btnPill({ bg: "var(--oc-ink-700)", fg: "#fff", shadow: "var(--oc-shadow-3)" })}>Hover</button>
        <button style={btnPill({ bg: "var(--oc-ink-900)", fg: "#fff", outline: "0 0 0 4px var(--oc-blue-100)" })}>Focus</button>
        <button disabled style={btnPill({ bg: "var(--oc-ink-100)", fg: "var(--oc-ink-300)", cursor: "not-allowed" })}>Disabled</button>
      </div>

      <SectionLabel>Tag chips · selectable</SectionLabel>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["All", "Spine", "Knee", "Shoulder", "Hip", "Hand & wrist"].map((t, i) => (
          <span
            key={t}
            style={{
              fontSize: 13,
              fontWeight: 500,
              padding: "8px 14px",
              borderRadius: 999,
              background: i === 1 ? "var(--oc-ink-900)" : "var(--oc-ink-050)",
              color: i === 1 ? "#fff" : "var(--oc-ink-700)",
              border: i === 1 ? "1px solid var(--oc-ink-900)" : "1px solid var(--oc-ink-100)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </CCard>
  );
}

function btnPill({ bg, fg, shadow, outline, cursor }) {
  return {
    height: 48,
    background: bg,
    color: fg,
    border: "1px solid transparent",
    borderRadius: 999,
    padding: "0 22px",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "var(--oc-font-sans)",
    boxShadow: [shadow, outline].filter(Boolean).join(", ") || "none",
    cursor: cursor || "pointer",
  };
}

/* ──────────────────────────────────────────────────────────
   6. BENTO CARDS — feature grid (signature pattern)
   ────────────────────────────────────────────────────────── */
function StripePlaceholder({ label, height = "100%", tone = "blue" }) {
  const grad =
    tone === "blue"
      ? "repeating-linear-gradient(135deg, #DCE7F7 0 8px, #CBDAEE 8px 16px)"
      : tone === "warm"
      ? "repeating-linear-gradient(135deg, #ECE4D6 0 8px, #DFD5C3 8px 16px)"
      : "repeating-linear-gradient(135deg, #E5EDDC 0 8px, #D6E0C9 8px 16px)";
  return (
    <div
      style={{
        height,
        width: "100%",
        background: grad,
        borderRadius: "inherit",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--oc-font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(11,18,32,0.5)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <CCard title="Bento feature grid" eyebrow="05 · Components">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gridTemplateRows: "180px 180px",
          gap: 16,
          width: "100%",
        }}
      >
        {/* metric hero */}
        <div
          style={{
            gridColumn: "1",
            gridRow: "1 / span 2",
            background: "var(--oc-surface)",
            borderRadius: 32,
            padding: 28,
            border: "1px solid var(--oc-ink-100)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "var(--oc-ink-900)",
              }}
            >
              98<span style={{ color: "var(--oc-blue-500)" }}>%</span>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--oc-ink-400)",
                marginTop: 8,
                maxWidth: 220,
              }}
            >
              of patients keep up with their post-op plan in-app.
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: -40,
              bottom: -40,
              width: 200,
              height: 200,
              borderRadius: 999,
              background: "radial-gradient(circle, var(--oc-blue-100) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* tinted feature */}
        <div
          style={{
            gridColumn: "2",
            gridRow: "1",
            background: "var(--oc-blue-500)",
            color: "#fff",
            borderRadius: 32,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Supports<br />Smart Scheduling
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Arrow color="#fff" />
          </div>
        </div>

        {/* big number badge */}
        <div
          style={{
            gridColumn: "3",
            gridRow: "1",
            background: "var(--oc-ink-900)",
            color: "#fff",
            borderRadius: 32,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 13, opacity: 0.7 }}>HIPAA · ISO</div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            27<span style={{ color: "var(--oc-blue-300)" }}>k</span>
          </div>
        </div>

        {/* image-style placeholder */}
        <div
          style={{
            gridColumn: "2 / span 2",
            gridRow: "2",
            borderRadius: 32,
            overflow: "hidden",
            border: "1px solid var(--oc-ink-100)",
            position: "relative",
          }}
        >
          <StripePlaceholder label="Photo · clinician + patient" tone="blue" />
          <div
            style={{
              position: "absolute",
              left: 24,
              bottom: 24,
              right: 24,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontFamily: "var(--oc-font-mono)", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(11,18,32,0.55)", marginBottom: 6 }}>
                Care path
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.012em", color: "var(--oc-ink-900)", maxWidth: 260, lineHeight: 1.15 }}>
                Every visit, every step — together.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionLabel mt={28}>Card surface variants</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
        {[
          { n: "Surface", bg: "var(--oc-surface)", border: "1px solid var(--oc-ink-100)", fg: "var(--oc-ink-900)" },
          { n: "Mist",    bg: "var(--oc-mist)",    border: "none", fg: "var(--oc-ink-900)" },
          { n: "Brand",   bg: "var(--oc-blue-500)",border: "none", fg: "#fff" },
          { n: "Ink",     bg: "var(--oc-ink-900)", border: "none", fg: "#fff" },
        ].map((s) => (
          <div key={s.n} style={{
            background: s.bg, color: s.fg, borderRadius: 24, padding: 20, height: 110,
            border: s.border, display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div style={{ fontSize: 12, opacity: 0.6, fontFamily: "var(--oc-font-mono)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {s.n}
            </div>
            <div style={{ fontSize: 16, fontWeight: 500 }}>r-32 · p-20</div>
          </div>
        ))}
      </div>
    </CCard>
  );
}

/* ──────────────────────────────────────────────────────────
   7. NAVIGATION + INPUTS + BADGES
   ────────────────────────────────────────────────────────── */
function NavInputs() {
  return (
    <CCard title="Navigation · Inputs · Badges" eyebrow="06 · Components">
      <SectionLabel>Top navigation</SectionLabel>
      <div
        style={{
          background: "var(--oc-surface)",
          border: "1px solid var(--oc-ink-100)",
          borderRadius: 999,
          padding: "10px 10px 10px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 999, background: "var(--oc-ink-900)", color: "#fff",
            display: "grid", placeItems: "center", fontSize: 14, fontWeight: 700, letterSpacing: "-0.04em"
          }}>O</div>
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em" }}>Orto-Care</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Patients", "Clinics", "Pricing", "Resources", "Contact"].map((l, i) => (
            <span
              key={l}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: i === 0 ? "var(--oc-ink-900)" : "var(--oc-ink-500)",
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={btnPill({ bg: "transparent", fg: "var(--oc-ink-900)" })}>Sign in</button>
          <button style={{ ...btnPill({ bg: "var(--oc-blue-500)", fg: "#fff" }), height: 40, fontSize: 14 }}>
            Book demo
          </button>
        </div>
      </div>

      <SectionLabel>Inputs</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
        {/* Text input */}
        <div>
          <label style={{ fontSize: 12, color: "var(--oc-ink-400)", fontWeight: 500, display: "block", marginBottom: 6 }}>
            Full name
          </label>
          <div style={{
            height: 48, borderRadius: 16, background: "var(--oc-surface)", border: "1px solid var(--oc-ink-200)",
            display: "flex", alignItems: "center", padding: "0 16px", fontSize: 15, color: "var(--oc-ink-900)",
          }}>
            Maria Lindgren
          </div>
        </div>
        {/* Focused input */}
        <div>
          <label style={{ fontSize: 12, color: "var(--oc-ink-400)", fontWeight: 500, display: "block", marginBottom: 6 }}>
            Email · focused
          </label>
          <div style={{
            height: 48, borderRadius: 16, background: "var(--oc-surface)", border: "1.5px solid var(--oc-blue-500)",
            display: "flex", alignItems: "center", padding: "0 16px", fontSize: 15, color: "var(--oc-ink-900)",
            boxShadow: "0 0 0 4px var(--oc-blue-100)"
          }}>
            maria@clinic.se
          </div>
        </div>
        {/* Search pill */}
        <div style={{ gridColumn: "1 / span 2" }}>
          <label style={{ fontSize: 12, color: "var(--oc-ink-400)", fontWeight: 500, display: "block", marginBottom: 6 }}>
            Search · pill
          </label>
          <div style={{
            height: 52, borderRadius: 999, background: "var(--oc-ink-050)", border: "1px solid var(--oc-ink-100)",
            display: "flex", alignItems: "center", padding: "0 6px 0 22px", gap: 12,
          }}>
            <span style={{ fontSize: 15, color: "var(--oc-ink-300)", flex: 1 }}>Search clinics, specialists, services…</span>
            <span style={{
              width: 40, height: 40, borderRadius: 999, background: "var(--oc-blue-500)", color: "#fff",
              display: "grid", placeItems: "center"
            }}>
              <Arrow color="#fff" />
            </span>
          </div>
        </div>
      </div>

      <SectionLabel>Badges</SectionLabel>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        {[
          { l: "Online", c: "var(--oc-success)", bg: "rgba(22,165,113,0.12)" },
          { l: "In-progress", c: "var(--oc-warning)", bg: "rgba(227,160,8,0.14)" },
          { l: "Cancelled", c: "var(--oc-danger)", bg: "rgba(220,38,38,0.12)" },
          { l: "New", c: "var(--oc-blue-700)", bg: "var(--oc-blue-50)" },
          { l: "Featured", c: "var(--oc-ink-900)", bg: "var(--oc-cream)" },
        ].map((b) => (
          <span
            key={b.l}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 12, fontWeight: 600, letterSpacing: "-0.005em",
              padding: "6px 12px", borderRadius: 999,
              background: b.bg, color: b.c,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 999, background: b.c }} />
            {b.l}
          </span>
        ))}
      </div>

      <SectionLabel mt={28}>List item · with check</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          "Dedicated post-op coordinator",
          "Daily rehab check-ins via mobile",
          "Direct line to your specialist",
        ].map((t) => (
          <div key={t} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px", borderRadius: 16, background: "var(--oc-mist)",
          }}>
            <span style={{
              width: 22, height: 22, borderRadius: 999, background: "var(--oc-blue-500)",
              color: "#fff", display: "grid", placeItems: "center", flexShrink: 0,
            }}>
              <Check size={12} color="#fff" />
            </span>
            <span style={{ fontSize: 15, color: "var(--oc-ink-700)", fontWeight: 500 }}>{t}</span>
          </div>
        ))}
      </div>
    </CCard>
  );
}

/* ──────────────────────────────────────────────────────────
   8. HERO PATTERN — landing-page composition demo
   ────────────────────────────────────────────────────────── */
function HeroPattern() {
  return (
    <CCard padded={false} title={null} eyebrow={null} style={{ padding: 0 }}>
      <div style={{ padding: "32px 48px 16px" }}>
        <div style={{ fontFamily: "var(--oc-font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--oc-ink-300)", marginBottom: 8 }}>
          07 · Pattern · Landing hero
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Hero composition
        </h2>
      </div>

      <div style={{ padding: "0 32px 32px", flex: 1 }}>
        <div
          style={{
            position: "relative",
            borderRadius: 44,
            overflow: "hidden",
            background:
              "radial-gradient(120% 100% at 75% 20%, var(--oc-blue-100) 0%, var(--oc-mist) 38%, var(--oc-paper) 90%)",
            padding: "44px 48px",
            minHeight: 480,
          }}
        >
          {/* Top bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 60,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 999, background: "var(--oc-ink-900)", color: "#fff", display: "grid", placeItems: "center", fontSize: 14, fontWeight: 700, letterSpacing: "-0.04em" }}>O</div>
              <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em" }}>Orto-Care</span>
            </div>
            <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {["Patients", "Clinics", "Pricing", "Contact"].map((l) => (
                <span key={l} style={{ fontSize: 14, fontWeight: 500, color: "var(--oc-ink-700)" }}>{l}</span>
              ))}
            </div>
            <button style={{ ...btnPill({ bg: "var(--oc-blue-500)", fg: "#fff" }), height: 40, fontSize: 14 }}>
              Book a demo
            </button>
          </div>

          {/* Headline */}
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, alignItems: "end" }}>
            <div>
              <div style={{ fontFamily: "var(--oc-font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--oc-blue-700)", marginBottom: 16 }}>
                ★ Care platform · 2026
              </div>
              <h1 style={{
                fontSize: 80,
                fontWeight: 500,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                color: "var(--oc-ink-900)",
                marginBottom: 20,
                textWrap: "balance",
              }}>
                Recovery,<br />
                <span style={{ color: "var(--oc-blue-500)" }}>simplified</span> for everyone.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--oc-ink-500)", maxWidth: 460, marginBottom: 28 }}>
                Orto-Care connects clinics, surgeons, and patients on one calm platform — from first booking through final rehab.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button style={{
                  height: 56, background: "var(--oc-ink-900)", color: "#fff",
                  border: "none", borderRadius: 999, paddingLeft: 26, paddingRight: 8,
                  fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 14, cursor: "pointer",
                  fontFamily: "var(--oc-font-sans)"
                }}>
                  <span>Start free trial</span>
                  <span style={{ width: 42, height: 42, borderRadius: 999, background: "var(--oc-blue-500)", display: "grid", placeItems: "center" }}>
                    <Arrow color="#fff" />
                  </span>
                </button>
                <button style={{
                  height: 56, background: "transparent", color: "var(--oc-ink-900)",
                  border: "1px solid var(--oc-ink-200)", borderRadius: 999, padding: "0 26px",
                  fontSize: 16, fontWeight: 500, cursor: "pointer", fontFamily: "var(--oc-font-sans)"
                }}>
                  See it in action
                </button>
              </div>
            </div>

            {/* Stat card */}
            <div style={{
              background: "var(--oc-surface)", borderRadius: 32, padding: 24,
              boxShadow: "var(--oc-shadow-3)", border: "1px solid var(--oc-ink-100)",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "var(--oc-font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--oc-ink-400)" }}>
                  Today
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999,
                  background: "rgba(22,165,113,0.12)", color: "var(--oc-success)",
                }}>
                  Active
                </div>
              </div>
              <div>
                <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  4 visits
                </div>
                <div style={{ fontSize: 14, color: "var(--oc-ink-400)", marginTop: 6 }}>
                  scheduled in your care plan this week
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                {[
                  { d: "Mon · 09:00", l: "Physio · Anna L.", c: "var(--oc-mint)" },
                  { d: "Wed · 14:30", l: "Surgeon follow-up", c: "var(--oc-blue-50)" },
                  { d: "Fri · 11:00", l: "MRI · Saint Olav's", c: "var(--oc-coral)" },
                ].map((it) => (
                  <div key={it.d} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    background: it.c, padding: "10px 14px", borderRadius: 14,
                  }}>
                    <span style={{ fontFamily: "var(--oc-font-mono)", fontSize: 11, color: "var(--oc-ink-700)", width: 86 }}>{it.d}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--oc-ink-900)" }}>{it.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CCard>
  );
}

/* ──────────────────────────────────────────────────────────
   9. ICONOGRAPHY · simple geometric (no copyrighted glyphs)
   ────────────────────────────────────────────────────────── */
function Iconography() {
  const icons = [
    { n: "Arrow up-right", el: <Arrow size={28} /> },
    { n: "Plus", el: <Plus size={28} /> },
    { n: "Check", el: <Check size={28} /> },
    {
      n: "Circle",
      el: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
    {
      n: "Square (r)",
      el: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="4" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
    {
      n: "Diamond",
      el: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="6" y="6" width="16" height="16" transform="rotate(45 14 14)" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
    {
      n: "Dot grid",
      el: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
          {[6, 14, 22].map((y) => [6, 14, 22].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />
          )))}
        </svg>
      ),
    },
    {
      n: "Pill",
      el: (
        <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
          <rect x="1" y="1" width="34" height="18" rx="9" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
  ];
  return (
    <CCard title="Iconography" eyebrow="08 · Components">
      <SectionLabel>Stroke 1.6 · Round caps · No flourish</SectionLabel>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28,
      }}>
        {icons.map((ic) => (
          <div key={ic.n} style={{
            background: "var(--oc-surface)", border: "1px solid var(--oc-ink-100)",
            borderRadius: 24, padding: 24, height: 132,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
            color: "var(--oc-ink-900)",
          }}>
            <div>{ic.el}</div>
            <div style={{ fontFamily: "var(--oc-font-mono)", fontSize: 11, color: "var(--oc-ink-400)" }}>
              {ic.n}
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>Icon · in pill button</SectionLabel>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { bg: "var(--oc-blue-500)", fg: "#fff", el: <Arrow color="#fff" size={18} /> },
          { bg: "var(--oc-ink-900)", fg: "#fff", el: <Plus color="#fff" size={18} /> },
          { bg: "var(--oc-mist)", fg: "var(--oc-ink-900)", el: <Check color="var(--oc-ink-900)" size={18} /> },
          { bg: "var(--oc-coral)", fg: "var(--oc-coral-ink)", el: <Arrow color="var(--oc-coral-ink)" size={18} /> },
        ].map((p, i) => (
          <span key={i} style={{
            width: 48, height: 48, borderRadius: 999, background: p.bg, color: p.fg,
            display: "grid", placeItems: "center",
          }}>
            {p.el}
          </span>
        ))}
      </div>
    </CCard>
  );
}

Object.assign(window, {
  Buttons,
  BentoGrid,
  NavInputs,
  HeroPattern,
  Iconography,
});
