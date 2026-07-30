import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PolicyCase from "../components/PolicyCase";
import Faunalytics from "../components/Faunalytics";
import Header from "../components/Header";
import CEA from "../components/CEA";
import SADs from "../components/SADs";

const tabs = ["Policy case", "Faunalytics", "Crab stunning CEA", "SADs"];

const Projects = () => {
  return (
    <div className="flex flex-col h-dvh text-yellow-200 px-4 py-4">
      <Header className="text-center mb-2">Projects</Header>
      <TabGroup className="flex flex-col flex-1 min-h-0 mt-2">
        <TabList className="flex md:gap-2 gap-1 font-semibold mr-2 md:mr-0">
          {tabs.map((t) => {
            return (
              <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 pt-1 md:px-4 px-1 flex-1 min-w-0 md:flex-none">
                <h2 className="text-[11px] sm:text-sm md:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                  {t}
                </h2>
              </Tab>
            );
          })}
        </TabList>

        <TabPanels className="bg-gray-500 flex-1 min-h-0 overflow-y-auto rounded-b-md p-2 mr-2 rounded-r-md mb-3">
          <TabPanel>
            <PolicyCase />
          </TabPanel>
          <TabPanel>
            <Faunalytics />
          </TabPanel>
          <TabPanel>
            <CEA />
          </TabPanel>
          <TabPanel>
            <SADs />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Projects;
