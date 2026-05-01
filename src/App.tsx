import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Timeline from "./routes/Timeline";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="h-screen w-screen flex text-teal-700">
      <NavBar />
<main className="bg-teal-700 h-full w-4/5 overflow-y-auto border-l-4 border-yellow-200">
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career-timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
