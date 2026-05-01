import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="flex flex-col h-screen text-yellow-200 px-6 py-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col h-full">
        <header className="mb-6">
          <Header className="text-center">Contact</Header>
          <p className="text-base mt-2 opacity-80 text-center">
            Open to collaboration on animal advocacy and research-focused
            projects
          </p>
        </header>

        <div className="flex flex-1 gap-4 lg:gap-6 lg:mt-8">
          <section className="w-2/3  max-w-2xl flex flex-col gap-4 lg:gap-6">
            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <div className="flex items-center gap-2 font-bold">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
              </div>

              <a
                href="mailto:sian_richards@hotmail.co.uk"
                className="text-yellow-200 underline mt-2 block"
              >
                sian_richards@hotmail.co.uk
              </a>

              <p className="text-sm mt-2 opacity-80">
                Best for collaboration, research, or opportunities
              </p>
            </div>

            <div className="bg-teal-900/70 p-4 rounded-md border border-yellow-200">
              <p className="text-justify">
                I usually respond to relevant messages within a reasonable
                timeframe. If it’s about animal advocacy, research, or
                EA-related work, feel free to reach out.
              </p>
            </div>
          </section>

          <aside className="w-1/3 flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/sian-richards-3a1235185/"
              target="_blank"
              className="p-3 border rounded-md bg-teal-900/60 hover:bg-teal-800 transition flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
