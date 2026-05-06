import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col h-dvh text-yellow-200 px-6 py-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <header>
          <Header className="text-center" title={`Pronounced "Sh-ah-n"`}>
            Sian Richards
          </Header>
          <p className="mt-2 text-center">
            Philosophy graduate • Software developer • Animal welfare focus
          </p>
        </header>

        <div className="flex flex-col lg:flex-row flex-1 gap-4 lg:gap-6 lg:mt-8 min-h-0">
          <section className="order-2 lg:order-1 w-full lg:w-2/3 max-w-2xl flex flex-col gap-4 lg:gap-6">
            {/* Intro */}
            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <h2 className="mb-2">About this site</h2>
              <p className="text-justify">
                I'm involved in effective altruism and interested in finding the
                most effective ways to reduce animal suffering. This site is a
                "virtual CV" showing my career transitions across software
                development and EA-related work.
              </p>
            </div>

            {/* Why animal advocacy matters */}
            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <h2 className="font-bold mb-2">
                Why animal advocacy matters to me
              </h2>
              <p className="text-justify ">
                Sentience (the ability to feel pain and pleasure) is what
                matters to me morally. I believe doing good fundamentally
                involves alleviating suffering. I'm particularly focused on
                farmed animals because I place more weight on tractability which
                is higher relative to issues like wild animal suffering.
              </p>
            </div>

            {/* How I think about impact */}
            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <h2 className="font-bold mb-2">How I think about impact</h2>
              <p className="text-justify ">
                I evaluate cause areas using scale, severity, neglectedness, and
                tractability. I'm committed to evidence-led approaches, or where
                evidence is limited, well-reasoned theories of change.
              </p>
            </div>

            {/* Currently thinking about */}
            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <h2 className="font-bold mb-2">
                What I'm currently thinking about
              </h2>
              <p className="text-justify ">
                I'm interested in decapod crustacean welfare (particularly
                killing methods) based on scale and severity of suffering. I'm
                also exploring animal welfare enforcement as a bottleneck i.e.
                how poor enforcement undermines policy improvements.
              </p>
            </div>

            {/* Fellowship */}
            {/* <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <h2 className="font-bold mb-2">Why the Fellowship mattered</h2>
              <p className="text-justify ">
                It gave me space to examine UK animal welfare policy enforcement
                in depth, which became my showcase project. I explored how AI
                tools can improve animal welfare and why activists need to adopt
                them to compete with agriculture's productivity gains.
              </p>
            </div> */}

            {/* CTA
            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <h2 className="font-bold mb-2">Let's talk if</h2>
              <p className="text-justify ">
                You're working on UK animal welfare policy, have thoughts on
                crustacean welfare, or would like some help scoping a problem.
              </p>
            </div> */}
          </section>

          <aside className="order-1 lg:order-2 w-full lg:w-1/3 flex flex-col items-center lg:items-start gap-3 h-fit lg:sticky lg:top-8 mt-2 md:mt-0">
            <NavLink
              to="/career-timeline"
              className={({ isActive }) =>
                clsx(
                  "p-3 border rounded-md bg-teal-900/60 hover:bg-teal-800/80 transition w-full",
                  isActive && "border-yellow-200",
                )
              }
            >
              View Career Timeline
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                clsx(
                  "p-3 border rounded-md bg-teal-900/60 hover:bg-teal-800/80 transition w-full",
                  isActive && "border-yellow-200",
                )
              }
            >
              Projects (Policy + Research)
            </NavLink>

            {/* <NavLink
              to="/contact"
              className={({ isActive }) =>
                clsx(
                  "p-3 border rounded-md bg-teal-900/60 hover:bg-teal-800/80 transition",
                  isActive && "border-yellow-200",
                )
              }
            >
              Contact / Collaborate
            </NavLink> */}
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="mt-4  opacity-70">
          UX aesthetic inspired by Windows '95'
        </footer>
      </div>
    </div>
  );
};

export default Home;
