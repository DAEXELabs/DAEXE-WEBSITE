import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  Terminal,
  Users,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    name: "Unity Well",
    desc: "A GPT app trained daily for call centers and field teams, built to support coaching, communication, troubleshooting, and field execution. Specialized in Water Treatment.",
    tag: "GPT APP",
    icon: Users,
    link: "https://chatgpt.com/g/g-691233e6f3a88191a05661ecc2dbabbb-unity-well",
  },
  {
    name: "LangstonOps",
    desc: "Operational tools built for field execution, visibility, and accountability.",
    tag: "Ops System",
    icon: BarChart3,
    link: "https://langstonops.daexelabs.com",
  },
  {
    name: "SheldonBot",
    desc: "An intelligent assistant experiment designed for practical utility and real-world impact.",
    tag: "Assistant",
    icon: Bot,
    link: "#",
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03060d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(31,86,255,0.18),transparent_38%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />

      <nav className="relative z-10 flex items-center justify-between border-b border-cyan-400/10 bg-black/30 px-6 py-5 backdrop-blur-xl lg:px-10">
        <div className="flex items-center gap-4">
          <img
            src="/daexe-icon.png"
            alt="DA.EXE Icon"
            className="h-12 w-auto"
          />
          <div>
            <p className="text-xl font-black tracking-[0.18em]">DA.EXE</p>
            <p className="text-sm text-cyan-400">Alpha v0.1</p>
          </div>
        </div>

        <div className="hidden items-center gap-10 text-sm font-semibold tracking-[0.15em] text-slate-300 lg:flex">
          <a className="text-white hover:text-cyan-300" href="#">
            HOME
          </a>
          <a className="hover:text-cyan-300" href="#projects">
            PROJECTS
          </a>
          <a className="hover:text-cyan-300" href="#about">
            ABOUT
          </a>
          <a className="hover:text-cyan-300" href="#mission">
            MISSION
          </a>
          <a className="hover:text-cyan-300" href="mailto:hello@daexelabs.com">
            CONTACT
          </a>
        </div>

        <a
          className="hidden rounded-xl border border-cyan-400/70 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300 transition hover:bg-cyan-400/10 md:block"
          href="mailto:hello@daexelabs.com"
        >
          Start a Build
        </a>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/daexe-logo.png"
            alt="DA.EXE Dream Architect Executable"
            className="w-full max-w-3xl"
          />

          <p className="mt-10 text-3xl font-black uppercase tracking-[0.35em] text-white md:text-4xl">
            Ideas Made <span className="text-cyan-400">Executable</span>
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We build sleek websites, intelligent agents, automation systems, and
            operational tools that move ideas from imagination into reality.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_40px_rgba(0,170,255,.35)] transition hover:bg-cyan-400"
              href="#projects"
            >
              View Projects
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
              />
            </a>

            <a
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold uppercase tracking-[0.12em] text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-400/10"
              href="mailto:hello@daexelabs.com"
            >
              Start a Build
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

          <div className="relative rounded-[1.7rem] border border-cyan-400/35 bg-black/40 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-cyan-400/15 px-7 py-5">
              <span className="h-3.5 w-3.5 rounded-full bg-cyan-400" />
              <span className="h-3.5 w-3.5 rounded-full bg-slate-500" />
              <span className="h-3.5 w-3.5 rounded-full bg-slate-700" />
              <span className="ml-auto font-mono text-sm tracking-[0.2em] text-slate-300">
                run.exe
              </span>
            </div>

            <div className="p-7 font-mono text-base leading-8 text-slate-200">
              <p>
                <span className="text-cyan-300">$</span>{" "}
                <span className="text-cyan-300">initialize da.exe</span>
              </p>
              <p>
                <span className="text-cyan-300">mission:</span> ideas → systems
              </p>
              <p>
                <span className="text-cyan-300">status:</span> alpha build
                active
              </p>
              <p>
                <span className="text-cyan-300">modules:</span> agents |
                websites | ops tools
              </p>
              <p className="my-4 text-slate-500">
                --------------------------------
              </p>
              <p className="text-cyan-300">execution pipeline: online</p>

              <div className="mt-7 grid grid-cols-3 gap-4 font-sans">
                <div className="rounded-xl border border-cyan-400/20 bg-white/[0.03] p-5 text-center">
                  <Cpu className="mx-auto mb-4 text-cyan-400" size={38} />
                  <p className="text-xs font-bold uppercase tracking-[0.18em]">
                    Systems
                  </p>
                </div>

                <div className="rounded-xl border border-cyan-400/20 bg-white/[0.03] p-5 text-center">
                  <Terminal
                    className="mx-auto mb-4 text-cyan-400"
                    size={38}
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.18em]">
                    Automation
                  </p>
                </div>

                <div className="rounded-xl border border-cyan-400/20 bg-white/[0.03] p-5 text-center">
                  <Layers className="mx-auto mb-4 text-cyan-400" size={38} />
                  <p className="text-xs font-bold uppercase tracking-[0.18em]">
                    Execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10"
      >
        <div className="rounded-[2rem] border border-cyan-400/15 bg-black/25 p-7 backdrop-blur-xl md:p-10">
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
                Current Builds
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.22em] md:text-4xl">
                Alpha Projects
              </h2>
            </div>

            <p className="max-w-md text-slate-300 md:justify-self-end">
              An early-stage ecosystem of practical tools, agents, and execution
              systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <a
                  key={project.name}
                  href={project.link}
                  target={project.link === "#" ? "_self" : "_blank"}
                  rel={project.link === "#" ? undefined : "noopener noreferrer"}
                  className="group block rounded-2xl border border-cyan-400/15 bg-black/35 p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400/[0.06]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-cyan-400/35 bg-cyan-400/10 p-4">
                      <Icon className="text-cyan-400" size={30} />
                    </div>

                    <ArrowRight
                      className="-rotate-45 text-cyan-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={22}
                    />
                  </div>

                  <h3 className="text-2xl font-black">{project.name}</h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
                    {project.tag}
                  </p>

                  <p className="mt-5 leading-7 text-slate-300">
                    {project.desc}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-cyan-400/15 bg-black/25 p-8 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-black">Built for execution.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              DA.EXE is an alpha-stage technology lab focused on turning ideas
              into functional digital systems. The mission is simple: design
              practical tools that help people and businesses move faster, work
              smarter, and execute with clarity.
            </p>
          </div>

          <div
            id="mission"
            className="rounded-[2rem] border border-cyan-400/15 bg-black/25 p-8 backdrop-blur-xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-black">Dream. Design. Deploy.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              We believe great ideas should not stay trapped in notebooks,
              conversations, or imagination. DA.EXE exists to make useful tools,
              intelligent agents, and operational systems executable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}