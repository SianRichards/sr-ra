// tech: mum's website
// policy/writing: policy case, link to my research paper summaries

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PolicyCase from "../components/PolicyCase";

const Projects = () => {
  return (
    <div className="flex flex-col h-screen text-yellow-200 pl-2">
      <TabGroup className="h-[94%] mt-3">
        <TabList className="flex gap-2 bg-none">
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 px-3">
            Policy Case
          </Tab>
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 px-3">
            Faunalytics
          </Tab>
          <Tab className="data-selected:bg-gray-500 cursor-pointer rounded-t-md bg-gray-800 px-3">
            Myth buster
          </Tab>
        </TabList>
        <TabPanels className="bg-gray-500 h-full rounded-b-md p-2 mr-2 rounded-r-md">
          <TabPanel><PolicyCase /></TabPanel>
          <TabPanel>Test 2</TabPanel>
          <TabPanel>Test 3</TabPanel>
          <TabPanel>Test 4</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Projects;
