/* ============================================================
   ORTO-CARE — Design-System cards
   Each card is one artboard; all share tokens.css
   ============================================================ */

const Card = ({ title, eyebrow, children, style, padded = true }) => (
  <div
    className="oc-reset"
    style={{
      width: "100%",
      height: "100%",
      background: "var(--oc-paper)",
      padding: padded ? 48 : 0,
      display: "flex",
      flexDirection: "column",
      ...style,
    }}
  >
    {eyebrow && (
      <div
        style={{
          fontFamily: "var(--oc-font-mono)",
          fontSize: "var(--oc-text-mc)",
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
          fontSize: "var(--oc-text-h2)",
          fontWeight: "var(--oc-w-medium)",
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

/* ──────────────────────────────────────────────────────────
   1. BRAND OVERVIEW — landing-page tone introduction
   ────────────────────────────────────────────────────────── */
function BrandOverview() {
  return (
    <Card padded={false} style={{ background: "var(--oc-paper)" }}>
      {/* hero strip */}
      <div
        style={{
          height: 280,
          background:
            "radial-gradient(120% 120% at 70% 20%, var(--oc-blue-100) 0%, var(--oc-mist) 38%, var(--oc-paper) 78%)",
          padding: "48px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--oc-ink-100)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "var(--oc-r-pill)",
              background: "var(--oc-ink-900)",
              color: "white",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.04em",
            }}
          >
            O
          </div>
          <div
            style={{
              fontWeight: "var(--oc-w-semibold)",
              fontSize: 18,
              letterSpacing: "-0.01em",
            }}
          >
            Orto-Care
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--oc-font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--oc-ink-400)",
              marginBottom: 12,
            }}
          >
            Design system · v1.0
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: "var(--oc-w-medium)",
              letterSpacing: "-0.035em",
              lineHeight: 0.95,
              maxWidth: 820,
              color: "var(--oc-ink-900)",
            }}
          >
            Calm care, <span style={{ color: "var(--oc-blue-500)" }}>clearly</span> presented.
          </div>
        </div>
      </div>

      {/* principles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          padding: 56,
        }}
      >
        {[
          {
            n: "01",
            t: "Bento-first",
            d: "Modular rounded cards layered on a neutral page. Density varies — large hero blocks paired with quiet pastel rests.",
          },
          {
            n: "02",
            t: "Sky-tinted neutrals",
            d: "Off-whites lean cool. Content sits on near-paper; pastel fills (mist, mint, coral) highlight features without shouting.",
          },
          {
            n: "03",
            t: "One sharp accent",
            d: "Care Blue 500 owns calls-to-action and metrics. Used sparingly — most surfaces stay quiet.",
          },
        ].map((p) => (
          <div
            key={p.n}
            style={{
              borderTop: "1px solid var(--oc-ink-100)",
              paddingTop: 20,
            }}
          >
            <div
              style={{
                fontFamily: "var(--oc-font-mono)",
                fontSize: 11,
                color: "var(--oc-ink-300)",
                marginBottom: 8,
              }}
            >
              {p.n}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: "var(--oc-w-medium)",
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              {p.t}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--oc-ink-500)",
                lineHeight: 1.5,
                textWrap: "pretty",
              }}
            >
              {p.d}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ──────────────────────────────────────────────────────────
   2. COLOR — neutrals + brand + accents
   ────────────────────────────────────────────────────────── */
function Swatch({ name, token, hex, ink = "var(--oc-ink-900)", bg }) {
  return (
    <div
      style={{
        background: bg || `var(${token})`,
        color: ink,
        borderRadius: "var(--oc-r-md)",
        padding: 16,
        height: 132,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border:
          hex.toLowerCase() === "#ffffff" || hex.toLowerCase() === "#fbfcfe"
            ? "1px solid var(--oc-ink-100)"
            : "none",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: "var(--oc-w-medium)",
          letterSpacing: "-0.005em",
        }}
      >
        {name}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--oc-font-mono)",
            fontSize: 10,
            opacity: 0.65,
            marginBottom: 2,
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontFamily: "var(--oc-font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {hex}
        </div>
      </div>
    </div>
  );
}

function ColorPalette() {
  const neutrals = [
    { n: "Ink 900", t: "--oc-ink-900", h: "#0B1220", ink: "#fff" },
    { n: "Ink 700", t: "--oc-ink-700", h: "#1F2A3D", ink: "#fff" },
    { n: "Ink 500", t: "--oc-ink-500", h: "#4A5568", ink: "#fff" },
    { n: "Ink 400", t: "--oc-ink-400", h: "#6B7689", ink: "#fff" },
    { n: "Ink 300", t: "--oc-ink-300", h: "#98A1B2", ink: "#fff" },
    { n: "Ink 200", t: "--oc-ink-200", h: "#C9D0DC" },
    { n: "Ink 100", t: "--oc-ink-100", h: "#E2E7EF" },
    { n: "Ink 050", t: "--oc-ink-050", h: "#F0F3F8" },
    { n: "Paper",   t: "--oc-paper",   h: "#FBFCFE" },
    { n: "Surface", t: "--oc-surface", h: "#FFFFFF" },
  ];
  const brand = [
    { n: "Blue 50",  t: "--oc-blue-50",  h: "#E8F1FF" },
    { n: "Blue 100", t: "--oc-blue-100", h: "#CFE0FF" },
    { n: "Blue 300", t: "--oc-blue-300", h: "#7BA8F5", ink: "#fff" },
    { n: "Blue 500 ★", t: "--oc-blue-500", h: "#2563EB", ink: "#fff" },
    { n: "Blue 600", t: "--oc-blue-600", h: "#1D4FD8", ink: "#fff" },
    { n: "Blue 900", t: "--oc-blue-900", h: "#0C2360", ink: "#fff" },
  ];
  const accents = [
    { n: "Mist",  t: "--oc-mist",  h: "#EEF3FA" },
    { n: "Mist 2", t: "--oc-mist-2", h: "#E2EBF7" },
    { n: "Cream", t: "--oc-cream", h: "#F4F1EC" },
    { n: "Mint",  t: "--oc-mint",  h: "#D5EFE3", ink: "var(--oc-mint-ink)" },
    { n: "Coral", t: "--oc-coral", h: "#FFD9CD", ink: "var(--oc-coral-ink)" },
    { n: "Sand",  t: "--oc-sand",  h: "#F2E6D0", ink: "var(--oc-sand-ink)" },
  ];

  const Section = ({ label, items, cols }) => (
    <div style={{ marginBottom: 32 }}>
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
        {label}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 12,
        }}
      >
        {items.map((s) => (
          <Swatch
            key={s.t}
            name={s.n}
            token={s.t}
            hex={s.h}
            ink={s.ink}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Card title="Color" eyebrow="01 · Foundations">
      <Section label="Neutrals · Sky-tinted" items={neutrals} cols={5} />
      <Section label="Brand · Care Blue" items={brand} cols={6} />
      <Section label="Accents · Pastel" items={accents} cols={6} />
    </Card>
  );
}

/* ──────────────────────────────────────────────────────────
   3. TYPOGRAPHY
   ────────────────────────────────────────────────────────── */
function Typography() {
  const rows = [
    {
      label: "Display 1",
      sample: "Care, simply explained.",
      meta: "Inter Tight · 88 / 0.95 · -0.035em · Medium 500",
      style: {
        fontSize: 88,
        lineHeight: 0.95,
        letterSpacing: "-0.035em",
        fontWeight: 500,
      },
    },
    {
      label: "Display 2",
      sample: "Built around your recovery.",
      meta: "Inter Tight · 64 / 1 · -0.03em · Medium 500",
      style: {
        fontSize: 64,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        fontWeight: 500,
      },
    },
    {
      label: "Heading 1",
      sample: "On what to expect",
      meta: "Inter Tight · 48 / 1.05 · -0.02em · Semibold 600",
      style: {
        fontSize: 48,
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        fontWeight: 600,
      },
    },
    {
      label: "Heading 2",
      sample: "Personal, paired with proven science.",
      meta: "Inter Tight · 36 / 1.15 · -0.018em · Medium 500",
      style: {
        fontSize: 36,
        lineHeight: 1.15,
        letterSpacing: "-0.018em",
        fontWeight: 500,
      },
    },
    {
      label: "Heading 3",
      sample: "Track every appointment in one calm space.",
      meta: "Inter Tight · 28 / 1.2 · -0.012em · Medium 500",
      style: {
        fontSize: 28,
        lineHeight: 1.2,
        letterSpacing: "-0.012em",
        fontWeight: 500,
      },
    },
    {
      label: "Body Large",
      sample:
        "Orto-Care helps clinics coordinate orthopaedic recovery — from booking to home rehab — without losing the human touch.",
      meta: "Inter Tight · 18 / 1.5 · 0 · Regular 400",
      style: { fontSize: 18, lineHeight: 1.5, fontWeight: 400 },
    },
    {
      label: "Body",
      sample:
        "Patients see their next step. Clinicians see the whole care path. One calm interface for both.",
      meta: "Inter Tight · 16 / 1.55 · 0 · Regular 400",
      style: {
        fontSize: 16,
        lineHeight: 1.55,
        fontWeight: 400,
        color: "var(--oc-ink-500)",
      },
    },
    {
      label: "Caption",
      sample: "* Available with Care+ plan in select regions.",
      meta: "Inter Tight · 13 / 1.4 · 0 · Regular 400",
      style: {
        fontSize: 13,
        lineHeight: 1.4,
        fontWeight: 400,
        color: "var(--oc-ink-400)",
      },
    },
    {
      label: "Micro caps",
      sample: "FEATURE · 12mm soft-touch driver",
      meta: "JetBrains Mono · 11 · 0.14em · Medium 500 · UPPER",
      style: {
        fontFamily: "var(--oc-font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: 500,
        color: "var(--oc-ink-400)",
      },
    },
  ];
  return (
    <Card title="Typography" eyebrow="02 · Foundations">
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {rows.map((r) => (
          <div
            key={r.label}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: 32,
              alignItems: "baseline",
              borderTop: "1px solid var(--oc-ink-100)",
              paddingTop: 20,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  marginBottom: 4,
                  color: "var(--oc-ink-900)",
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--oc-font-mono)",
                  fontSize: 11,
                  color: "var(--oc-ink-400)",
                  lineHeight: 1.5,
                }}
              >
                {r.meta}
              </div>
            </div>
            <div
              style={{
                color: "var(--oc-ink-900)",
                textWrap: "balance",
                ...r.style,
              }}
            >
              {r.sample}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ──────────────────────────────────────────────────────────
   4. SPACING + RADIUS + SHADOW
   ────────────────────────────────────────────────────────── */
function SpacingRadiusShadow() {
  const spacing = [4, 8, 12, 16, 20, 24, 32, 48, 64, 96];
  const radii = [
    { n: "xs", v: 6 },
    { n: "sm", v: 10 },
    { n: "md", v: 16 },
    { n: "lg", v: 24 },
    { n: "xl", v: 32 },
    { n: "2xl", v: 44 },
    { n: "pill", v: 999 },
  ];
  return (
    <Card title="Spacing · Radius · Shadow" eyebrow="03 · Foundations">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}
      >
        {/* Spacing */}
        <div>
          <div
            style={{
              fontFamily: "var(--oc-font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--oc-ink-300)",
              marginBottom: 16,
            }}
          >
            4-pt spacing scale
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {spacing.map((s) => (
              <div
                key={s}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <div
                  style={{
                    fontFamily: "var(--oc-font-mono)",
                    fontSize: 12,
                    width: 40,
                    color: "var(--oc-ink-400)",
                  }}
                >
                  {s}
                </div>
                <div
                  style={{
                    height: 12,
                    width: s * 4,
                    background: "var(--oc-blue-500)",
                    borderRadius: 4,
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--oc-font-mono)",
                    fontSize: 11,
                    color: "var(--oc-ink-300)",
                  }}
                >
                  --oc-s-{s / 4}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radius */}
        <div>
          <div
            style={{
              fontFamily: "var(--oc-font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--oc-ink-300)",
              marginBottom: 16,
            }}
          >
            Radius — pill-forward
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {radii.map((r) => (
              <div key={r.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: "var(--oc-mist)",
                    border: "1px solid var(--oc-ink-100)",
                    borderRadius: r.v,
                    height: 70,
                    marginBottom: 8,
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--oc-font-mono)",
                    fontSize: 11,
                    color: "var(--oc-ink-500)",
                  }}
                >
                  {r.n} · {r.v === 999 ? "999" : r.v}px
                </div>
              </div>
            ))}
          </div>

          {/* Shadow */}
          <div
            style={{
              fontFamily: "var(--oc-font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--oc-ink-300)",
              marginTop: 32,
              marginBottom: 16,
            }}
          >
            Elevation
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {[
              { n: "1", s: "var(--oc-shadow-1)" },
              { n: "2", s: "var(--oc-shadow-2)" },
              { n: "3", s: "var(--oc-shadow-3)" },
              { n: "blue", s: "var(--oc-shadow-blue)" },
            ].map((sh) => (
              <div key={sh.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: "var(--oc-surface)",
                    borderRadius: 16,
                    height: 70,
                    boxShadow: sh.s,
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--oc-font-mono)",
                    fontSize: 11,
                    color: "var(--oc-ink-500)",
                    marginTop: 8,
                  }}
                >
                  shadow-{sh.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

Object.assign(window, {
  BrandOverview,
  ColorPalette,
  Typography,
  SpacingRadiusShadow,
});
