import { faFileExcel } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "./Divider";

const CEA = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <h3 className="text-lg">
        Cost-Effectiveness Analysis: Electrical Stunning for Crab Slaughter
      </h3>
      <Divider />
      <div className="flex flex-col gap-3 text-justify">
        <p>
          This spreadsheet models the welfare cost-effectiveness of introducing
          electrical stunning at the point of crab slaughter in the UK. It
          estimates the amount of suffering time avoided per £1 spent on a
          Crustastun electrical stunning device across four
          commercially-relevant slaughter methods: direct boiling, single
          spiking followed by boiling, double spiking followed by boiling, and
          chilling followed by boiling.
        </p>
        <p>
          Suffering duration estimates are drawn from research on brown crab (
          <em>Cancer pagurus</em>) and incorporate lower, central, and upper
          bounds to reflect uncertainty in the evidence base. Cost estimates are
          derived from current UK retail prices for the Crustastun device. Where
          data is unavailable, particularly regarding the prevalence of each
          slaughter method in UK commercial practice, assumptions are stated
          explicitly and flagged as such.
        </p>
        <a
          href="https://docs.google.com/spreadsheets/d/10B6_qHc6RDpvfCIvU2JFqvqUieDWO04EycJIGDjH4lg/edit?gid=1432575482#gid=1432575482"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <span className="flex items-center gap-1 font-semibold">
            View the full CEA here
            <FontAwesomeIcon icon={faFileExcel} size="sm" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default CEA;
