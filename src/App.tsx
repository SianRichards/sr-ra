import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Timeline from "./routes/Timeline";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-screen flex flex-col md:flex-row md:h-screen text-teal-700">
      {/* Desktop navbar */}
      <NavBar />

      {/* Mobile menu */}
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="relative z-50 md:hidden"
      >
        <div className="fixed inset-0 flex">
          <DialogPanel>
            <MobileNavBar onClose={() => setIsOpen(false)} />
          </DialogPanel>
        </div>
      </Dialog>

      {/* Main content */}
      <main className="bg-teal-700 flex-1 w-full md:w-4/5 overflow-y-auto border-l-4 border-yellow-200 relative">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden absolute top-5.5 left-4 p-2 text-yellow-300 z-40"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
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
