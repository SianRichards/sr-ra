import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const articles = [
  {
    title: "Protecting Bats In National Parks: It’s On Us",
    subheading: `White-nose syndrome is causing a decline in bat populations across
            U.S. national parks. How willing are park visitors to follow
            measures designed to protect bats?`,
    link: `https://faunalytics.org/protecting-bats-in-national-parks-its-on-us/`,
  },
  {
    title: "Designing A Better Legal System For Animals",
    subheading: `Reducing the human-animal divide in the legal system may create a more just system for humans and animals.`,
    link: `https://faunalytics.org/barriers-to-animal-law-reform/`,
  },
  {
    title: "Rethinking Animal Welfare From A Social Justice Lens",
    subheading: `These authors explain why animal studies scholars should consider the human-animal bond in relation to other social justice issues.`,
    link: `https://faunalytics.org/rethinking-animal-welfare-from-a-social-justice-lens/`,
  },
  {
    title: "The Rise Of Alt-Meat: Consumer Trends And Strategies",
    subheading: `This report investigates different factors related to the success of meat alternatives and how conventional meat producers may respond.`,
    link: `https://faunalytics.org/the-rise-of-alt-meat-consumer-trends-and-strategies/`,
  },
  {
    title: `“Depopulation” By Heatstroke: An Ethical Crisis`,
    subheading: `U.S. food producers increasingly mass-kill farmed animals through heatstroke, raising major ethical concerns for veterinarians to address.`,
    link: `https://faunalytics.org/depopulation-by-heatstroke-an-ethical-crisis/`,
  },
  {
    title: `How Animal Advocates Approach Moral Shocks`,
    subheading: `The animal protection movement often uses moral shocks to recruit new members. But how do animal advocates cope with these tactics?`,
    link: `https://faunalytics.org/how-animal-advocates-approach-moral-shocks/`,
  },
  {
    title: `The Influence Of Radical Flanks On Social Movement Support`,
    subheading: `Does the presence of radical factions within a movement impact support for more moderate advocates? This study investigates.`,
    link: `https://faunalytics.org/the-influence-of-radical-flanks-on-social-movement-support/`,
  },
];

const Faunalytics = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <h1 className="font-bold text-xl">Faunalytics Research Summaries</h1>
      <hr className="border-t border-yellow-200" />

      <ul className="flex flex-col gap-5 text-justify ">
        {articles.map(({ title, subheading, link }) => {
          return (
            <li key={link}>
              <span className="font-bold block">{title}</span>
              <p>{subheading}</p>
              <a href={link}>
                Read article <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Faunalytics;
