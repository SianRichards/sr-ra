import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "./Divider";

const SADs = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <h3 className="text-lg">
        SADs Chart: Visualising Farmed Animal Suffering
      </h3>
      <Divider />
      <div className="flex flex-col gap-3 text-justify">
        <p>
          SADs (Suffering-Adjusted Days) are a way of measuring the total burden
          of suffering experienced by farmed animals, analogous to DALYs
          (Disability-Adjusted Life Years) in global health. A higher SAD score
          means more suffering - either because more animals are affected, each
          animal suffers more intensely, or both.
        </p>
        <p>
          This tool visualises SAD estimates across 20 farmed animal categories,
          from broiler chickens and dairy cows to shrimp and silkworms. You can
          compare total suffering burden across species, switch between
          different farming systems for the same animal, and toggle between
          total SAD burden and SADs per individual animal per year. The
          underlying data was produced as part of a broader
          project to bring data-driven analysis to farmed animal welfare policy.
        </p>
        <a
          href="https://sads-three.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <span className="flex items-center gap-1 font-semibold">
            View the live tool here
            <FontAwesomeIcon icon={faChartBar} size="sm" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SADs;
