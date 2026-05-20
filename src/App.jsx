import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Terminal, Zap } from "lucide-react";

const projects = [
  {
    name: "Unity Well",
    desc: "AI-powered coaching and support systems for call centers and field teams.",
    tag: "Agent Platform",
  },
  {
    name: "LangstonOps",
    desc: "Operational tools built for field execution, visibility, and accountability.",
    tag: "Ops System",
  },
  {
    name: "SheldonBot",
    desc: "An intelligent assistant experiment designed for practical utility.",
    tag: "Assistant",
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.26),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(31,86,255,0.22),transparent_36%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(0,200,255,.25)]">
              <span className="text-sm font-black tracking-tight text-cyan-200">DA</span>
            </div>
            <div>
              <p className="text-lg font-black tracking-[0.18em]">DA.EXE</p>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                Alpha v0.1
              </p>
            </div>
          </div>

          <a
            className="hidden rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 md:block"
            href="mailto:hello@daexelabs.com"
          >
            Contact
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Zap size={16} /> Ideas Made Executable
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Build the system.
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
                Execute the vision.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              DA.EXE builds sleek websites, intelligent agents, automation
              systems, and operational tools that move ideas from imagination
              into reality.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 shadow-[0_0_45px_rgba(34,211,238,.35)] transition hover:bg-white"
                href="#projects"
              >
                View Projects{" "}
                <ArrowRight
                  className="transition group-hover:translate-x-1"
                  size={18}
                />
              </a>

              <a
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
                href="mailto:hello@daexelabs.com"
              >
                Start a Build
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
                <span className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="ml-auto text-xs uppercase tracking-[0.25em] text-slate-400">
                  run.exe
                </span>
              </div>

              <div className="rounded-2xl border border-cyan-300/15 bg-black/40 p-6 font-mono text-sm leading-7 text-slate-300">
                <p>
                  <span className="text-cyan-300">$</span> initialize da.exe
                </p>
                <p>
                  <span className="text-blue-300">mission:</span> ideas →
                  systems
                </p>
                <p>
                  <span className="text-blue-300">status:</span> alpha build
                  active
                </p>
                <p>
                  <span className="text-blue-300">modules:</span> agents |
                  websites | ops tools
                </p>
                <p className="mt-5 text-cyan-200">
                  execution pipeline: online
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[Cpu, Terminal, Layers].map((Icon, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon className="text-cyan-200" size={24} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200/70">
              Current Builds
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Alpha Projects
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-slate-400 md:block">
            An early-stage ecosystem of practical tools, agents, and execution
            systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
            >
              <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                {project.tag}
              </p>
              <h3 className="text-2xl font-black">{project.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}