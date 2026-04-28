import Link from "next/link";

const CONTACT_EMAIL = "dan.vermillion@oblivionlabz.net";
const X_HANDLE = "OblivionLabz";
const GRIMOIRE_URL = "https://grimoire.oblivionlabz.net";

type Capability = {
  rune: string;
  name: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    rune: "▢",
    name: "AI engineering",
    body: "Claude Code skills, Agent SDK harnesses, RAG pipelines, evals. Senior-developer workflows encoded as reusable tooling.",
  },
  {
    rune: "◇",
    name: "Automation",
    body: "n8n, systemd, cron, container orchestration. Multi-step processes that run themselves and report back.",
  },
  {
    rune: "⌬",
    name: "Infrastructure",
    body: "Postgres, observability, IaC, reverse proxies, secrets management. Production-grade substrate without the SaaS tax.",
  },
  {
    rune: "✕",
    name: "Security posture",
    body: "Threat hunting, detection engineering, hardening, supply-chain hygiene. Senior practitioner background — applied to the AI stack itself.",
  },
];

type PortfolioItem = {
  status: "live" | "soon";
  name: string;
  tagline: string;
  body: string;
  cta?: { label: string; href: string };
};

const PORTFOLIO: PortfolioItem[] = [
  {
    status: "live",
    name: "The Operator's Grimoire",
    tagline: "14 Claude Code skills · $99 one-time",
    body: "Spec-driven development, ADRs, scaffolds, evals, multi-agent orchestration — fourteen senior-dev workflows encoded as Claude Code skills. Drop into ~/.claude/, restart the CLI, ship.",
    cta: { label: "View product →", href: GRIMOIRE_URL },
  },
  {
    status: "soon",
    name: "More shipping",
    tagline: "agent + automation surfaces in flight",
    body: "Additional operator tooling moving through the pipeline. Subscribe via the founding-cohort channel inside Grimoire to get early access.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-muted">
      <span className="block h-px w-8 bg-border" />
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden
        className="scanlines pointer-events-none absolute inset-0 -z-10 opacity-60"
      />

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.24em]">
            <span aria-hidden className="block h-2 w-2 bg-accent pulse-dot" />
            <span>OblivionLabz</span>
          </div>
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.24em] text-muted sm:flex">
            <Link href="#about" className="hover:text-foreground">
              About
            </Link>
            <Link href="#stack" className="hover:text-foreground">
              Stack
            </Link>
            <Link href="#work" className="hover:text-foreground">
              Work
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* 1 — Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <SectionLabel>v0 / forge live</SectionLabel>
          <h1 className="max-w-5xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
            <span className="block">OBLIVION</span>
            <span className="block text-accent">LABZ</span>
          </h1>
          <p className="mt-10 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
            A one-operator forge shipping AI development tooling, agent
            infrastructure, and operator-grade automation. No subscriptions, no
            telemetry, no retainer trap.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="#work"
              className="chamfer inline-flex items-center gap-3 bg-accent px-7 py-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-accent-fg transition-[transform,filter] hover:brightness-110 active:translate-y-px"
            >
              <span aria-hidden className="block h-2 w-2 bg-accent-fg" />
              View work
            </Link>
            <Link
              href="#about"
              className="font-mono text-xs uppercase tracking-[0.24em] text-muted hover:text-foreground"
            >
              Read the brief ↓
            </Link>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 font-mono text-xs uppercase tracking-[0.18em] text-muted sm:grid-cols-4">
            <div>
              <dt>Discipline</dt>
              <dd className="mt-2 text-base tracking-normal text-foreground">
                AI · Sec · Infra
              </dd>
            </div>
            <div>
              <dt>Forge</dt>
              <dd className="mt-2 text-base tracking-normal text-foreground">
                Champaign, IL
              </dd>
            </div>
            <div>
              <dt>Stance</dt>
              <dd className="mt-2 text-base tracking-normal text-foreground">
                Operator-first
              </dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd className="mt-2 text-base tracking-normal text-foreground">
                Live · 1 product
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2 — About */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>02 / about</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Senior practitioner. AI-native forge. Champaign, IL.
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <p className="text-lg leading-relaxed text-foreground/90">
              OblivionLabz is the public face of work I do under the hood —
              shipping AI development tooling, agent infrastructure, and
              operator-grade automation. Background is senior-side security
              engineering and detection work; the lens stays the same when I
              build for AI.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              The forge runs out of a personal homelab. Production discipline,
              bare-metal where it matters, no SaaS dependencies that can be
              pulled out from under the work. Everything I sell, I run myself
              first.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Output lands as discrete products — skill packs, templates, agent
              harnesses, runbooks. Operator-priced, one-time licensing, no
              subscription trap. Long-game positioning: build the senior
              workflows AI assistants ship without.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — Stack / capabilities */}
      <section id="stack" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>03 / capabilities</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Four surfaces. One discipline.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Categories the forge operates in. Specific stack varies by project;
            the principles do not.
          </p>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <li
                key={cap.name}
                className="chamfer-sm relative border border-border bg-surface p-8"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden
                    className="font-mono text-2xl text-accent"
                  >
                    {cap.rune}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {cap.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  {cap.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Portfolio */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>04 / work</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Shipping now.
          </h2>

          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {PORTFOLIO.map((item) => (
              <li
                key={item.name}
                className="chamfer relative border border-border bg-surface p-10"
              >
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em]">
                  {item.status === "live" ? (
                    <>
                      <span
                        aria-hidden
                        className="block h-2 w-2 bg-accent pulse-dot"
                      />
                      <span className="text-accent">Live</span>
                    </>
                  ) : (
                    <>
                      <span aria-hidden className="block h-2 w-2 bg-muted" />
                      <span className="text-muted">Soon</span>
                    </>
                  )}
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  {item.tagline}
                </p>
                <p className="mt-6 text-base leading-relaxed text-foreground/85">
                  {item.body}
                </p>

                {item.cta && (
                  <div className="mt-8">
                    <Link
                      href={item.cta.href}
                      className="inline-flex items-center gap-2 border border-accent-dim px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-accent-fg"
                      rel="noopener"
                    >
                      {item.cta.label}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — Contact */}
      <section id="contact" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>05 / contact</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One inbox. No form.
          </h2>

          <div className="chamfer mt-12 border border-accent-dim bg-surface p-10 sm:p-14">
            <p className="text-lg leading-relaxed text-foreground/90">
              Questions, collab, paid engagements, press — all routed through a
              single address. Plain text preferred. Reply-time honest:
              48&nbsp;hours weekdays, longer on the weekend.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="chamfer inline-flex items-center gap-3 bg-accent px-7 py-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-accent-fg transition-[transform,filter] hover:brightness-110 active:translate-y-px"
              >
                <span aria-hidden className="block h-2 w-2 bg-accent-fg" />
                {CONTACT_EMAIL}
              </Link>
              <Link
                href={`https://x.com/${X_HANDLE}`}
                rel="noopener"
                className="font-mono text-xs uppercase tracking-[0.24em] text-muted hover:text-foreground"
              >
                @{X_HANDLE} on X →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Footer */}
      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-6 py-10 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>OblivionLabz © 2026 · Champaign, IL</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-foreground hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
          <span aria-hidden className="block h-2 w-2 bg-accent pulse-dot" />
        </div>
      </footer>
    </main>
  );
}
