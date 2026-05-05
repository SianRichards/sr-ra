import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Timeline from "./routes/Timeline";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen flex flex-col md:flex-row text-teal-700">
      {/* Desktop navbar */}
      <NavBar />

      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md text-yellow-300"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Mobile menu */}
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="relative z-50 md:hidden"
      >
        {/* <div className="fixed inset-0 bg-black/30" /> */}
        <div className="fixed inset-0 flex">
          <DialogPanel>
            <MobileNavBar onClose={() => setIsOpen(false)} />
          </DialogPanel>
        </div>
      </Dialog>

      {/* Main content */}
      <main className="bg-teal-700 flex-1 w-full md:w-4/5 overflow-y-auto border-l-4 border-yellow-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career-timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
