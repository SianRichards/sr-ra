import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PolicyCase from "../components/PolicyCase";
import Faunalytics from "../components/Faunalytics";
import Header from "../components/Header";

const Projects = () => {
  return (
    <div className="flex flex-col h-screen text-yellow-200 px-6 py-4">
      <Header className="text-center mb-2">Projects</Header>
      <TabGroup className="flex flex-col flex-1 min-h-0">
        <TabList className="flex gap-2 font-semibold">
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 pt-1 px-4">
            <h2>Policy Case</h2>
          </Tab>
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 pt-1 px-4">
            <h2>Faunalytics</h2>
          </Tab>
        </TabList>

        <TabPanels className="bg-gray-500 flex-1 min-h-0 overflow-y-auto rounded-b-md p-2 mr-2 rounded-r-md mb-3">
          <TabPanel>
            <PolicyCase />
          </TabPanel>
          <TabPanel>
            <Faunalytics />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Projects;
