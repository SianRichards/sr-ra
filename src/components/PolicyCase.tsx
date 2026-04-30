import policyPdf from "../assets/policy_case.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Divider from "./Divider";

const PolicyCase = () => {
  return (
    <div className="flex flex-col gap-3 text-xl p-2">
      <h1 className="font-bold">
        Animal Welfare Enforcement in the UK: Risk-Based and Technology-led
        Approaches
      </h1>
      <Divider />

      <a
        href={policyPdf}
        className="w-fit inline-flex items-center gap-2 border px-3 py-1 rounded-md bg-yellow-200 text-teal-800"
      >
        <FontAwesomeIcon icon={faFilePdf} />
        Policy case
      </a>

      <ul className="flex flex-col gap-5 text-justify pr-42">
        <li>
          <span className="font-bold block">The Enforcement Problem</span>
          <p>
            In 2024, only 2.2% of UK farms were inspected for animal welfare
            compliance, meaning the average farm faces inspection once every
            14–45 years. Despite 28.4% of inspected farms breaching welfare
            standards, enforcement action is rare: 55% of local authorities took
            no formal action when breaches were found. The problem stems from
            fragmented responsibility across multiple authorities, severe
            resource constraints (one inspector per 490 farms nationally), and a
            reactive complaint-led system that allows certain farm types to
            avoid scrutiny indefinitely.
          </p>
        </li>

        <li>
          <span className="font-bold block">
            Solution 1: Risk-Based Inspection Targeting
          </span>
          <p>
            A centrally-led risk-based model would replace reactive
            complaint-driven inspections with predictive targeting. Using either
            statistical analysis of historical breach data or structured expert
            judgment, farms would be assigned risk scores and grouped into
            inspection bands (high, medium, low). High-risk farms would receive
            frequent unannounced visits while lower-risk farms are inspected
            less often. A pilot across selected local authorities would test
            whether this approach improves detection efficiency—finding more
            breaches per inspection—without requiring additional resources,
            though it works best alongside increased funding.
          </p>
        </li>

        <li>
          <span className="font-bold block">
            Solution 2: Precision Livestock Farming for Continuous Monitoring
          </span>
          <p>
            Precision livestock farming (PLF) technology—sensors, cameras, and
            microphones—can generate real-time welfare data on animal activity,
            health, and behavior. Rather than replacing inspections, PLF data
            would function as a regulatory trigger: flagging welfare concerns
            that warrant inspector investigation. In the short term, integration
            with existing farm assurance schemes (like Red Tractor) offers
            faster implementation. Long-term, government integration could
            extend oversight to non-scheme farms, but only if accompanied by
            transparency safeguards to prevent data misuse for surveillance or
            efficiency-over-welfare optimisation.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PolicyCase;
