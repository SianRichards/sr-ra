// tech: mum's website
// policy/writing: policy case, link to my research paper summaries

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PolicyCase from "../components/PolicyCase";
import Faunalytics from "../components/Faunalytics";
import Header from "../components/Header";

const Projects = () => {
  return (
    <div className="flex flex-col h-screen text-yellow-200 pl-2">
      <Header className="text-center">Projects</Header>
      <TabGroup className="flex flex-col flex-1 min-h-0">
        <TabList className="flex gap-2">
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 px-3">
            Policy Case
          </Tab>
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 px-3">
            Faunalytics
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
