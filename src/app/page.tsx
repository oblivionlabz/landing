import Link from "next/link";

const CONTACT_EMAIL = "dan.vermillion@oblivionlabz.net";
const X_HANDLE = "OblivionLabz";


type Capability = {
  rune: string;
  name: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    rune: "▢",
    name: "Agent orchestration",
    body: "Multi-agent fleets — Claude Code skill graphs, MCP servers, hooks, subagent topologies, local-LLM routing through LiteLLM. Operators run their own dispatcher; I build the dispatcher.",
  },
  {
    rune: "◇",
    name: "Automation surfaces",
    body: "n8n, systemd, cron, container orchestration, hook chains. Multi-step processes that run themselves on a homelab and report back without retainer drag.",
  },
  {
    rune: "⌬",
    name: "Sovereign infrastructure",
    body: "Bare-metal homelab, Postgres, vector stores, observability, reverse proxies, secrets management. Production-grade substrate without the SaaS tax.",
  },
  {
    rune: "✕",
    name: "Security depth",
    body: "Senior offensive + detection background, CVP-approved scope. Applied as the lens for hardening AI agents, supply-chain hygiene, and the credential surfaces autonomous fleets create.",
  },
];

type RegistryProduct = {
  id: string;
  name: string;
  description: string;
  url: string;
  type: string;
  price: string;
  price_cents: number;
  live?: boolean;
  tags?: string[];
  created?: string;
  source?: string;
};

function typeLabel(type: string): string {
  const labels: Record<string, string> = {
    prompt_pack: "Prompt Pack",
    design_template: "Design Template",
    how_to_guide: "How-To Guide",
    skill_file: "Skill File",
    skill_pack: "Skill Pack",
    saas: "SaaS Product",
    landing_page: "Landing Page",
    digital_product: "Digital Product",
  };
  return labels[type] || type;
}

async function fetchRegistry(): Promise<RegistryProduct[]> {
  try {
    const resp = await fetch("https://skills.oblivionlabz.net/api/registry", {
      headers: { "User-Agent": "oblivionlabz-landing/1.0" },
      next: { revalidate: 300 },
    });
    if (!resp.ok) return [];
    const data = await resp.json();
    return (data.products || []).filter(
      (p: RegistryProduct) => p.live !== false && p.url,
    );
  } catch {
    return [];
  }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-muted">
      <span className="block h-px w-8 bg-border" />
      {children}
    </div>
  );
}

export default async function Page() {
  const products = await fetchRegistry();
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
            Autonomous-agent orchestration, shipped by the operator who runs
            his own fleet. Senior security depth on tap. No subscriptions, no
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
                Agents · Automation · Infra · Sec
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
                Live · {products.length} products
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
            Autonomous-agent orchestrator with senior security depth. Champaign, IL.
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <p className="text-lg leading-relaxed text-foreground/90">
              OblivionLabz is the public face of a one-operator forge that runs
              its own multi-agent fleet end-to-end. Skill graphs, MCP servers,
              hook chains, local-LLM routing, sovereign infrastructure. Senior
              offensive-security background is the lens — applied to hardening
              the agent stack itself, not as the primary product.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              The forge runs out of a personal homelab. Production discipline,
              bare-metal where it matters, no SaaS dependencies that can be
              pulled out from under the work. Everything I sell, I run myself
              first.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Output lands as discrete products — skill packs, agent harnesses,
              orchestration runbooks. Operator-priced, one-time licensing, no
              subscription trap. Long-game: ship the senior dispatcher
              workflows AI assistants don&apos;t.
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

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <li
                key={item.id}
                className="chamfer relative flex h-full flex-col border border-border bg-surface p-8 transition-colors hover:border-accent-dim"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em]">
                    <span
                      aria-hidden
                      className="block h-2 w-2 bg-accent pulse-dot"
                    />
                    <span className="text-accent">{typeLabel(item.type)}</span>
                  </div>
                  {item.price && (
                    <span className="font-mono text-sm font-semibold text-accent">
                      {item.price}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-tight">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {item.description}
                  </p>
                )}

                <div className="mt-6 mt-auto pt-6">
                  <Link
                    href={item.url}
                    className="inline-flex items-center gap-2 border border-accent-dim px-4 py-2.5 font-mono text-xs uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-accent-fg"
                    rel="noopener"
                  >
                    View product →
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          {products.length === 0 && (
            <div className="chamfer mt-14 border border-border bg-surface p-10 text-center font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Products loading — check back shortly.
            </div>
          )}
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
