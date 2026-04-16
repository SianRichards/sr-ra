import Test from "./Test";

type ItemType = {
  years: string;
  jobTitle: string;
  location?: string;
  institutionOrCompany?: string;
  extraInfo?: string;
};

const items: Array<ItemType> = [
  {
    years: "2014 - 2018",
    jobTitle: "BA Philosophy with Psychology (First Class)",
    location: "Coventry",
    institutionOrCompany: "University of Warwick",
    extraInfo: "Including Academic Year Abroad at the University of Cologne",
  },
  {
    years: "2019",
    jobTitle: "Trainee Junior Software Developer",
    location: "Bristol",
    institutionOrCompany: "_nology Coding Bootcamp",
  },
  {
    years: "2019",
    jobTitle: "Junior Software Developer in Test",
    institutionOrCompany: "Bud Systems",
    location: "Bristol",
  },
  {
    years: "2020 - 2021",
    jobTitle: "Software Developer",
    institutionOrCompany: "BookingLive",
    location: "Bristol",
  },
  {
    years: "2021 - 2022",
    jobTitle: "Full-stack Software Engineer",
    institutionOrCompany: "MadeTech",
    location: "Bristol",
  },
  {
    years: "2023 - 2025",
    jobTitle: "Software Developer",
    institutionOrCompany: "Outlook Energy",
    location: "Bristol",
  },
];

const otherItems: Array<ItemType> = [
  { years: "2022 - 2023", jobTitle: "Gap year", location: "Latin America" },
  {
    years: "2023 - 2024",
    jobTitle: "Research Paper Summariser (Volunteer)",
    institutionOrCompany: "Faunalytics",
  },
  {
    years: "2025 - 2026",
    jobTitle: "Co-organiser",
    institutionOrCompany: "Effective Altruism Bristol (city group)",
  },
  {
    years: "2025 - 2026",
    jobTitle: "FutureKind fellow",
    institutionOrCompany: "Electric Sheep",
  },
];

const ProfessionalTimeline = () => {
  return (
    <div className="col-start-3 overflow-y-auto pt-3 text-yellow-200">
      {items.map((item) => {
        const { years, jobTitle, location, institutionOrCompany, extraInfo } =
          item;
        return (
          <div className="h-50">
            <h2>{years}</h2>
            <p>{jobTitle} |</p>
            <p>
              {institutionOrCompany}, {location}
            </p>
            {extraInfo ?? <p>{extraInfo}</p>}
          </div>
        );
      })}
    </div>
  );
};

const NonProfessionalTimeline = () => {
  return (
    <div className="col-start-1 overflow-y-auto pt-3 text-orange-300 pl-3">
      {otherItems.map((item) => {
        const { years, jobTitle, location, institutionOrCompany, extraInfo } =
          item;
        return (
          <div className="h-50">
            <h2>{years}</h2>
            <p>{jobTitle} |</p>
            <p>
              {institutionOrCompany}, {location}
            </p>
            {extraInfo ?? <p>{extraInfo}</p>}
          </div>
        );
      })}
    </div>
  );
};

const Professional = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-3 text-yellow-200">
      <Test />
      {/* <NonProfessionalTimeline />
      <div className="col-start-2 flex justify-center">
        <div className="w-2 bg-yellow-200 h-full"></div>
      </div>
      <ProfessionalTimeline /> */}
    </div>
  );
};

export default Professional;
